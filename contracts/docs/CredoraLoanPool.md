# Credora Loan Pool (`CredoraLoanPool.sol`)

This document describes the `CredoraLoanPool` smart contract, which represents an individual, tokenized loan within the Credora protocol.

## Overview

The `CredoraLoanPool` contract is the core operational unit for each loan. It is designed to be deployed as a minimal proxy (clone) by the `CredoraPoolFactory`. Each instance of this contract manages:

1.  **Itself as an ERC20 Token**: Represents lenders' shares in this specific loan. The token's name, symbol, and decimals (fixed at 6) are configured during initialization for each cloned pool.
2.  **Loan Lifecycle Management**: Handles states from funding through repayment or default.
3.  **Funding Mechanism**: Allows lenders to contribute the `acceptedCurrency` (e.g., USDC, also 6 decimals) and receive an equivalent amount of pool share tokens in return.
4.  **Repayment Process**: Enables the borrower to repay the loan principal and accrued interest.
5.  **Yield Distribution**: Allows lenders to claim their proportional share of the repaid funds by burning their pool tokens.

It inherits from OpenZeppelin's `ERC20` (for token functionality), `AccessControlEnumerable` (for role-based permissions), and `Pausable` (to allow pausing of sensitive operations). It also implements the `ICredoraLoanPool` interface for its `initialize` function.

## Key Features and Functionality

### Base Contracts

-   `ICredoraLoanPool`: Ensures the presence of the `initialize` function.
-   `ERC20`: Provides standard token functionality. Name, symbol, and decimals are overridden.
-   `AccessControlEnumerable`: Manages roles (`MINTER_ROLE`, `PAUSER_ROLE`, `DEFAULT_ADMIN_ROLE`) for pool-specific operations. Allows enumeration of roles and members.
-   `Pausable`: Allows critical functions to be paused by an authorized account.

### State Variables

#### ERC20 Properties (Dynamic per Pool)
-   `_tokenNameDynamic` (string private): Stores the custom name for this pool's ERC20 token, set in `initialize`. Accessed via overridden `name()` function.
-   `_tokenSymbolDynamic` (string private): Stores the custom symbol for this pool's ERC20 token, set in `initialize`. Accessed via overridden `symbol()` function.
-   *Decimals are fixed at 6 via an overridden `decimals()` function.*

#### Loan Parameters (Set at Initialization)

-   `borrower` (address): The address of the loan recipient.
-   `loanAmountPrincipal` (uint256): The target principal amount to be raised for the loan (in 6-decimal units, like USDC).
-   `interestRateBPS` (uint256): The annual interest rate in Basis Points.
-   `durationSeconds` (uint256): The intended duration of the loan.
-   `acceptedCurrency` (IERC20): The ERC20 token contract address used for funding and repayment (expected to be USDC with 6 decimals).
-   `poolAdmin` (address): The address granted `DEFAULT_ADMIN_ROLE` for this pool, allowing it to manage `MINTER_ROLE` and `PAUSER_ROLE` and perform administrative actions like marking defaults.
-   `numberOfInstallments` (uint256): The total number of installments for the loan.

#### Loan State (Dynamic)

-   `currentStatus` (LoanStatus enum): `PendingInitialization`, `Funding`, `Active`, `Repaid`, `Defaulted`, `Cancelled`.
-   `totalFundsRaised` (uint256): Cumulative `acceptedCurrency` raised (6-decimal units).
-   `loanStartTime` (uint256): Timestamp when the loan becomes active.
-   `maturityTime` (uint256): Timestamp when the loan is due (`loanStartTime + durationSeconds`).
-   `totalPrincipalRepaid` (uint256): Principal repaid by borrower (6-decimal units).
-   `totalInterestRepaid` (uint256): Interest repaid by borrower (6-decimal units).
-   `lenderPrincipalClaimed` (mapping `address => uint256`): Tracks principal claimed by lenders.
-   `currentInstallmentPaidCount` (uint256): Tracks how many installments have been successfully paid.
-   `installmentIntervalSeconds` (uint256): The duration of each installment period (`durationSeconds / numberOfInstallments`).
-   `installmentPrincipalPerPeriod` (uint256): The base principal amount due per installment.
-   `installmentInterestPerPeriod` (uint256): The base interest amount due per installment.
-   `nextInstallmentDueDate` (uint256): Timestamp for when the next installment payment is due.

