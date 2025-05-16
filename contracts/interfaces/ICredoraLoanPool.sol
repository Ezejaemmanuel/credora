// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title ICredoraLoanPool Interface
 * @author Credora Team
 * @notice Interface for the CredoraLoanPool contract.
 * Defines the functions that the CredoraPoolFactory will call, primarily for initialization.
 */
interface ICredoraLoanPool {
    /**
     * @notice Initializes the loan pool with its core parameters.
     * @dev Called by the factory immediately after the pool contract is cloned.
     * The msg.sender in the context of this call will be the factory.
     * The pool contract should ensure it can only be initialized once.
     * @param _borrower The address of the borrower.
     * @param _loanAmount The total amount of the loan in the accepted currency.
     * @param _interestRateBPS The interest rate for the loan in basis points (e.g., 1000 BPS for 10%).
     * @param _durationSeconds The total duration of the loan in seconds.
     * @param _numberOfInstallments The total number of installments the loan will be divided into.
     * @param _acceptedCurrency The ERC20 token address for the loan and repayments.
     * @param _poolTokenName The name for the ERC20 token representing shares in this pool.
     * @param _poolTokenSymbol The symbol for the ERC20 token representing shares in this pool.
     * @param _admin The address that will have administrative control over this specific pool.
     * @param _purpose The stated purpose of the loan.
     */
    function initialize(
        address _borrower,
        uint256 _loanAmount,
        uint256 _interestRateBPS,
        uint256 _durationSeconds,
        uint256 _numberOfInstallments,
        address _acceptedCurrency,
        string calldata _poolTokenName,
        string calldata _poolTokenSymbol,
        address _admin,
        string calldata _purpose
    ) external;
}
