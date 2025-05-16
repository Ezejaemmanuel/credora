# Credora Protocol Roles

This document outlines the different roles used within the Credora protocol and their respective responsibilities. The `Roles.sol` contract, which inherits from OpenZeppelin's `AccessControl`, is the central authority for managing these permissions.

## Core Roles

The following roles are defined as `bytes32` constants in `Roles.sol`:

### 1. `ADMIN_ROLE`

- **Identifier**: `keccak256("ADMIN_ROLE")`
- **Purpose**: This is the highest-level administrative role in the protocol.
- **Responsibilities**:
    - Granting and revoking any role (including other `ADMIN_ROLE`s) to other accounts.
    - Managing critical system parameters that are not under governance control.
    - Pausing or unpausing core protocol contracts in emergencies.
    - Initiating or authorizing contract upgrades (if the proxy pattern allows).
- **Initial Assignment**: The account that deploys the `Roles.sol` contract (and any contract inheriting it or using it for authority) is automatically granted the `ADMIN_ROLE`.
- **Security Consideration**: Due to its extensive privileges, the `ADMIN_ROLE` should ideally be held by a secure multi-signature wallet or a decentralized autonomous organization (DAO) in a production environment.

### 2. `AI_ROLE`

- **Identifier**: `keccak256("AI_ROLE")`
- **Purpose**: This role is designated for the off-chain AI bot or system responsible for credit risk assessment.
- **Responsibilities**:
    - Submitting AI-generated credit scores for potential borrowers.
    - Providing suggested loan terms (e.g., maximum loan amount, interest rate) based on its analysis.
    - Updating risk parameters for existing borrowers if the system allows for dynamic scoring.
- **Granting**: The `ADMIN_ROLE` is responsible for granting the `AI_ROLE` to the specific address(es) controlled by the AI bot infrastructure.
- **Security Consideration**: The account(s) holding the `AI_ROLE` must be secured to prevent malicious or erroneous credit data from being pushed on-chain. Rate limiting or monitoring of transactions from this role is advisable.

### 3. `POOL_CREATOR_ROLE`

- **Identifier**: `keccak256("POOL_CREATOR_ROLE")`
- **Purpose**: This role authorizes an account or contract to create new loan pools within the Credora protocol.
- **Responsibilities**:
    - Calling the function responsible for deploying new `CredoraLoanPool` instances (e.g., `createLoanPool` in a factory contract).
- **Granting**: The `ADMIN_ROLE` grants the `POOL_CREATOR_ROLE`. Typically, this would be granted to a dedicated `CredoraPoolFactory` contract.
- **Rationale**: Separating pool creation into a specific role allows for controlled and standardized deployment of loan pools, potentially enforcing specific configurations or checks before a pool goes live.

### 4. `GOVERNANCE_ROLE`

- **Identifier**: `keccak256("GOVERNANCE_ROLE")`
- **Purpose**: This role is intended for a DAO or a governance module that oversees certain operational aspects of the protocol, especially those requiring community consensus or decentralized decision-making.
- **Responsibilities**:
    - Managing loan defaults (e.g., marking a loan as defaulted, initiating recovery processes).
    - Adjusting certain protocol parameters that are designated for governance control (e.g., platform fee percentages, risk parameters not controlled by the AI).
    - Voting on or executing proposals related to the protocol's evolution.
- **Granting**: The `ADMIN_ROLE` is responsible for granting the `GOVERNANCE_ROLE` to the governance contract or multi-sig address.
- **Security Consideration**: The mechanisms for how the `GOVERNANCE_ROLE` exercises its power (e.g., voting thresholds, timelocks) should be clearly defined and audited.

## Managing Roles

- **Granting Roles**: The `grantAdminRole`, `grantAIRole`, `grantPoolCreatorRole`, and `grantGovernanceRole` functions in `Roles.sol` (and contracts inheriting it) are used to assign these roles. Only an account with `ADMIN_ROLE` can call these functions.
- **Revoking Roles**: The `revokeRole` function, also restricted to `ADMIN_ROLE`, is used to remove a role from an account.
- **Checking Roles**: Contracts can use modifiers like `onlyAdmin()`, `onlyAI()`, etc., or directly call `hasRole(ROLE, account)` to enforce permissions.

## Custom Errors

The `Roles.sol` contract defines specific custom errors for unauthorized access attempts:
- `Roles__NotAdmin()`
- `Roles__NotAI()`
- `Roles__NotPoolCreator()`
- `Roles__NotGovernance()`

These provide more gas-efficient and clearer error reporting than traditional `require` statements with string messages. 