#### Roles (Pool-Specific)
-   `MINTER_ROLE` (bytes32 public constant): Accounts with this role can mint new pool share tokens. Granted to the `poolAdmin` and `address(this)` (the pool contract itself for the `fund` function) during initialization.
-   `PAUSER_ROLE` (bytes32 public constant): Accounts with this role can pause and unpause the contract's pausable functions (e.g., `fund`, `repay`, token transfers). Granted to the `poolAdmin` during initialization.
-   `DEFAULT_ADMIN_ROLE` (bytes32, from AccessControl): Granted to the `poolAdmin` during initialization. This role can manage `MINTER_ROLE` and `PAUSER_ROLE` for this specific pool instance.

### Events

-   `PoolInitialized(address indexed admin, string tokenName, string tokenSymbol)`: Emitted on successful initialization.
-   `Funded(address indexed lender, uint256 amountProvided, uint256 sharesMinted)`: `amountProvided` is in `acceptedCurrency` units, `sharesMinted` is in pool token units (both 6 decimals).
-   `LoanActivated(uint256 startTime, uint256 maturityTime)`: Emitted when the loan is fully funded and transitions to the `Active` state.
-   `RepaymentMade(address indexed payer, uint256 principalAmount, uint256 interestAmount)`: Amounts in `acceptedCurrency` units.
-   `YieldClaimed(address indexed lender, uint256 principalClaimed, uint256 interestClaimed)`: Amounts in `acceptedCurrency` units.
-   `LoanDefaulted(address indexed marker, uint256 timestamp)`: Emitted when the `poolAdmin` marks the loan as defaulted.
-   `LoanCancelled(address indexed canceller, uint256 timestamp)`: Emitted when the `poolAdmin` cancels the loan.
-   `InstallmentPaid(address indexed borrower, uint256 installmentNumber, uint256 principalPaid, uint256 interestPaid)`: Emitted when an installment is successfully paid.

### Core Functions

1.  **`constructor()`**
    -   Calls `ERC20("Credora Pool Implementation", "CPI")`. This name/symbol is for the master implementation contract and is overridden for clones by the dynamic properties.
    -   Sets `currentStatus` to `PendingInitialization`.
    -   The deployer of the master implementation receives `DEFAULT_ADMIN_ROLE` for that specific implementation contract instance (not for the clones).

2.  **`name()`, `symbol()`, `decimals()`** (public view virtual override)
    -   `name()`: Returns `_tokenNameDynamic`.
    -   `symbol()`: Returns `_tokenSymbolDynamic`.
    -   `decimals()`: Returns `6`.

3.  **`initialize(...)`** (external, implements `ICredoraLoanPool`)
    -   **Caller**: Expected to be the `CredoraPoolFactory`.
    -   **Action**: Sets loan parameters including `numberOfInstallments`. Calculates `installmentIntervalSeconds`, `installmentPrincipalPerPeriod`, and `installmentInterestPerPeriod`. Sets `_tokenNameDynamic` and `_tokenSymbolDynamic`. Grants `DEFAULT_ADMIN_ROLE`, `MINTER_ROLE`, and `PAUSER_ROLE` for this pool instance to the specified `_admin`. Also grants `MINTER_ROLE` to `address(this)` (the pool itself).
    -   Transitions `currentStatus` to `Funding`. Emits `PoolInitialized`.

4. **`pause()`, `unpause()`** (public virtual `whenInitialized`)
    -   Callable by accounts with `PAUSER_ROLE` to pause/unpause operations.

5.  **`fund(uint256 amount)`** (external `whenNotPaused`, `whenInitialized`)
    -   Lender contributes `amount` of `acceptedCurrency` (6 decimals).
    -   Mints an equivalent `amount` of pool share tokens (6 decimals) to the lender. Requires `address(this)` to have `MINTER_ROLE`.
    -   Activates loan if `loanAmountPrincipal` is reached, sets `loanStartTime`, `maturityTime`, and the `nextInstallmentDueDate` for the first installment.

