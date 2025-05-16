# Credora Pool Factory (`CredoraPoolFactory.sol`)

This document outlines the functionality and design of the `CredoraPoolFactory` smart contract, a core component of the Credora protocol.

## Overview

The `CredoraPoolFactory` serves two primary purposes:

1.  **Managing Borrower Risk Profiles**: It provides an interface for a designated AI bot (with `AI_ROLE`) to submit and update risk assessments for potential borrowers. These assessments include the maximum loan amount a borrower is eligible for and a suggested interest rate.
2.  **Creating Loan Pools**: It allows authorized entities (with `POOL_CREATOR_ROLE`) to create new, dedicated `CredoraLoanPool` instances for borrowers. Each pool is a separate contract, likely a minimal proxy (clone), tailored to a specific loan.

It inherits from `Roles.sol` to leverage the defined access control mechanisms.

## Key Features and Functionality

### State Variables

-   `loanPoolImplementation` (address, immutable): The address of the master logic contract for `CredoraLoanPool`. New pools are cloned from this implementation.
-   `acceptedCurrency` (IERC20, immutable): The ERC20 token (e.g., USDC, DAI) used for all loan operations (funding, repayment) managed by this factory.
-   `riskProfiles` (mapping `address => BorrowerRiskProfile`): Stores the AI-assessed creditworthiness of borrowers.
    -   `BorrowerRiskProfile` (struct):
        -   `maxLoanAmount` (uint256): Maximum amount the borrower can request.
        -   `interestRateBPS` (uint256): Suggested annual interest rate in Basis Points (1% = 100 BPS).
        -   `assessmentTimestamp` (uint64): Timestamp of when the AI assessment was recorded.
        -   `exists` (bool): Flag indicating if a profile has been set.
-   `borrowerLoanPools` (mapping `address => address[]`): Tracks all loan pools created for a specific borrower.
-   `allLoanPools` (address[]): A list of all loan pools created by this factory.
-   `MAX_INTEREST_RATE_BPS` (uint256 public constant): Maximum allowable interest rate in BPS (e.g., 100000 for 1000%).

### Roles Used

-   `ADMIN_ROLE`: Inherited from `Roles.sol`. Can grant/revoke other roles, including `AI_ROLE` and `POOL_CREATOR_ROLE`.
-   `AI_ROLE`: Required to call `setRiskProfile()`.
-   `POOL_CREATOR_ROLE`: Required to call `createLoanPool()`.

### Events

-   `RiskProfileSet(address indexed borrower, uint256 maxLoanAmount, uint256 interestRateBPS)`: Emitted when a borrower's risk profile is successfully submitted or updated by the AI.
-   `LoanPoolCreated(address indexed poolAddress, address indexed borrower, address indexed creator, uint256 loanAmount, uint256 interestRateBPS, uint256 durationSeconds, uint256 numberOfInstallments, address acceptedCurrency)`: Emitted upon the successful creation and initialization of a new `CredoraLoanPool`.

### Core Functions

1.  **`constructor(address _loanPoolImpl, address _acceptedCurrencyAddr)`**
    -   Initializes the factory with the `CredoraLoanPool` master implementation address and the `acceptedCurrency` token address.
    -   Both addresses must be non-zero.
    -   The deployer automatically receives `ADMIN_ROLE` (via `Roles.sol` constructor).

2.  **`setRiskProfile(address borrower, uint256 maxLoanAmount, uint256 interestRateBPS)`**
    -   **Role**: `onlyAI`
    -   Allows the AI bot to submit or update a risk profile for a `borrower`.
    -   Stores the `maxLoanAmount`, `interestRateBPS`, and current `block.timestamp`.
    -   Emits `RiskProfileSet`.

