import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CredoraLoanPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**

*/
export const credoraLoanPoolAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PAUSER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptedCurrency',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'borrower',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'calculateInterest',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'calculateTotalLoanInterest',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cancelLoan',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'claimYield',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentInstallmentPaidCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentStatus',
    outputs: [
      {
        name: '',
        internalType: 'enum CredoraLoanPool.LoanStatus',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'durationSeconds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'fund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAccruedInterestDetails',
    outputs: [
      {
        name: 'totalInterestCalculatedForLoan',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'interestAccruedSoFar',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'interestRemainingToRepay',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getEarlyRepaymentQuote',
    outputs: [
      {
        name: 'outstandingPrincipal',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'currentInterestDue', internalType: 'uint256', type: 'uint256' },
      { name: 'totalAmountDue', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFundingRemaining',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFundingStatus',
    outputs: [
      { name: 'fundedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'requiredAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'remainingToFund', internalType: 'uint256', type: 'uint256' },
      { name: 'isFullyFunded', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_lender', internalType: 'address', type: 'address' }],
    name: 'getLenderPoolInformation',
    outputs: [
      {
        name: 'lenderInfo',
        internalType: 'struct LenderPoolInfo',
        type: 'tuple',
        components: [
          { name: 'shares', internalType: 'uint256', type: 'uint256' },
          {
            name: 'principalAlreadyClaimedByLender',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'claimablePrincipalNow',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'claimableInterestNow',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLoanPoolInfo',
    outputs: [
      {
        name: 'info',
        internalType: 'struct FullLoanPoolInfo',
        type: 'tuple',
        components: [
          { name: 'poolAddress', internalType: 'address', type: 'address' },
          { name: 'borrower', internalType: 'address', type: 'address' },
          {
            name: 'loanAmountPrincipal',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'interestRateBPS', internalType: 'uint256', type: 'uint256' },
          { name: 'durationSeconds', internalType: 'uint256', type: 'uint256' },
          {
            name: 'numberOfInstallments',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'acceptedCurrency',
            internalType: 'address',
            type: 'address',
          },
          { name: 'loanPurpose', internalType: 'string', type: 'string' },
          { name: 'poolTokenName', internalType: 'string', type: 'string' },
          { name: 'poolTokenSymbol', internalType: 'string', type: 'string' },
          { name: 'tokenDecimals', internalType: 'uint8', type: 'uint8' },
          { name: 'poolAdmin', internalType: 'address', type: 'address' },
          {
            name: 'currentStatus',
            internalType: 'enum CredoraLoanPool.LoanStatus',
            type: 'uint8',
          },
          {
            name: 'totalFundsRaised',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'loanStartTime', internalType: 'uint256', type: 'uint256' },
          { name: 'maturityTime', internalType: 'uint256', type: 'uint256' },
          {
            name: 'totalPrincipalRepaid',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'totalInterestRepaid',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'currentInstallmentPaidCount',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'installmentIntervalSeconds',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'installmentPrincipalPerPeriod',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'installmentInterestPerPeriod',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'nextInstallmentDueDate',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'isPaused', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNextInstallmentDetails',
    outputs: [
      { name: 'principalDue', internalType: 'uint256', type: 'uint256' },
      { name: 'interestDue', internalType: 'uint256', type: 'uint256' },
      { name: 'dueDate', internalType: 'uint256', type: 'uint256' },
      { name: 'isFinalInstallment', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPoolDynamicState',
    outputs: [
      {
        name: 'status',
        internalType: 'enum CredoraLoanPool.LoanStatus',
        type: 'uint8',
      },
      { name: 'fundsRaised', internalType: 'uint256', type: 'uint256' },
      { name: 'principalRepaid', internalType: 'uint256', type: 'uint256' },
      { name: 'interestRepaid', internalType: 'uint256', type: 'uint256' },
      {
        name: 'installmentsPaidCount',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'nextDueDateTime', internalType: 'uint256', type: 'uint256' },
      { name: 'currentlyPaused', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMembers',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTimeMetrics',
    outputs: [
      {
        name: 'timeElapsedSinceStart',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'timeRemainingOnLoan', internalType: 'uint256', type: 'uint256' },
      {
        name: 'timeUntilNextInstallment',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTotalOwed',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_borrower', internalType: 'address', type: 'address' },
      { name: '_loanAmount', internalType: 'uint256', type: 'uint256' },
      { name: '_interestRateBPS', internalType: 'uint256', type: 'uint256' },
      { name: '_durationSeconds', internalType: 'uint256', type: 'uint256' },
      {
        name: '_numberOfInstallments',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: '_acceptedCurrency', internalType: 'address', type: 'address' },
      { name: '_poolTokenName', internalType: 'string', type: 'string' },
      { name: '_poolTokenSymbol', internalType: 'string', type: 'string' },
      { name: '_admin', internalType: 'address', type: 'address' },
      { name: '_purpose', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'installmentInterestPerPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'installmentIntervalSeconds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'installmentPrincipalPerPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'interestRateBPS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'lenderPrincipalClaimed',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'loanAmountPrincipal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'loanPurpose',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'loanStartTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'markAsDefaulted',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maturityTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextInstallmentDueDate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'numberOfInstallments',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'poolAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'repayFullLoan',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'repayInstallment',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalFundsRaised',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalInterestRepaid',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalPrincipalRepaid',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawCancelledFunds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sharesBurned',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountWithdrawn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CancelledFundsWithdrawn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amountProvided',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'sharesMinted',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Funded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'installmentNumber',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'principalPaid',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'interestPaid',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'InstallmentPaid',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'startTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'maturityTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LoanActivated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'canceller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LoanCancelled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'marker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LoanDefaulted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'admin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenName',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'tokenSymbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'purpose',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'PoolInitialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'payer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'principalAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'interestAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RepaymentMade',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'principalClaimed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'interestClaimed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'YieldClaimed',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'EnforcedPause' },
  { type: 'error', inputs: [], name: 'ExpectedPause' },
  { type: 'error', inputs: [], name: 'Factory__ZeroAddress' },
  { type: 'error', inputs: [], name: 'Factory__ZeroDuration' },
  { type: 'error', inputs: [], name: 'Pool__AllInstallmentsPaid' },
  { type: 'error', inputs: [], name: 'Pool__AlreadyInitialized' },
  {
    type: 'error',
    inputs: [],
    name: 'Pool__DurationNotDivisibleByInstallments',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'remaining', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'Pool__FundingAmountTooLarge',
  },
  { type: 'error', inputs: [], name: 'Pool__InstallmentPaymentNotDue' },
  {
    type: 'error',
    inputs: [
      {
        name: 'requiredStatus',
        internalType: 'enum CredoraLoanPool.LoanStatus',
        type: 'uint8',
      },
      {
        name: 'currentStatus',
        internalType: 'enum CredoraLoanPool.LoanStatus',
        type: 'uint8',
      },
    ],
    name: 'Pool__InvalidLoanStatus',
  },
  { type: 'error', inputs: [], name: 'Pool__InvalidNumberOfInstallments' },
  { type: 'error', inputs: [], name: 'Pool__LoanAlreadyRepaid' },
  { type: 'error', inputs: [], name: 'Pool__LoanNotCancelled' },
  { type: 'error', inputs: [], name: 'Pool__LoanNotRepaid' },
  { type: 'error', inputs: [], name: 'Pool__NoSharesToWithdraw' },
  { type: 'error', inputs: [], name: 'Pool__NotInitialized' },
  { type: 'error', inputs: [], name: 'Pool__NothingToClaim' },
  { type: 'error', inputs: [], name: 'Pool__NothingToRepay' },
  { type: 'error', inputs: [], name: 'Pool__OnlyBorrower' },
  { type: 'error', inputs: [], name: 'Pool__OnlyPoolAdmin' },
  {
    type: 'error',
    inputs: [{ name: 'caller', internalType: 'address', type: 'address' }],
    name: 'Pool__UnauthorizedPauser',
  },
  { type: 'error', inputs: [], name: 'Pool__ZeroAmount' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

/**

*/
export const credoraLoanPoolAddress = {} as const

/**

*/
export const credoraLoanPoolConfig = {
  address: credoraLoanPoolAddress,
  abi: credoraLoanPoolAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CredoraPoolFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const credoraPoolFactoryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_loanPoolImpl', internalType: 'address', type: 'address' },
      {
        name: '_acceptedCurrencyAddr',
        internalType: 'address',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'AI_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'GOVERNANCE_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_INTEREST_RATE_BPS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_CREATOR_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptedCurrency',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'allLoanPools',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'borrowerLoanPools',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'borrower', internalType: 'address', type: 'address' },
      { name: 'loanAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'durationSeconds', internalType: 'uint256', type: 'uint256' },
      {
        name: 'numberOfInstallments',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'poolTokenName', internalType: 'string', type: 'string' },
      { name: 'poolTokenSymbol', internalType: 'string', type: 'string' },
      { name: 'purpose', internalType: 'string', type: 'string' },
    ],
    name: 'createLoanPool',
    outputs: [
      { name: 'poolAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllPools',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_borrower', internalType: 'address', type: 'address' }],
    name: 'getBorrowerDetails',
    outputs: [
      {
        name: 'riskProfile',
        internalType: 'struct CredoraPoolFactory.BorrowerRiskProfile',
        type: 'tuple',
        components: [
          { name: 'maxLoanAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'interestRateBPS', internalType: 'uint256', type: 'uint256' },
          {
            name: 'assessmentTimestamp',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'exists', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'pools', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_borrower', internalType: 'address', type: 'address' }],
    name: 'getBorrowerRiskProfileExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'borrower', internalType: 'address', type: 'address' }],
    name: 'getPoolsByBorrower',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'grantAIRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'grantAdminRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'grantGovernanceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'grantPoolCreatorRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'loanPoolImplementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'riskProfiles',
    outputs: [
      { name: 'maxLoanAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'interestRateBPS', internalType: 'uint256', type: 'uint256' },
      { name: 'assessmentTimestamp', internalType: 'uint64', type: 'uint64' },
      { name: 'exists', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'borrower', internalType: 'address', type: 'address' },
      { name: 'maxLoanAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'interestRateBPS', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setRiskProfile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalPools',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'loanAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'interestRateBPS',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'durationSeconds',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'numberOfInstallments',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'acceptedCurrency',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'purpose',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'LoanPoolCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'maxLoanAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'interestRateBPS',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RiskProfileSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'Factory__InitializationFailed' },
  {
    type: 'error',
    inputs: [
      { name: 'interestRateBPS', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'Factory__InvalidInterestRate',
  },
  {
    type: 'error',
    inputs: [
      { name: 'requested', internalType: 'uint256', type: 'uint256' },
      { name: 'maxAllowed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'Factory__InvalidLoanAmount',
  },
  { type: 'error', inputs: [], name: 'Factory__InvalidNumberOfInstallments' },
  { type: 'error', inputs: [], name: 'Factory__LoanPoolImplementationNotSet' },
  {
    type: 'error',
    inputs: [{ name: 'borrower', internalType: 'address', type: 'address' }],
    name: 'Factory__RiskProfileNotSet',
  },
  { type: 'error', inputs: [], name: 'Factory__ZeroAddress' },
  { type: 'error', inputs: [], name: 'Factory__ZeroDuration' },
  { type: 'error', inputs: [], name: 'FailedDeployment' },
  {
    type: 'error',
    inputs: [
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'Roles__NotAI' },
  { type: 'error', inputs: [], name: 'Roles__NotAdmin' },
  { type: 'error', inputs: [], name: 'Roles__NotGovernance' },
  { type: 'error', inputs: [], name: 'Roles__NotPoolCreator' },
] as const

/**
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const credoraPoolFactoryAddress = {
  42421: '0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052',
} as const

/**
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const credoraPoolFactoryConfig = {
  address: credoraPoolFactoryAddress,
  abi: credoraPoolFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockUSDC
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const mockUsdcAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_MINT_PER_CALL_SCALED',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mintTestTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'maxAmountAllowed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'MockUSDC__MintAmountExceedsMaximum',
  },
] as const

/**
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const mockUsdcAddress = {
  42421: '0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9',
} as const

/**
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const mockUsdcConfig = {
  address: mockUsdcAddress,
  abi: mockUsdcAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__
 */
export const useReadCredoraLoanPool = /*#__PURE__*/ createUseReadContract({
  abi: credoraLoanPoolAbi,
  address: credoraLoanPoolAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadCredoraLoanPoolDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"MINTER_ROLE"`
 */
export const useReadCredoraLoanPoolMinterRole =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'MINTER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"PAUSER_ROLE"`
 */
export const useReadCredoraLoanPoolPauserRole =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'PAUSER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"acceptedCurrency"`
 */
export const useReadCredoraLoanPoolAcceptedCurrency =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'acceptedCurrency',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadCredoraLoanPoolAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadCredoraLoanPoolBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"borrower"`
 */
export const useReadCredoraLoanPoolBorrower =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'borrower',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"calculateInterest"`
 */
export const useReadCredoraLoanPoolCalculateInterest =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'calculateInterest',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"calculateTotalLoanInterest"`
 */
export const useReadCredoraLoanPoolCalculateTotalLoanInterest =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'calculateTotalLoanInterest',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"currentInstallmentPaidCount"`
 */
export const useReadCredoraLoanPoolCurrentInstallmentPaidCount =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'currentInstallmentPaidCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"currentStatus"`
 */
export const useReadCredoraLoanPoolCurrentStatus =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'currentStatus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadCredoraLoanPoolDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"durationSeconds"`
 */
export const useReadCredoraLoanPoolDurationSeconds =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'durationSeconds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getAccruedInterestDetails"`
 */
export const useReadCredoraLoanPoolGetAccruedInterestDetails =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getAccruedInterestDetails',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getEarlyRepaymentQuote"`
 */
export const useReadCredoraLoanPoolGetEarlyRepaymentQuote =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getEarlyRepaymentQuote',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getFundingRemaining"`
 */
export const useReadCredoraLoanPoolGetFundingRemaining =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getFundingRemaining',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getFundingStatus"`
 */
export const useReadCredoraLoanPoolGetFundingStatus =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getFundingStatus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getLenderPoolInformation"`
 */
export const useReadCredoraLoanPoolGetLenderPoolInformation =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getLenderPoolInformation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getLoanPoolInfo"`
 */
export const useReadCredoraLoanPoolGetLoanPoolInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getLoanPoolInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getNextInstallmentDetails"`
 */
export const useReadCredoraLoanPoolGetNextInstallmentDetails =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getNextInstallmentDetails',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getPoolDynamicState"`
 */
export const useReadCredoraLoanPoolGetPoolDynamicState =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getPoolDynamicState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadCredoraLoanPoolGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getRoleMember"`
 */
export const useReadCredoraLoanPoolGetRoleMember =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getRoleMemberCount"`
 */
export const useReadCredoraLoanPoolGetRoleMemberCount =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getRoleMembers"`
 */
export const useReadCredoraLoanPoolGetRoleMembers =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getRoleMembers',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getTimeMetrics"`
 */
export const useReadCredoraLoanPoolGetTimeMetrics =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getTimeMetrics',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"getTotalOwed"`
 */
export const useReadCredoraLoanPoolGetTotalOwed =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'getTotalOwed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadCredoraLoanPoolHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"installmentInterestPerPeriod"`
 */
export const useReadCredoraLoanPoolInstallmentInterestPerPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'installmentInterestPerPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"installmentIntervalSeconds"`
 */
export const useReadCredoraLoanPoolInstallmentIntervalSeconds =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'installmentIntervalSeconds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"installmentPrincipalPerPeriod"`
 */
export const useReadCredoraLoanPoolInstallmentPrincipalPerPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'installmentPrincipalPerPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"interestRateBPS"`
 */
export const useReadCredoraLoanPoolInterestRateBps =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'interestRateBPS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"lenderPrincipalClaimed"`
 */
export const useReadCredoraLoanPoolLenderPrincipalClaimed =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'lenderPrincipalClaimed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"loanAmountPrincipal"`
 */
export const useReadCredoraLoanPoolLoanAmountPrincipal =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'loanAmountPrincipal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"loanPurpose"`
 */
export const useReadCredoraLoanPoolLoanPurpose =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'loanPurpose',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"loanStartTime"`
 */
export const useReadCredoraLoanPoolLoanStartTime =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'loanStartTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"maturityTime"`
 */
export const useReadCredoraLoanPoolMaturityTime =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'maturityTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"name"`
 */
export const useReadCredoraLoanPoolName = /*#__PURE__*/ createUseReadContract({
  abi: credoraLoanPoolAbi,
  address: credoraLoanPoolAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"nextInstallmentDueDate"`
 */
export const useReadCredoraLoanPoolNextInstallmentDueDate =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'nextInstallmentDueDate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"numberOfInstallments"`
 */
export const useReadCredoraLoanPoolNumberOfInstallments =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'numberOfInstallments',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"paused"`
 */
export const useReadCredoraLoanPoolPaused = /*#__PURE__*/ createUseReadContract(
  {
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'paused',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"poolAdmin"`
 */
export const useReadCredoraLoanPoolPoolAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'poolAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCredoraLoanPoolSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadCredoraLoanPoolSymbol = /*#__PURE__*/ createUseReadContract(
  {
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'symbol',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"totalFundsRaised"`
 */
export const useReadCredoraLoanPoolTotalFundsRaised =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'totalFundsRaised',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"totalInterestRepaid"`
 */
export const useReadCredoraLoanPoolTotalInterestRepaid =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'totalInterestRepaid',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"totalPrincipalRepaid"`
 */
export const useReadCredoraLoanPoolTotalPrincipalRepaid =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'totalPrincipalRepaid',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadCredoraLoanPoolTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__
 */
export const useWriteCredoraLoanPool = /*#__PURE__*/ createUseWriteContract({
  abi: credoraLoanPoolAbi,
  address: credoraLoanPoolAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteCredoraLoanPoolApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"cancelLoan"`
 */
export const useWriteCredoraLoanPoolCancelLoan =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'cancelLoan',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"claimYield"`
 */
export const useWriteCredoraLoanPoolClaimYield =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'claimYield',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"fund"`
 */
export const useWriteCredoraLoanPoolFund = /*#__PURE__*/ createUseWriteContract(
  {
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'fund',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteCredoraLoanPoolGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteCredoraLoanPoolInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"markAsDefaulted"`
 */
export const useWriteCredoraLoanPoolMarkAsDefaulted =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'markAsDefaulted',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"pause"`
 */
export const useWriteCredoraLoanPoolPause =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteCredoraLoanPoolRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"repayFullLoan"`
 */
export const useWriteCredoraLoanPoolRepayFullLoan =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'repayFullLoan',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"repayInstallment"`
 */
export const useWriteCredoraLoanPoolRepayInstallment =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'repayInstallment',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteCredoraLoanPoolRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteCredoraLoanPoolTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteCredoraLoanPoolTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"unpause"`
 */
export const useWriteCredoraLoanPoolUnpause =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"withdrawCancelledFunds"`
 */
export const useWriteCredoraLoanPoolWithdrawCancelledFunds =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'withdrawCancelledFunds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__
 */
export const useSimulateCredoraLoanPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateCredoraLoanPoolApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"cancelLoan"`
 */
export const useSimulateCredoraLoanPoolCancelLoan =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'cancelLoan',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"claimYield"`
 */
export const useSimulateCredoraLoanPoolClaimYield =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'claimYield',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"fund"`
 */
export const useSimulateCredoraLoanPoolFund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'fund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateCredoraLoanPoolGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateCredoraLoanPoolInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"markAsDefaulted"`
 */
export const useSimulateCredoraLoanPoolMarkAsDefaulted =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'markAsDefaulted',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"pause"`
 */
export const useSimulateCredoraLoanPoolPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateCredoraLoanPoolRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"repayFullLoan"`
 */
export const useSimulateCredoraLoanPoolRepayFullLoan =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'repayFullLoan',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"repayInstallment"`
 */
export const useSimulateCredoraLoanPoolRepayInstallment =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'repayInstallment',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateCredoraLoanPoolRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateCredoraLoanPoolTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateCredoraLoanPoolTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"unpause"`
 */
export const useSimulateCredoraLoanPoolUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `functionName` set to `"withdrawCancelledFunds"`
 */
export const useSimulateCredoraLoanPoolWithdrawCancelledFunds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    functionName: 'withdrawCancelledFunds',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__
 */
export const useWatchCredoraLoanPoolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchCredoraLoanPoolApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"CancelledFundsWithdrawn"`
 */
export const useWatchCredoraLoanPoolCancelledFundsWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'CancelledFundsWithdrawn',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"Funded"`
 */
export const useWatchCredoraLoanPoolFundedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'Funded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"InstallmentPaid"`
 */
export const useWatchCredoraLoanPoolInstallmentPaidEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'InstallmentPaid',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"LoanActivated"`
 */
export const useWatchCredoraLoanPoolLoanActivatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'LoanActivated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"LoanCancelled"`
 */
export const useWatchCredoraLoanPoolLoanCancelledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'LoanCancelled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"LoanDefaulted"`
 */
export const useWatchCredoraLoanPoolLoanDefaultedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'LoanDefaulted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchCredoraLoanPoolPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"PoolInitialized"`
 */
export const useWatchCredoraLoanPoolPoolInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'PoolInitialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"RepaymentMade"`
 */
export const useWatchCredoraLoanPoolRepaymentMadeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'RepaymentMade',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchCredoraLoanPoolRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchCredoraLoanPoolRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchCredoraLoanPoolRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchCredoraLoanPoolTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchCredoraLoanPoolUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraLoanPoolAbi}__ and `eventName` set to `"YieldClaimed"`
 */
export const useWatchCredoraLoanPoolYieldClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraLoanPoolAbi,
    address: credoraLoanPoolAddress,
    eventName: 'YieldClaimed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactory = /*#__PURE__*/ createUseReadContract({
  abi: credoraPoolFactoryAbi,
  address: credoraPoolFactoryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"ADMIN_ROLE"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"AI_ROLE"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryAiRole =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'AI_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"GOVERNANCE_ROLE"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryGovernanceRole =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'GOVERNANCE_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"MAX_INTEREST_RATE_BPS"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryMaxInterestRateBps =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'MAX_INTEREST_RATE_BPS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"POOL_CREATOR_ROLE"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryPoolCreatorRole =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'POOL_CREATOR_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"acceptedCurrency"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryAcceptedCurrency =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'acceptedCurrency',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"allLoanPools"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryAllLoanPools =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'allLoanPools',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"borrowerLoanPools"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryBorrowerLoanPools =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'borrowerLoanPools',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"getAllPools"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryGetAllPools =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'getAllPools',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"getBorrowerDetails"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryGetBorrowerDetails =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'getBorrowerDetails',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"getBorrowerRiskProfileExists"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryGetBorrowerRiskProfileExists =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'getBorrowerRiskProfileExists',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"getPoolsByBorrower"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryGetPoolsByBorrower =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'getPoolsByBorrower',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"hasRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"loanPoolImplementation"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryLoanPoolImplementation =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'loanPoolImplementation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"riskProfiles"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryRiskProfiles =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'riskProfiles',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactorySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"totalPools"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useReadCredoraPoolFactoryTotalPools =
  /*#__PURE__*/ createUseReadContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'totalPools',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWriteCredoraPoolFactory = /*#__PURE__*/ createUseWriteContract({
  abi: credoraPoolFactoryAbi,
  address: credoraPoolFactoryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"createLoanPool"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWriteCredoraPoolFactoryCreateLoanPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'createLoanPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"grantAIRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWriteCredoraPoolFactoryGrantAiRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'grantAIRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"grantAdminRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWriteCredoraPoolFactoryGrantAdminRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'grantAdminRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"grantGovernanceRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWriteCredoraPoolFactoryGrantGovernanceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'grantGovernanceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"grantPoolCreatorRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWriteCredoraPoolFactoryGrantPoolCreatorRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'grantPoolCreatorRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWriteCredoraPoolFactoryGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWriteCredoraPoolFactoryRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWriteCredoraPoolFactoryRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"setRiskProfile"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWriteCredoraPoolFactorySetRiskProfile =
  /*#__PURE__*/ createUseWriteContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'setRiskProfile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useSimulateCredoraPoolFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"createLoanPool"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useSimulateCredoraPoolFactoryCreateLoanPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'createLoanPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"grantAIRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useSimulateCredoraPoolFactoryGrantAiRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'grantAIRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"grantAdminRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useSimulateCredoraPoolFactoryGrantAdminRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'grantAdminRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"grantGovernanceRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useSimulateCredoraPoolFactoryGrantGovernanceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'grantGovernanceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"grantPoolCreatorRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useSimulateCredoraPoolFactoryGrantPoolCreatorRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'grantPoolCreatorRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useSimulateCredoraPoolFactoryGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useSimulateCredoraPoolFactoryRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useSimulateCredoraPoolFactoryRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `functionName` set to `"setRiskProfile"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useSimulateCredoraPoolFactorySetRiskProfile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    functionName: 'setRiskProfile',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraPoolFactoryAbi}__
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWatchCredoraPoolFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `eventName` set to `"LoanPoolCreated"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWatchCredoraPoolFactoryLoanPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    eventName: 'LoanPoolCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `eventName` set to `"RiskProfileSet"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWatchCredoraPoolFactoryRiskProfileSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    eventName: 'RiskProfileSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWatchCredoraPoolFactoryRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `eventName` set to `"RoleGranted"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWatchCredoraPoolFactoryRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link credoraPoolFactoryAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x7520F7BaeC39b21C3a7D02724f8DCD7F19aE5052)
 */
export const useWatchCredoraPoolFactoryRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: credoraPoolFactoryAbi,
    address: credoraPoolFactoryAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockUsdcAbi}__
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useReadMockUsdc = /*#__PURE__*/ createUseReadContract({
  abi: mockUsdcAbi,
  address: mockUsdcAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"MAX_MINT_PER_CALL_SCALED"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useReadMockUsdcMaxMintPerCallScaled =
  /*#__PURE__*/ createUseReadContract({
    abi: mockUsdcAbi,
    address: mockUsdcAddress,
    functionName: 'MAX_MINT_PER_CALL_SCALED',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useReadMockUsdcAllowance = /*#__PURE__*/ createUseReadContract({
  abi: mockUsdcAbi,
  address: mockUsdcAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useReadMockUsdcBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: mockUsdcAbi,
  address: mockUsdcAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useReadMockUsdcDecimals = /*#__PURE__*/ createUseReadContract({
  abi: mockUsdcAbi,
  address: mockUsdcAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useReadMockUsdcName = /*#__PURE__*/ createUseReadContract({
  abi: mockUsdcAbi,
  address: mockUsdcAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useReadMockUsdcSymbol = /*#__PURE__*/ createUseReadContract({
  abi: mockUsdcAbi,
  address: mockUsdcAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useReadMockUsdcTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: mockUsdcAbi,
  address: mockUsdcAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockUsdcAbi}__
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useWriteMockUsdc = /*#__PURE__*/ createUseWriteContract({
  abi: mockUsdcAbi,
  address: mockUsdcAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useWriteMockUsdcApprove = /*#__PURE__*/ createUseWriteContract({
  abi: mockUsdcAbi,
  address: mockUsdcAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"mintTestTokens"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useWriteMockUsdcMintTestTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockUsdcAbi,
    address: mockUsdcAddress,
    functionName: 'mintTestTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useWriteMockUsdcTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: mockUsdcAbi,
  address: mockUsdcAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useWriteMockUsdcTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockUsdcAbi,
    address: mockUsdcAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockUsdcAbi}__
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useSimulateMockUsdc = /*#__PURE__*/ createUseSimulateContract({
  abi: mockUsdcAbi,
  address: mockUsdcAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useSimulateMockUsdcApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockUsdcAbi,
    address: mockUsdcAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"mintTestTokens"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useSimulateMockUsdcMintTestTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockUsdcAbi,
    address: mockUsdcAddress,
    functionName: 'mintTestTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useSimulateMockUsdcTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockUsdcAbi,
    address: mockUsdcAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockUsdcAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useSimulateMockUsdcTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockUsdcAbi,
    address: mockUsdcAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockUsdcAbi}__
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useWatchMockUsdcEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: mockUsdcAbi,
  address: mockUsdcAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockUsdcAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useWatchMockUsdcApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockUsdcAbi,
    address: mockUsdcAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockUsdcAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Asset Chain Testnet Asset Chain Testnet Explorer__](https://scan-testnet.assetchain.org/address/0x024db3Ba5D3C6701dFeb2483bEab19c5650c43f9)
 */
export const useWatchMockUsdcTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockUsdcAbi,
    address: mockUsdcAddress,
    eventName: 'Transfer',
  })