6.  **`repayInstallment()`** (external `whenNotPaused`, `whenInitialized`, `onlyBorrowerCheck`)
    -   **Role**: `onlyBorrowerCheck`
    -   Allows the borrower to pay the current due installment.
    -   **Validations**:
        -   Loan status must be `Active`.
        -   Not all installments should have been paid already.
        -   Current block timestamp should ideally be on or before `nextInstallmentDueDate` (current logic might be stricter or require adjustment for "overdue" interpretation).
    -   **Process**:
        1.  Calculates principal and interest for the current installment, with an adjustment for the final installment to cover any remaining amounts due to rounding.
        2.  Transfers the total installment amount from the borrower to the pool.
        3.  Updates `totalPrincipalRepaid`, `totalInterestRepaid`, and `currentInstallmentPaidCount`.
        4.  Emits `InstallmentPaid`.
        5.  If all installments are paid, transitions `currentStatus` to `Repaid` and emits `RepaymentMade`.
        6.  Otherwise, updates `nextInstallmentDueDate` for the next period.

7.  **`repayFullLoan()`** (external `whenNotPaused`, `whenInitialized`, `onlyBorrowerCheck`)
    -   **Role**: `onlyBorrowerCheck`
    -   Allows the borrower to repay the entire outstanding loan amount (remaining principal + pro-rata accrued interest) at once.
    -   **Validations**:
        -   Loan status must be `Active`.
    -   **Process**:
        1.  Calculates remaining principal.
        2.  Calculates interest accrued up to the current time (or full duration if past maturity).
        3.  Determines the interest amount still to be paid (accrued interest minus interest already paid via installments).
        4.  Transfers the total `remainingPrincipalToPay + interestAmountToPayNow` from the borrower.
        5.  Updates `totalPrincipalRepaid` and `totalInterestRepaid`.
        6.  Sets `currentStatus` to `Repaid` and `currentInstallmentPaidCount` to `numberOfInstallments`.
        7.  Emits `RepaymentMade`.

8.  **`claimYield()`** (external `whenNotPaused`, `whenInitialized`)
    -   Lender burns their pool shares to claim proportional principal and interest in `acceptedCurrency`. Requires loan to be in `Repaid` status.

9.  **`calculateTotalLoanInterest()`** (public view) (Formerly `calculateInterest`)
    -   Calculates the total simple interest for the entire loan term and principal.

#### Admin Functions (Callable by `poolAdmin` via `DEFAULT_ADMIN_ROLE` or specific roles)

10. **`markAsDefaulted()`** (external `onlyPoolAdminCheck`, `whenNotPaused`, `whenInitialized`)
    -   Sets `currentStatus` to `Defaulted`.

11. **`cancelLoan()`** (external `onlyPoolAdminCheck`, `whenNotPaused`, `whenInitialized`)
    -   Sets `currentStatus` to `Cancelled` (typically during `Funding` state).

### Modifiers
-   `whenInitialized`: Ensures contract is initialized.
-   `onlyPoolAdminCheck`: Checks if `msg.sender` has `DEFAULT_ADMIN_ROLE` for this pool.
-   `onlyBorrowerCheck`: Checks if `msg.sender` is the `borrower`.
-   `whenNotPaused` (from `Pausable`): Applied to functions like `fund`, `repayInstallment`, `repayFullLoan`, `claimYield`, and token transfers (via `_update` override).

### Custom Errors

Includes errors like:
-   `Pool__AlreadyInitialized()`
-   `Pool__NotInitialized()`
-   `Pool__InvalidLoanStatus(LoanStatus requiredStatus, LoanStatus currentStatus)`
-   `Pool__FundingAmountTooLarge(uint256 amount, uint256 remaining)`
-   `Pool__ZeroAmount()`
-   `Pool__LoanNotRepaid()` (Consider if still fully applicable or if `Pool__InvalidLoanStatus` covers it for yield claim)
-   `Pool__NothingToClaim()`
-   `Pool__OnlyPoolAdmin()`
-   `Pool__OnlyBorrower()`
-   `Pool__UnauthorizedPauser(address caller)`
-   `Factory__ZeroAddress()` (Used by initialize)
-   `Factory__ZeroDuration()` (Used by initialize)
-   `Pool__InvalidNumberOfInstallments()`
-   `Pool__DurationNotDivisibleByInstallments()`
-   `Pool__InstallmentPaymentNotDue()` (Or similar for overdue/timing issues)
-   `Pool__AllInstallmentsPaid()`
-   `Pool__LoanAlreadyRepaid()`
-   `Pool__NothingToRepay()`

