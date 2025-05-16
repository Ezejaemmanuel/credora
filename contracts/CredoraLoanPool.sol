// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {AccessControlEnumerable} from "@openzeppelin/contracts/access/extensions/AccessControlEnumerable.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ICredoraLoanPool} from "./interfaces/ICredoraLoanPool.sol";
// IERC165 is implicitly inherited via AccessControlEnumerable -> AccessControl -> ERC165

/**
 * @notice Structure to hold comprehensive information about the loan pool.
 */
struct FullLoanPoolInfo {
    address poolAddress;
    address borrower;
    uint256 loanAmountPrincipal;
    uint256 interestRateBPS;
    uint256 durationSeconds;
    uint256 numberOfInstallments;
    address acceptedCurrency;
    string loanPurpose;
    string poolTokenName;
    string poolTokenSymbol;
    uint8 tokenDecimals;
    address poolAdmin;
    CredoraLoanPool.LoanStatus currentStatus;
    uint256 totalFundsRaised;
    uint256 loanStartTime;
    uint256 maturityTime;
    uint256 totalPrincipalRepaid;
    uint256 totalInterestRepaid;
    uint256 currentInstallmentPaidCount;
    uint256 installmentIntervalSeconds;
    uint256 installmentPrincipalPerPeriod;
    uint256 installmentInterestPerPeriod;
    uint256 nextInstallmentDueDate;
    bool isPaused;
}

/**
 * @notice Structure to hold information about a lender's position in the pool.
 */
struct LenderPoolInfo {
    uint256 shares; // current balance of pool tokens
    uint256 principalAlreadyClaimedByLender; // from lenderPrincipalClaimed mapping
    uint256 claimablePrincipalNow; // If status is Repaid, what this lender can claim of principal
    uint256 claimableInterestNow; // If status is Repaid, what this lender can claim of interest
}

/**
 * @title CredoraLoanPool
 * @author Credora Team
 * @notice Represents an individual undercollateralized loan pool.
 * It is an ERC20 token for shares, uses AccessControl for its own roles, and is Pausable.
 */
