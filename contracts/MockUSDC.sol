// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title MockUSDC
 * @author Credora Team / AI Assistant
 * @notice A mock USDC ERC20 token with 6 decimals for testing purposes.
 * FOR HACKATHON/TESTING ONLY: Includes a public minting function with a per-call limit.
 */
contract MockUSDC is ERC20 {
    uint256 public constant MAX_MINT_PER_CALL_SCALED = 100_000 * (10 ** 6); // 100,000 USDC with 6 decimals

    /**
     * @dev Custom error for when the requested mint amount exceeds the maximum allowed per call.
     * @param requestedAmount The amount that was requested to be minted.
     * @param maxAmountAllowed The maximum amount allowed to be minted per call.
     */
    error MockUSDC__MintAmountExceedsMaximum(uint256 requestedAmount, uint256 maxAmountAllowed);

    /**
     * @notice Constructor to set token name and symbol.
     * @dev Does not mint any initial supply. Initial supply should be minted using mintTestTokens.
     */
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        // No initial minting here for this test setup.
    }

    /**
     * @notice USDC typically has 6 decimals.
     */
    function decimals() public view virtual override returns (uint8) {
        return 6;
    }

    /**
     * @notice Mints tokens to a specified recipient, up to a maximum of 100,000 USDC per call.
     * @dev FOR HACKATHON/TESTING ONLY. This function is public and allows anyone to mint tokens within the limit.
     * In a real-world scenario, this function should have strict access control.
     * Reverts with MockUSDC__MintAmountExceedsMaximum if amount is too large.
     * @param recipient The address to mint tokens to.
     * @param amount The amount of tokens to mint (in the smallest unit, scaled by decimals).
     *               The requested amount must not exceed MAX_MINT_PER_CALL_SCALED.
     */
    function mintTestTokens(address recipient, uint256 amount) public {
        if (amount > MAX_MINT_PER_CALL_SCALED) {
            revert MockUSDC__MintAmountExceedsMaximum(amount, MAX_MINT_PER_CALL_SCALED);
        }
        // Note: The 'amount' parameter here should be the value *already scaled by decimals*.
        _mint(recipient, amount);
    }
}
