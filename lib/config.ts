'use client';

import { http, createStorage, cookieStorage } from 'wagmi';
import { assetChainTestnet } from 'wagmi/chains';
import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { defineChain } from 'viem';



const localhost = /*#__PURE__*/ defineChain({
    id: 31337,
    name: 'Localhost',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['http://127.0.0.1:8545'] },
    },
});

export function updateChainRpcUrl(chain: Chain, newRpcUrl: string): Chain {
    // Create a deep clone of the chain object
    const updatedChain = {
        ...chain,
        rpcUrls: {
            ...chain.rpcUrls,
            default: {
                ...chain.rpcUrls.default,
                http: [newRpcUrl]
            }
        }
    };

    return updatedChain;
}
// export const clonedMonadTestnet = updateChainRpcUrl(monadTestnet, process.env.NEXT_PUBLIC_MONAD_TESTNET_RPC_URL);
// export const monadTestnet = defineChain({
//     id: 10143,
//     name: 'Monad Testnet',
//     nativeCurrency: { name: 'MON', symbol: 'MON', decimals: 18 },
//     rpcUrls: {
//         default: { http: ['https://testnet-rpc.monad.xyz'] },
//     },
//     blockExplorers: {
//         default: { name: 'Monad Explorer', url: 'https://testnet.monadexplorer.com' },
//     },
// });

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECTION_PROJECTID;
if (!projectId) {
    throw new Error('NEXT_PUBLIC_WALLETCONNECTION_PROJECTID is not set');
}
// if (!process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL || !process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL || !process.env.NEXT_PUBLIC_OPTIMISM_SEPOLIA_RPC_URL) {
//     throw new Error('RPC URLs are not set')
// }

if (!process.env.NEXT_PUBLIC_ASSETCHAIN_TESTNET_RPC_URL) {
    throw new Error('ASSETCHAIN_TESTNET_RPC_URL is not set')
}

// Determine the environment
const isDevelopment = process.env.NODE_ENV === 'development';

// Define RPC URLs for each chain
// const rpcUrls: { [key: number]: string } = {
//     [sepolia.id]: process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL,
//     [arbitrumSepolia.id]: process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL,
//     [optimismSepolia.id]: process.env.NEXT_PUBLIC_OPTIMISM_SEPOLIA_RPC_URL,
// };

const rpcUrls: { [key: number]: string } = {

    [assetChainTestnet.id]: process.env.NEXT_PUBLIC_ASSETCHAIN_TESTNET_RPC_URL,
};


// Define supported chains based on the environment
// const supportedChains: Chain[] = isDevelopment ? [sepolia, arbitrumSepolia, optimismSepolia] : [sepolia, arbitrumSepolia, optimismSepolia];
const supportedChains: Chain[] = isDevelopment ? [assetChainTestnet] : [assetChainTestnet];

export const config = getDefaultConfig({
    appName: "WalletConnection",
    projectId,
    chains: supportedChains as any,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: supportedChains.reduce((obj, chain) => ({
        ...obj,
        [chain.id]: http(rpcUrls[chain.id] || '', {
            retryCount: 3,
            retryDelay: 1000,
        })
    }), {} as { [chainId: number]: ReturnType<typeof http> })
});


// config/client.ts




// Export constants for use in other files