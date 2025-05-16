// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title Roles
 * @author Credora Team
 * @notice Defines the roles used throughout the Credora protocol for access control.
 * Inherits from OpenZeppelin's AccessControl to manage permissions.
 */
contract Roles is AccessControl {
    // Events RoleGranted and RoleRevoked are inherited from AccessControl via IAccessControl

    /**
     * @dev Role for administrative tasks, typically held by the deployer or a multisig.
     * This role can grant/revoke other roles and manage critical system parameters.
     */
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    /**
     * @dev Role for the AI bot.
     * This role is authorized to submit credit risk assessments and suggested loan terms.
     */
    bytes32 public constant AI_ROLE = keccak256("AI_ROLE");

    /**
     * @dev Role for entities authorized to create new loan pools.
     * Typically, this role would be granted to a factory contract.
     */
    bytes32 public constant POOL_CREATOR_ROLE = keccak256("POOL_CREATOR_ROLE");

    /**
     * @dev Role for governance-related actions.
     * This role can manage loan defaults, update protocol parameters through a DAO,
     * or trigger emergency actions.
     */
    bytes32 public constant GOVERNANCE_ROLE = keccak256("GOVERNANCE_ROLE");

    /**
     * @dev Custom error for when a caller does not have the ADMIN_ROLE.
     */
    error Roles__NotAdmin();

    /**
     * @dev Custom error for when a caller does not have the AI_ROLE.
     */
    error Roles__NotAI();

    /**
     * @dev Custom error for when a caller does not have the POOL_CREATOR_ROLE.
     */
    error Roles__NotPoolCreator();

    /**
     * @dev Custom error for when a caller does not have the GOVERNANCE_ROLE.
     */
    error Roles__NotGovernance();

    /**
     * @notice Sets up the initial roles upon deployment.
     * @dev The deploying account is granted the ADMIN_ROLE.
     * Additional roles (AI_ROLE, POOL_CREATOR_ROLE, GOVERNANCE_ROLE) can be
     * granted to specific addresses by the admin afterwards.
     */
    constructor() {
        _grantRole(ADMIN_ROLE, msg.sender);
        // Note: msg.sender also gets DEFAULT_ADMIN_ROLE from AccessControl constructor

        // Set ADMIN_ROLE as the admin for all custom roles
        _setRoleAdmin(AI_ROLE, ADMIN_ROLE);
        _setRoleAdmin(POOL_CREATOR_ROLE, ADMIN_ROLE);
        _setRoleAdmin(GOVERNANCE_ROLE, ADMIN_ROLE);
        _setRoleAdmin(ADMIN_ROLE, ADMIN_ROLE); // ADMIN_ROLE manages itself
    }

    /**
     * @notice Grants the ADMIN_ROLE to an account.
     * @dev Only callable by an account with ADMIN_ROLE.
     * @param account The address to grant the ADMIN_ROLE to.
     */
    function grantAdminRole(address account) external virtual {
        if (!hasRole(ADMIN_ROLE, msg.sender)) {
            revert Roles__NotAdmin();
        }
        _grantRole(ADMIN_ROLE, account);
    }

    /**
     * @notice Grants the AI_ROLE to an account.
     * @dev Only callable by an account with ADMIN_ROLE.
     * @param account The address to grant the AI_ROLE to.
     */
    function grantAIRole(address account) external virtual {
        if (!hasRole(ADMIN_ROLE, msg.sender)) {
            revert Roles__NotAdmin();
        }
        _grantRole(AI_ROLE, account);
    }

    /**
     * @notice Grants the POOL_CREATOR_ROLE to an account.
     * @dev Only callable by an account with ADMIN_ROLE.
     * @param account The address to grant the POOL_CREATOR_ROLE to.
     */
    function grantPoolCreatorRole(address account) external virtual {
        if (!hasRole(ADMIN_ROLE, msg.sender)) {
            revert Roles__NotAdmin();
        }
        _grantRole(POOL_CREATOR_ROLE, account);
    }

    /**
     * @notice Grants the GOVERNANCE_ROLE to an account.
     * @dev Only callable by an account with ADMIN_ROLE.
     * @param account The address to grant the GOVERNANCE_ROLE to.
     */
    function grantGovernanceRole(address account) external virtual {
        if (!hasRole(ADMIN_ROLE, msg.sender)) {
            revert Roles__NotAdmin();
        }
        _grantRole(GOVERNANCE_ROLE, account);
    }

    /**
     * @notice Revokes a specific role from an account.
     * @dev Only callable by an account with ADMIN_ROLE (for this override).
     *      The underlying OpenZeppelin revokeRole is callable by the role's admin.
     * @param role The role to revoke.
     * @param account The address to revoke the role from.
     */
    function revokeRole(bytes32 role, address account) public virtual override {
        if (!hasRole(ADMIN_ROLE, msg.sender)) {
            revert Roles__NotAdmin();
        }
        super.revokeRole(role, account);
    }

    // Modifiers for checking roles - these can be used by inheriting contracts
    modifier onlyAdmin() {
        if (!hasRole(ADMIN_ROLE, msg.sender)) {
            revert Roles__NotAdmin();
        }
        _;
    }

    modifier onlyAI() {
        if (!hasRole(AI_ROLE, msg.sender)) {
            revert Roles__NotAI();
        }
        _;
    }

    modifier onlyPoolCreator() {
        if (!hasRole(POOL_CREATOR_ROLE, msg.sender)) {
            revert Roles__NotPoolCreator();
        }
        _;
    }

    modifier onlyGovernance() {
        if (!hasRole(GOVERNANCE_ROLE, msg.sender)) {
            revert Roles__NotGovernance();
        }
        _;
    }
}