contract CredoraLoanPool is ICredoraLoanPool, ERC20, AccessControlEnumerable, Pausable {
    using SafeERC20 for IERC20;
    using Math for uint256;

    enum LoanStatus {
        PendingInitialization,
        Funding,
        Active,
        Repaid,
        Defaulted,
        Cancelled
    }

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    // DEFAULT_ADMIN_ROLE is inherited from AccessControlEnumerable

    string private _tokenNameDynamic;
    string private _tokenSymbolDynamic;

    address public borrower;
    uint256 public loanAmountPrincipal;
    uint256 public interestRateBPS;
    uint256 public durationSeconds;
    IERC20 public acceptedCurrency;
    address public poolAdmin; // Address that holds DEFAULT_ADMIN_ROLE for this pool
    string public loanPurpose; // Added loan purpose

    LoanStatus public currentStatus;
    uint256 public totalFundsRaised;
    uint256 public loanStartTime;
    uint256 public maturityTime;
    uint256 public totalPrincipalRepaid;
    uint256 public totalInterestRepaid;
    mapping(address => uint256) public lenderPrincipalClaimed;

    // Installment specific state variables
    uint256 public numberOfInstallments;
    uint256 public currentInstallmentPaidCount;
    uint256 public installmentIntervalSeconds; // Duration of each installment period
    uint256 public installmentPrincipalPerPeriod; // Principal due per installment (base)
    uint256 public installmentInterestPerPeriod; // Interest due per installment (base)
    uint256 public nextInstallmentDueDate; // Timestamp for the next installment's due date

    uint256 private constant BPS_DIVISOR = 10000;
    uint256 private constant SECONDS_IN_YEAR = 365 days;

    event PoolInitialized(address indexed admin, string tokenName, string tokenSymbol, string purpose);
    event Funded(address indexed lender, uint256 amountProvided, uint256 sharesMinted);
    event LoanActivated(uint256 startTime, uint256 maturityTime);
    event RepaymentMade(address indexed payer, uint256 principalAmount, uint256 interestAmount);
    event YieldClaimed(address indexed lender, uint256 principalClaimed, uint256 interestClaimed);
    event LoanDefaulted(address indexed marker, uint256 timestamp);
    event LoanCancelled(address indexed canceller, uint256 timestamp);
    event InstallmentPaid(
        address indexed borrower, uint256 installmentNumber, uint256 principalPaid, uint256 interestPaid
    );
    event CancelledFundsWithdrawn(address indexed lender, uint256 sharesBurned, uint256 amountWithdrawn);

    error Pool__AlreadyInitialized();
    error Pool__NotInitialized();
    error Pool__InvalidLoanStatus(LoanStatus requiredStatus, LoanStatus currentStatus);
    error Pool__FundingAmountTooLarge(uint256 amount, uint256 remaining);
    error Pool__ZeroAmount();
    error Pool__LoanNotRepaid();
    error Pool__NothingToClaim();
    error Pool__OnlyPoolAdmin();
    error Pool__OnlyBorrower();
    error Pool__UnauthorizedPauser(address caller);
    error Factory__ZeroAddress();
    error Factory__ZeroDuration();
    error Pool__InvalidNumberOfInstallments();
    error Pool__DurationNotDivisibleByInstallments();
    error Pool__InstallmentPaymentNotDue();
    error Pool__AllInstallmentsPaid();
    error Pool__LoanAlreadyRepaid();
    error Pool__NothingToRepay();
    error Pool__LoanNotCancelled();
    error Pool__NoSharesToWithdraw();

    modifier whenInitialized() {
        if (currentStatus == LoanStatus.PendingInitialization) {
            revert Pool__NotInitialized();
        }
        _;
    }

    modifier onlyPoolAdminCheck() {
        if (!hasRole(DEFAULT_ADMIN_ROLE, msg.sender)) {
            revert Pool__OnlyPoolAdmin();
        }
        _;
    }

    modifier onlyBorrowerCheck() {
        if (msg.sender != borrower) {
            revert Pool__OnlyBorrower();
        }
        _;
    }

    constructor() ERC20("Credora Pool Implementation", "CPI") {
        currentStatus = LoanStatus.PendingInitialization;
        // The account deploying this master implementation gets DEFAULT_ADMIN_ROLE for *this* contract (the master copy).
        // Clones will have their own DEFAULT_ADMIN_ROLE set in initialize().
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function name() public view virtual override(ERC20) returns (string memory) {
        return _tokenNameDynamic;
    }

    function symbol() public view virtual override(ERC20) returns (string memory) {
        return _tokenSymbolDynamic;
    }

    function decimals() public view virtual override(ERC20) returns (uint8) {
        return 6;
    }

    function initialize(
        address _borrower,
        uint256 _loanAmount, // Matched with interface, represents principal
        uint256 _interestRateBPS,
        uint256 _durationSeconds,
        uint256 _numberOfInstallments, // Added from interface
        address _acceptedCurrency,
        string calldata _poolTokenName, // Matched with interface
        string calldata _poolTokenSymbol, // Matched with interface
        address _admin,
        string calldata _purpose // Added purpose
    ) external override {
        if (currentStatus != LoanStatus.PendingInitialization) {
            revert Pool__AlreadyInitialized();
        }
        if (_borrower == address(0) || _acceptedCurrency == address(0) || _admin == address(0)) {
            revert Factory__ZeroAddress();
        }
        if (_loanAmount == 0) {
            revert Pool__ZeroAmount();
        }
        if (_durationSeconds == 0) {
            revert Factory__ZeroDuration();
        }
        if (_numberOfInstallments == 0) {
            revert Pool__InvalidNumberOfInstallments();
        }
        if (_durationSeconds % _numberOfInstallments != 0) {
            // For simplicity in this iteration, require duration to be perfectly divisible.
            // A more complex implementation could handle remainders by adjusting the last installment period.
            revert Pool__DurationNotDivisibleByInstallments();
        }

        _tokenNameDynamic = _poolTokenName;
        _tokenSymbolDynamic = _poolTokenSymbol;

        // Set up roles for the cloned instance.
        _grantRole(DEFAULT_ADMIN_ROLE, _admin);
        _grantRole(MINTER_ROLE, _admin);
        _grantRole(PAUSER_ROLE, _admin);
        _grantRole(MINTER_ROLE, address(this));

        borrower = _borrower;
        loanAmountPrincipal = _loanAmount; // Store the passed _loanAmount as loanAmountPrincipal
        interestRateBPS = _interestRateBPS;
        durationSeconds = _durationSeconds;
        acceptedCurrency = IERC20(_acceptedCurrency);
        poolAdmin = _admin;
        loanPurpose = _purpose; // Set loan purpose

        // Installment setup
        numberOfInstallments = _numberOfInstallments;
        installmentIntervalSeconds = _durationSeconds / _numberOfInstallments;

        // Calculate base principal and interest per installment
        // Note: Solidity's integer division truncates. Any remainder needs to be handled
        // during the repayment of the final installment to ensure full loan repayment.
        installmentPrincipalPerPeriod = loanAmountPrincipal / _numberOfInstallments;

        uint256 totalLoanInterest =
            (loanAmountPrincipal * interestRateBPS * durationSeconds) / BPS_DIVISOR / SECONDS_IN_YEAR;
        installmentInterestPerPeriod = totalLoanInterest / _numberOfInstallments;

        currentStatus = LoanStatus.Funding;
        emit PoolInitialized(_admin, _tokenNameDynamic, _tokenSymbolDynamic, loanPurpose);
    }

    function pause() public virtual whenInitialized {
        if (!hasRole(PAUSER_ROLE, msg.sender)) {
            revert Pool__UnauthorizedPauser(msg.sender);
        }
        _pause();
    }

    function unpause() public virtual whenInitialized {
        if (!hasRole(PAUSER_ROLE, msg.sender)) {
            revert Pool__UnauthorizedPauser(msg.sender);
        }
        _unpause();
    }

    function fund(uint256 amount) external whenNotPaused whenInitialized {
        if (currentStatus != LoanStatus.Funding) {
            revert Pool__InvalidLoanStatus(LoanStatus.Funding, currentStatus);
        }
        if (amount == 0) {
            revert Pool__ZeroAmount();
        }
        if (totalFundsRaised + amount > loanAmountPrincipal) {
            revert Pool__FundingAmountTooLarge(amount, loanAmountPrincipal - totalFundsRaised);
        }

        totalFundsRaised += amount;
        acceptedCurrency.safeTransferFrom(msg.sender, address(this), amount);
        super._mint(msg.sender, amount);

        emit Funded(msg.sender, amount, amount);

        if (totalFundsRaised == loanAmountPrincipal) {
            _activateLoan();
        }
    }

    function _activateLoan() internal {
        currentStatus = LoanStatus.Active;
        loanStartTime = block.timestamp;
        maturityTime = block.timestamp + durationSeconds; // Overall loan maturity
        // Set the due date for the first installment
        nextInstallmentDueDate = loanStartTime + installmentIntervalSeconds;
        emit LoanActivated(loanStartTime, maturityTime);
    }

    /**
     * @notice Allows the borrower to repay the current due installment.
     * @dev Can only be called by the borrower when the loan is active and an installment is due.
     * The full amount for the current installment (principal + interest) must be transferred.
     */
    function repayInstallment() external whenNotPaused whenInitialized onlyBorrowerCheck {
        if (currentStatus != LoanStatus.Active) {
            revert Pool__InvalidLoanStatus(LoanStatus.Active, currentStatus);
        }
        if (currentInstallmentPaidCount >= numberOfInstallments) {
            revert Pool__AllInstallmentsPaid();
        }
        // For this iteration, we require payment on or before the due date.
        // More sophisticated handling (e.g., grace periods, late fees) could be added.
        if (block.timestamp > nextInstallmentDueDate) {
            revert Pool__InstallmentPaymentNotDue(); // Or a more specific error like Pool__InstallmentOverdue
        }

        uint256 principalForThisInstallment = installmentPrincipalPerPeriod;
        uint256 interestForThisInstallment = installmentInterestPerPeriod;

        // Adjust amounts for the last installment to ensure total principal and interest are fully covered
        // This accounts for any rounding differences from integer division earlier.
        if (currentInstallmentPaidCount == numberOfInstallments - 1) {
            principalForThisInstallment = loanAmountPrincipal - totalPrincipalRepaid;
            uint256 totalCalculatedInterest = calculateTotalLoanInterest();
            interestForThisInstallment = totalCalculatedInterest - totalInterestRepaid;
        }

        uint256 totalAmountDueThisInstallment = principalForThisInstallment + interestForThisInstallment;
        if (totalAmountDueThisInstallment == 0 && loanAmountPrincipal != 0) {
            // This case should ideally not be hit if loanAmountPrincipal > 0 and installments are setup correctly.
            // However, if total interest is 0 and it's a 0-principal installment (which is weird), prevent 0-transfers.
            // If loanAmountPrincipal itself is 0, Pool__ZeroAmount would have caught it in initialize.
            // For the last installment, if all prior ones covered everything, this could be 0.
            // But the check currentInstallmentPaidCount >= numberOfInstallments should catch fully paid loans.
        } else if (totalAmountDueThisInstallment > 0) {
            acceptedCurrency.safeTransferFrom(msg.sender, address(this), totalAmountDueThisInstallment);
        }

        totalPrincipalRepaid += principalForThisInstallment;
        totalInterestRepaid += interestForThisInstallment;
        currentInstallmentPaidCount++;

        emit InstallmentPaid(
            borrower, currentInstallmentPaidCount, principalForThisInstallment, interestForThisInstallment
        );

        if (currentInstallmentPaidCount == numberOfInstallments) {
            currentStatus = LoanStatus.Repaid;
            // Use existing RepaymentMade event to signify full loan repayment
            emit RepaymentMade(borrower, totalPrincipalRepaid, totalInterestRepaid);
        } else {
            nextInstallmentDueDate += installmentIntervalSeconds;
        }
    }

    /**
     * @notice Allows the borrower to repay the entire outstanding loan amount (principal + accrued interest) at once.
     * @dev Can only be called by the borrower when the loan is active.
     * Interest is calculated pro-rata based on the time elapsed since the loan started,
     * up to the full original interest if repaid at or after maturity.
     */
    function repayFullLoan() external whenNotPaused whenInitialized onlyBorrowerCheck {
        if (currentStatus != LoanStatus.Active) {
            // If already Repaid, Defaulted, Cancelled, or still Funding.
            revert Pool__InvalidLoanStatus(LoanStatus.Active, currentStatus);
        }
        if (totalPrincipalRepaid >= loanAmountPrincipal && currentStatus == LoanStatus.Repaid) {
            // This specific check is for when it's already marked as Repaid fully.
            // The InvalidLoanStatus check above would catch Repaid, but this is more explicit.
            revert Pool__LoanAlreadyRepaid();
        }

        uint256 remainingPrincipalToPay = loanAmountPrincipal - totalPrincipalRepaid;

        uint256 elapsedTimeSeconds = block.timestamp - loanStartTime;
        if (block.timestamp >= maturityTime || elapsedTimeSeconds >= durationSeconds) {
            elapsedTimeSeconds = durationSeconds; // Cap at full duration
        }

        uint256 interestAccruedToDate =
            (loanAmountPrincipal * interestRateBPS * elapsedTimeSeconds) / (BPS_DIVISOR * SECONDS_IN_YEAR);

        uint256 interestAmountToPayNow = 0;
        if (interestAccruedToDate > totalInterestRepaid) {
            interestAmountToPayNow = interestAccruedToDate - totalInterestRepaid;
        }

        uint256 totalAmountToTransfer = remainingPrincipalToPay + interestAmountToPayNow;

        if (totalAmountToTransfer == 0) {
            // This could happen if principal is fully paid via installments, and pro-rata interest calculation
            // results in no additional interest due (or even less than installments paid, though we don't refund).
            // If truly nothing to pay, but loan not marked Repaid, then mark it as Repaid.
            if (currentStatus != LoanStatus.Repaid) {
                // Ensure not to emit event again if already repaid by some other means
                currentStatus = LoanStatus.Repaid;
                currentInstallmentPaidCount = numberOfInstallments; // Mark all installments as notionally complete
                // Emit RepaymentMade even if 0 transfer, to signify loan completion based on calculation.
                // totalPrincipalRepaid and totalInterestRepaid reflect what has been ACTUALLY collected.
                emit RepaymentMade(borrower, totalPrincipalRepaid, totalInterestRepaid);
            }
            return; // Nothing to transfer
        }

        acceptedCurrency.safeTransferFrom(msg.sender, address(this), totalAmountToTransfer);

        totalPrincipalRepaid += remainingPrincipalToPay; // Should now be equal to loanAmountPrincipal
        totalInterestRepaid += interestAmountToPayNow; // Should now be equal to interestAccruedToDate

        currentStatus = LoanStatus.Repaid;
        currentInstallmentPaidCount = numberOfInstallments; // Mark all installments as notionally complete

        emit RepaymentMade(borrower, totalPrincipalRepaid, totalInterestRepaid);
    }

    function claimYield() external whenNotPaused whenInitialized {
        if (currentStatus != LoanStatus.Repaid) {
            revert Pool__InvalidLoanStatus(LoanStatus.Repaid, currentStatus);
        }
        uint256 sharesToBurn = balanceOf(msg.sender);
        if (sharesToBurn == 0) {
            revert Pool__NothingToClaim();
        }
        // Use loanAmountPrincipal as the representation of total shares issued when fully funded,
        // assuming shares are minted 1:1 with the currency amount.
        if (loanAmountPrincipal == 0) {
            // Should not happen if pool was funded
            revert Pool__NothingToClaim();
        }
        uint256 principalOwedToLender = (sharesToBurn * totalPrincipalRepaid) / loanAmountPrincipal;
        uint256 interestOwedToLender = (sharesToBurn * totalInterestRepaid) / loanAmountPrincipal;

        uint256 actualPrincipalToClaim = principalOwedToLender - lenderPrincipalClaimed[msg.sender];
        if (actualPrincipalToClaim == 0 && interestOwedToLender == 0) {
            revert Pool__NothingToClaim();
        }
        super._burn(msg.sender, sharesToBurn);
        lenderPrincipalClaimed[msg.sender] += actualPrincipalToClaim;
        uint256 totalAmountToTransfer = actualPrincipalToClaim + interestOwedToLender;
        if (totalAmountToTransfer > 0) {
            acceptedCurrency.safeTransfer(msg.sender, totalAmountToTransfer);
        }
        emit YieldClaimed(msg.sender, actualPrincipalToClaim, interestOwedToLender);
    }

    function calculateInterest() public view returns (uint256) {
        if (loanAmountPrincipal == 0 || interestRateBPS == 0 || durationSeconds == 0) {
            return 0;
        }
        // This calculates total interest for the entire loan duration
        return (loanAmountPrincipal * interestRateBPS * durationSeconds) / BPS_DIVISOR / SECONDS_IN_YEAR;
    }

    // Renaming for clarity as it calculates total interest for the entire loan period.
    function calculateTotalLoanInterest() public view returns (uint256) {
        return calculateInterest();
    }

    function markAsDefaulted() external onlyPoolAdminCheck whenNotPaused whenInitialized {
        if (currentStatus != LoanStatus.Active && currentStatus != LoanStatus.Funding) {
            revert Pool__InvalidLoanStatus(LoanStatus.Active, currentStatus);
        }
        currentStatus = LoanStatus.Defaulted;
        emit LoanDefaulted(msg.sender, block.timestamp);
    }

    function cancelLoan() external onlyPoolAdminCheck whenNotPaused whenInitialized {
        if (currentStatus != LoanStatus.Funding) {
            revert Pool__InvalidLoanStatus(LoanStatus.Funding, currentStatus);
        }
        currentStatus = LoanStatus.Cancelled;
        emit LoanCancelled(msg.sender, block.timestamp);
    }

    function getTotalOwed() public view returns (uint256) {
        return loanAmountPrincipal + calculateInterest(); // This still calculates total original debt
    }

    function getFundingRemaining() public view returns (uint256) {
        if (currentStatus != LoanStatus.Funding) return 0;
        if (loanAmountPrincipal < totalFundsRaised) return 0;
        return loanAmountPrincipal - totalFundsRaised;
    }

    /**
     * @notice Allows lenders to withdraw their funds if the loan was cancelled during the Funding phase.
     * @dev Can only be called when the loan status is Cancelled.
     * Lenders burn their pool shares and receive their contributed `acceptedCurrency` back.
     */
    function withdrawCancelledFunds() external whenNotPaused whenInitialized {
        if (currentStatus != LoanStatus.Cancelled) {
            revert Pool__LoanNotCancelled();
        }

        uint256 sharesToWithdraw = balanceOf(msg.sender);
        if (sharesToWithdraw == 0) {
            revert Pool__NoSharesToWithdraw();
        }

        // In the funding phase, 1 share = 1 unit of acceptedCurrency (assuming same decimals)
        uint256 amountToWithdraw = sharesToWithdraw;

        super._burn(msg.sender, sharesToWithdraw);
        // SafeERC20 transfer used for acceptedCurrency throughout the contract
        acceptedCurrency.safeTransfer(msg.sender, amountToWithdraw);

        emit CancelledFundsWithdrawn(msg.sender, sharesToWithdraw, amountToWithdraw);
    }

    // --- AccessControl & ERC165 Support ---
    // AccessControlEnumerable inherits ERC165, which implements supportsInterface.
    // We override it to ensure our contract correctly participates in the C3 linearization
    // and to potentially add more interface checks if needed in the future.
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(AccessControlEnumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // --- Custom Getter Functions ---

    /**
     * @notice Retrieves comprehensive information about the loan pool.
     * @return info A struct containing detailed information about the pool.
     */
    function getLoanPoolInfo() external view returns (FullLoanPoolInfo memory info) {
        info.poolAddress = address(this);
        info.borrower = borrower;
        info.loanAmountPrincipal = loanAmountPrincipal;
        info.interestRateBPS = interestRateBPS;
        info.durationSeconds = durationSeconds;
        info.numberOfInstallments = numberOfInstallments;
        info.acceptedCurrency = address(acceptedCurrency);
        info.loanPurpose = loanPurpose;
        info.poolTokenName = _tokenNameDynamic; // Use stored name
        info.poolTokenSymbol = _tokenSymbolDynamic; // Use stored symbol
        info.tokenDecimals = decimals();
        info.poolAdmin = poolAdmin;
        info.currentStatus = currentStatus;
        info.totalFundsRaised = totalFundsRaised;
        info.loanStartTime = loanStartTime;
        info.maturityTime = maturityTime;
        info.totalPrincipalRepaid = totalPrincipalRepaid;
        info.totalInterestRepaid = totalInterestRepaid;
        info.currentInstallmentPaidCount = currentInstallmentPaidCount;
        info.installmentIntervalSeconds = installmentIntervalSeconds;
        info.installmentPrincipalPerPeriod = installmentPrincipalPerPeriod;
        info.installmentInterestPerPeriod = installmentInterestPerPeriod;
        info.nextInstallmentDueDate = nextInstallmentDueDate;
        info.isPaused = paused(); // From Pausable
        return info;
    }

    /**
     * @notice Retrieves information about a specific lender's position in this loan pool.
     * @param _lender The address of the lender.
     * @return lenderInfo A struct containing the lender's shares, claimed amounts, and currently claimable amounts.
     */
    function getLenderPoolInformation(address _lender) external view returns (LenderPoolInfo memory lenderInfo) {
        lenderInfo.shares = balanceOf(_lender);
        lenderInfo.principalAlreadyClaimedByLender = lenderPrincipalClaimed[_lender];

        if (currentStatus == LoanStatus.Repaid) {
            uint256 totalPoolShares = totalSupply();
            if (totalPoolShares > 0) {
                uint256 lenderPortionPrincipal = (lenderInfo.shares * totalPrincipalRepaid) / totalPoolShares;
                uint256 lenderPortionInterest = (lenderInfo.shares * totalInterestRepaid) / totalPoolShares;

                if (lenderPortionPrincipal >= lenderInfo.principalAlreadyClaimedByLender) {
                    lenderInfo.claimablePrincipalNow =
                        lenderPortionPrincipal - lenderInfo.principalAlreadyClaimedByLender;
                } else {
                    // This case should ideally not happen if accounting is correct,
                    // implies more principal was claimed than calculated as due.
                    lenderInfo.claimablePrincipalNow = 0;
                }
                lenderInfo.claimableInterestNow = lenderPortionInterest;
                // Note: Interest is claimed proportionally with principal in claimYield.
                // There isn't a separate "interestAlreadyClaimedByLender" state variable.
                // The claimableInterestNow represents the lender's share of total interest repaid,
                // assuming they haven't claimed yet or what remains claimable.
            }
        }
        // If not Repaid, claimablePrincipalNow and claimableInterestNow remain 0 by default.
        return lenderInfo;
    }

    /**
     * @notice Retrieves a snapshot of the pool's frequently changing operational data.
     * @return status The current loan status.
     * @return fundsRaised Total funds raised so far.
     * @return principalRepaid Total principal repaid by the borrower.
     * @return interestRepaid Total interest repaid by the borrower.
     * @return installmentsPaidCount Number of installments already paid.
     * @return nextDueDateTime Timestamp of the next installment due date (0 if all paid or not active).
     * @return currentlyPaused Boolean indicating if the contract is currently paused.
     */
    function getPoolDynamicState()
        external
        view
        returns (
            LoanStatus status,
            uint256 fundsRaised,
            uint256 principalRepaid,
            uint256 interestRepaid,
            uint256 installmentsPaidCount,
            uint256 nextDueDateTime,
            bool currentlyPaused
        )
    {
        status = currentStatus;
        fundsRaised = totalFundsRaised;
        principalRepaid = totalPrincipalRepaid;
        interestRepaid = totalInterestRepaid;
        installmentsPaidCount = currentInstallmentPaidCount;
        if (currentStatus == LoanStatus.Active && currentInstallmentPaidCount < numberOfInstallments) {
            nextDueDateTime = nextInstallmentDueDate;
        } else {
            nextDueDateTime = 0;
        }
        currentlyPaused = paused();
    }

    /**
     * @notice Provides details for the next upcoming installment.
     * @return principalDue The principal amount due for the next installment.
     * @return interestDue The interest amount due for the next installment.
     * @return dueDate The due date of the next installment.
     * @return isFinalInstallment True if this is the last installment.
     */
    function getNextInstallmentDetails()
        external
        view
        returns (uint256 principalDue, uint256 interestDue, uint256 dueDate, bool isFinalInstallment)
    {
        if (currentStatus != LoanStatus.Active || currentInstallmentPaidCount >= numberOfInstallments) {
            return (0, 0, 0, false);
        }

        dueDate = nextInstallmentDueDate;
        isFinalInstallment = (currentInstallmentPaidCount == numberOfInstallments - 1);

        if (isFinalInstallment) {
            principalDue = loanAmountPrincipal - totalPrincipalRepaid;
            uint256 totalCalculatedInterest = calculateTotalLoanInterest();
            if (totalCalculatedInterest > totalInterestRepaid) {
                interestDue = totalCalculatedInterest - totalInterestRepaid;
            } else {
                interestDue = 0;
            }
        } else {
            principalDue = installmentPrincipalPerPeriod;
            interestDue = installmentInterestPerPeriod;
        }
        return (principalDue, interestDue, dueDate, isFinalInstallment);
    }

    /**
     * @notice Calculates the amounts required for an early full loan repayment at the current time.
     * @dev Only applicable when the loan is Active.
     * @return outstandingPrincipal The remaining principal to be paid.
     * @return currentInterestDue The interest accrued up to now that is yet to be paid.
     * @return totalAmountDue The total sum of outstanding principal and current interest due.
     */
    function getEarlyRepaymentQuote()
        external
        view
        returns (uint256 outstandingPrincipal, uint256 currentInterestDue, uint256 totalAmountDue)
    {
        if (currentStatus != LoanStatus.Active) {
            return (0, 0, 0);
        }

        outstandingPrincipal = loanAmountPrincipal - totalPrincipalRepaid;

        uint256 elapsedTimeSeconds = block.timestamp > loanStartTime ? block.timestamp - loanStartTime : 0;
        if (elapsedTimeSeconds >= durationSeconds) {
            elapsedTimeSeconds = durationSeconds; // Cap at full duration
        }

        uint256 interestAccruedToDate =
            (loanAmountPrincipal * interestRateBPS * elapsedTimeSeconds) / (BPS_DIVISOR * SECONDS_IN_YEAR);

        if (interestAccruedToDate > totalInterestRepaid) {
            currentInterestDue = interestAccruedToDate - totalInterestRepaid;
        } else {
            currentInterestDue = 0; // Interest already paid via installments covers or exceeds pro-rata calculation
        }

        totalAmountDue = outstandingPrincipal + currentInterestDue;
        return (outstandingPrincipal, currentInterestDue, totalAmountDue);
    }

    /**
     * @notice Provides a consolidated view of the funding status.
     * @return fundedAmount The total amount of currency raised so far.
     * @return requiredAmount The total principal amount required for the loan.
     * @return remainingToFund The amount still needed to fully fund the loan.
     * @return isFullyFunded True if the loan principal has been fully raised.
     */
    function getFundingStatus()
        external
        view
        returns (uint256 fundedAmount, uint256 requiredAmount, uint256 remainingToFund, bool isFullyFunded)
    {
        fundedAmount = totalFundsRaised;
        requiredAmount = loanAmountPrincipal;
        remainingToFund = loanAmountPrincipal > totalFundsRaised ? loanAmountPrincipal - totalFundsRaised : 0;
        isFullyFunded = totalFundsRaised >= loanAmountPrincipal;
        return (fundedAmount, requiredAmount, remainingToFund, isFullyFunded);
    }

    /**
     * @notice Returns various time-related metrics for the loan.
     * @return timeElapsedSinceStart Seconds passed since the loan became active (0 if not started).
     * @return timeRemainingOnLoan Seconds remaining until the loan's maturity (0 if not started or matured).
     * @return timeUntilNextInstallment Seconds remaining until the next installment is due (0 if not applicable).
     */
    function getTimeMetrics()
        external
        view
        returns (uint256 timeElapsedSinceStart, uint256 timeRemainingOnLoan, uint256 timeUntilNextInstallment)
    {
        if (
            currentStatus == LoanStatus.Active || currentStatus == LoanStatus.Repaid
                || currentStatus == LoanStatus.Defaulted
        ) {
            if (block.timestamp > loanStartTime) {
                timeElapsedSinceStart = block.timestamp - loanStartTime;
            } else {
                timeElapsedSinceStart = 0;
            }

            if (maturityTime > block.timestamp) {
                timeRemainingOnLoan = maturityTime - block.timestamp;
            } else {
                timeRemainingOnLoan = 0;
            }

            if (
                currentStatus == LoanStatus.Active && currentInstallmentPaidCount < numberOfInstallments
                    && nextInstallmentDueDate > block.timestamp
            ) {
                timeUntilNextInstallment = nextInstallmentDueDate - block.timestamp;
            } else {
                timeUntilNextInstallment = 0;
            }
        } else {
            // For Funding, PendingInitialization, Cancelled states
            timeElapsedSinceStart = 0;
            timeRemainingOnLoan = durationSeconds; // Show full duration as time remaining
            timeUntilNextInstallment = 0;
        }
    }

    /**
     * @notice Provides details about the interest for the loan.
     * @return totalInterestCalculatedForLoan The total interest amount for the entire loan duration if held to maturity.
     * @return interestAccruedSoFar The total interest that has theoretically accrued based on elapsed time (pro-rata).
     * @return interestRemainingToRepay The difference between total calculated interest and interest already paid.
     */
    function getAccruedInterestDetails()
        external
        view
        returns (
            uint256 totalInterestCalculatedForLoan,
            uint256 interestAccruedSoFar,
            uint256 interestRemainingToRepay // Tracks total interest to be paid vs what has been paid
        )
    {
        totalInterestCalculatedForLoan = calculateTotalLoanInterest();

        if (
            currentStatus == LoanStatus.Active || currentStatus == LoanStatus.Repaid
                || currentStatus == LoanStatus.Defaulted
        ) {
            uint256 elapsedTime = 0;
            if (block.timestamp > loanStartTime) {
                elapsedTime = block.timestamp - loanStartTime;
            }
            if (elapsedTime >= durationSeconds) {
                elapsedTime = durationSeconds;
            }
            interestAccruedSoFar =
                (loanAmountPrincipal * interestRateBPS * elapsedTime) / (BPS_DIVISOR * SECONDS_IN_YEAR);
        } else {
            interestAccruedSoFar = 0;
        }

        if (totalInterestCalculatedForLoan > totalInterestRepaid) {
            interestRemainingToRepay = totalInterestCalculatedForLoan - totalInterestRepaid;
        } else {
            interestRemainingToRepay = 0;
        }

        return (totalInterestCalculatedForLoan, interestAccruedSoFar, interestRemainingToRepay);
    }
}
