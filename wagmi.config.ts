import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import CredoraPoolFactoryABI from './abis/CredoraPoolFactory.abi.json'
import CredoraLoanPoolABI from './abis/CredoraLoanPool.abi.json'
import MockUSDCABI from './abis/MockUSDC.abi.json'
import { Abi } from 'viem'

// Deployment Block Number: 2307547
export default defineConfig({
    out: 'generated.ts',
    contracts: [
        {
            name: "CredoraPoolFactory",
            address: {
                42421: "0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052"
            },
            abi: CredoraPoolFactoryABI as Abi
        },
        {
            name: "CredoraLoanPool",
            address: {
                // This address seems to be an implementation address based on deployment.json (CredoraLoanPool_Implementation)
                // Please verify if this is the correct address to use for the Loan Pool or if a proxy address should be used.
                // 42421: "0x5B5Cbe5F7c7Daa9B5C92F4778dBfc179b2c77688"
            },
            abi: CredoraLoanPoolABI as Abi,
        },
        {
            name: "MockUSDC",
            address: {
                42421: "0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9"
            },
            abi: MockUSDCABI as Abi,
        }
    ],
    plugins: [
        react(),
    ],
})