## Workflow Example

1.  **Deployment & Initialization**: Factory deploys a clone and calls `initialize()`, setting parameters (including installment details), token name/symbol, and `poolAdmin`.
2.  **Funding**: Lenders call `fund()` to provide `acceptedCurrency` and receive pool tokens.
3.  **Activation**: Loan becomes `Active` when fully funded. `loanStartTime`, `maturityTime`, and `nextInstallmentDueDate` are set.
4.  **Repayment (Installments)**: Borrower calls `repayInstallment()` periodically.
5.  **Repayment (Full)**: Alternatively, borrower calls `repayFullLoan()` to settle remaining debt.
6.  **Yield Claim**: Once `currentStatus` is `Repaid`, lenders call `claimYield()` to get their share of principal and interest.

## Key Changes from Previous Version

-   **Inheritance**: Now directly uses `ERC20`, `AccessControlEnumerable`, and `Pausable` instead of `ERC20PresetMinterPauser`.
-   **Decimals**: Pool share tokens now have 6 decimals, matching the expected USDC `acceptedCurrency`.
-   **Dynamic ERC20 Properties**: `name()` and `symbol()` are overridden to return values set during `initialize()`, allowing each cloned pool to have unique token identifiers while sharing the same implementation bytecode.
-   **Role Management**: `MINTER_ROLE` and `PAUSER_ROLE` are explicitly defined and managed by the `DEFAULT_ADMIN_ROLE` (held by `poolAdmin`) for each pool instance. The pool contract itself (`address(this)`) is granted `MINTER_ROLE` to mint shares in the `fund()` function.
-   **Installment Payments**: Introduced logic for periodic repayments (`repayInstallment`) alongside the option to repay the full loan (`repayFullLoan`). This includes new state variables for tracking installment progress, amounts per period, and due dates.
-   **Renamed `calculateInterest` to `calculateTotalLoanInterest`** for clarity.

## Security Considerations & Future Enhancements

-   **Interest Calculation Precision**: For real-world financial applications, using a fixed-point math library is recommended for interest calculations to avoid precision loss with standard integer arithmetic, especially for per-installment interest.
-   **Periodic Repayments**: The contract now supports installment-based repayments.
    -   **Grace Periods/Late Fees**: Current installment repayment is strict. Consider adding grace periods and late fee mechanisms.
    -   **Final Installment Adjustment**: The logic to adjust the final installment for rounding differences is crucial and should be robustly tested.
-   **Fund Return on Cancellation**: The `cancelLoan` function is basic. A robust implementation needs to handle the return of contributed funds to lenders if a loan is cancelled during the funding phase. This is a critical feature to implement fully.
-   **Oracle for Share Price**: The 1:1 minting of shares to funds assumes the `acceptedCurrency` and pool shares effectively have the same value or decimals. For more flexibility, an oracle or configurable share price mechanism might be needed.
-   **Gas Optimization**: Review for gas efficiency, especially in functions called by multiple users (e.g., `claimYield`, `repayInstallment`).
-   **Upgradability**: Since these pools are cloned, the factory would need to be updated to point to a new implementation if the pool logic needs to change for future pools. Existing pools would remain on their original logic.
-   **Error Handling for Repayments**: Ensure error messages for repayment (e.g., `Pool__InstallmentPaymentNotDue`) clearly reflect the condition (e.g., paying too early vs. too late if that logic is added).
-   **Prorated Interest on Early Full Repayment**: The `repayFullLoan` function calculates interest pro-rata. Ensure this calculation is fair and clearly understood.