3.  **`createLoanPool(address borrower, uint256 loanAmount, uint256 durationSeconds, uint256 numberOfInstallments, string calldata poolTokenName, string calldata poolTokenSymbol)`**
    -   **Role**: `onlyPoolCreator`
    -   Creates a new loan pool for the specified `borrower`.
    -   **Validations**:
        -   Borrower must have an existing risk profile (`riskProfiles[borrower].exists == true`).
        -   `loanAmount` must be greater than zero and not exceed `profile.maxLoanAmount`.
        -   `durationSeconds` must be greater than zero.
        -   `numberOfInstallments` must be greater than zero and `durationSeconds` should be reasonably divisible by `numberOfInstallments` (the `CredoraLoanPool`'s `initialize` function enforces `durationSeconds % numberOfInstallments == 0`).
    -   **Process**:
        1.  Deploys a new `CredoraLoanPool` instance by cloning the `loanPoolImplementation` address using OpenZeppelin's `Clones.clone()`.
        2.  Calls the `initialize()` function (defined in `ICredoraLoanPool`) on the new pool contract. The initialization parameters include:
            -   `borrower`
            -   `loanAmount`
            -   `interestRateBPS` (from the borrower's risk profile)
            -   `durationSeconds`
            -   `numberOfInstallments`
            -   `address(acceptedCurrency)`
            -   `poolTokenName` (for the pool's specific ERC20 participation token)
            -   `poolTokenSymbol` (for the pool's specific ERC20 participation token)
            -   `admin` for the pool (currently set to `address(this)`, i.e., the factory itself. This could be a governance address or another role in a future iteration).
        3.  Stores the new `poolAddress` in `borrowerLoanPools[borrower]` and `allLoanPools`.
        4.  Emits `LoanPoolCreated`.
    -   Returns the `poolAddress` of the newly created loan pool.

### Getter Functions

-   `getPoolsByBorrower(address borrower) view returns (address[] memory)`: Returns all loan pools associated with a borrower.
-   `getAllPools() view returns (address[] memory)`: Returns all loan pools created by the factory.
-   `totalPools() view returns (uint256)`: Returns the total number of loan pools created.

### Custom Errors

-   `Factory__ZeroAddress()`: If a critical address parameter is zero.
-   `Factory__LoanPoolImplementationNotSet()`: If the loan pool implementation address is zero during construction.
-   `Factory__RiskProfileNotSet(address borrower)`: If trying to create a pool for a borrower without a risk profile.
-   `Factory__InvalidLoanAmount(uint256 requested, uint256 maxAllowed)`: If the requested loan amount is zero or exceeds the AI-approved maximum.
-   `Factory__ZeroDuration()`: If the loan duration is zero.
-   `Factory__InitializationFailed()`: If cloning the pool contract fails (highly unlikely with valid implementation).
-   `Factory__InvalidInterestRate(uint256 interestRateBPS)`: If the provided interest rate exceeds `MAX_INTEREST_RATE_BPS`.
-   `Factory__InvalidNumberOfInstallments()`: If the number of installments is zero or otherwise invalid (e.g., duration not divisible by installments in the pool).

## Workflow

1.  **Deployment**: The `CredoraPoolFactory` is deployed with the addresses of the `CredoraLoanPool` master implementation and the `acceptedCurrency` ERC20 token.
2.  **Role Assignment**: The `ADMIN_ROLE` (deployer by default) grants `AI_ROLE` to the AI bot's address and `POOL_CREATOR_ROLE` to the entity/entities responsible for initiating pool creation (this could be an admin, a dedicated contract, or potentially the borrower after meeting certain off-chain criteria).
3.  **Risk Assessment**: The AI bot calls `setRiskProfile()` to record the creditworthiness of a potential borrower.
4.  **Loan Pool Creation**: An entity with `POOL_CREATOR_ROLE` calls `createLoanPool()`, providing the borrower's address, desired loan amount (within AI limits), loan duration, number of installments, and details for the pool-specific ERC20 token.
5.  The factory deploys and initializes a new `CredoraLoanPool` contract, which is then ready to be funded by lenders.

## Future Considerations

-   **Pool Admin**: The admin for individual loan pools is currently set to the factory. This could be made more flexible, e.g., allowing it to be set to a governance contract, a pool-specific admin role, or the `GOVERNANCE_ROLE` defined in `Roles.sol`.
-   **Borrower-Initiated Creation**: The `createLoanPool` function could be modified or a new function added to allow borrowers themselves to create their loan pool after their risk profile is set, possibly by temporarily granting them `POOL_CREATOR_ROLE` or having a separate permissionless function with appropriate checks.
-   **Purpose Field**: A `purpose` field (e.g., `string` or `bytes32`) could be added to the `createLoanPool` function and stored in the pool, as mentioned in the project README. 