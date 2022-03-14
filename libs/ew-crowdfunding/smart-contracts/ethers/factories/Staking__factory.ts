/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Staking, StakingInterface } from "../Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_claimManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardProvider",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_serviceRole",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_patronRole",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "CampaignAborted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_amout",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "NewStake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "refunded",
        type: "uint256",
      },
    ],
    name: "RefundExceeded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "RewardSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "initDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_startDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_endDate",
        type: "uint256",
      },
    ],
    name: "StakingPoolInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "statusType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "StatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amout",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "TokenBurnt",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_amout",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimManagerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contributionLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositRewards",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "endDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractStatus",
    outputs: [
      {
        internalType: "bool",
        name: "_isContractInitialized",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_isContractPaused",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_isContractAborted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hardCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_provider",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_role",
        type: "bytes32",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_signupStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_signupEnd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_hardCap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_contributionLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minRequiredStake",
        type: "uint256",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minRequiredStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "patronRole",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "serviceRole",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "signupEnd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "signupStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "startDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "terminate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026d5380380620026d5833981016040819052620000349162000250565b8151829082906200004d906003906020850190620000c0565b50805162000063906004906020840190620000c0565b5050600e8054336001600160a01b03199182161790915560118054600160201b600160c01b0319166401000000006001600160a01b039a8b1602179055600c95909555505050600d55600f80549091169190921617905562000330565b828054620000ce90620002f3565b90600052602060002090601f016020900481019282620000f257600085556200013d565b82601f106200010d57805160ff19168380011785556200013d565b828001600101855582156200013d579182015b828111156200013d57825182559160200191906001019062000120565b506200014b9291506200014f565b5090565b5b808211156200014b576000815560010162000150565b80516001600160a01b03811681146200017e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001ab57600080fd5b81516001600160401b0380821115620001c857620001c862000183565b604051601f8301601f19908116603f01168101908282118183101715620001f357620001f362000183565b816040528381526020925086838588010111156200021057600080fd5b600091505b8382101562000234578582018301518183018401529082019062000215565b83821115620002465760008385830101525b9695505050505050565b60008060008060008060c087890312156200026a57600080fd5b620002758762000166565b9550620002856020880162000166565b6040880151606089015160808a015192975090955093506001600160401b0380821115620002b257600080fd5b620002c08a838b0162000199565b935060a0890151915080821115620002d757600080fd5b50620002e689828a0162000199565b9150509295509295509295565b600181811c908216806200030857607f821691505b602082108114156200032a57634e487b7160e01b600052602260045260246000fd5b50919050565b61239580620003406000396000f3fe6080604052600436106102195760003560e01c80637332e07711610123578063af63dda4116100ab578063dd2f35e91161006f578063dd2f35e9146105ba578063dd62ed3e146105d0578063eee6430c14610616578063f7b188a514610636578063fb86a4041461064b57600080fd5b8063af63dda414610509578063c032846b1461051f578063c24a0f8b14610562578063c399ec8814610578578063db006a751461059a57600080fd5b80638456cb59116100f25780638456cb591461047f57806395d89b4114610494578063a457c2d7146104a9578063a9059cbb146104c9578063ac4ab3fb146104e957600080fd5b80637332e0771461041d57806379cc6790146104335780637c0e77ac14610453578063817b1cd21461046957600080fd5b80631aeae7ba116101a65780633950935111610175578063395093511461039f5780633a4b66f1146103bf57806342966c68146103c75780634a3642a5146103e757806370a08231146103fd57600080fd5b80631aeae7ba1461033857806323b872dd1461034e5780632f4350c21461036e578063313ce5671461038357600080fd5b80630b97bc86116101ed5780630b97bc86146102d85780630c08bf88146102ee5780630e15561a14610305578063152111f71461031b57806318160ddd1461032357600080fd5b806216ee161461021e5780630572b0cc1461026357806306fdde0314610286578063095ea7b3146102a8575b600080fd5b34801561022a57600080fd5b506011546102469064010000000090046001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561026f57600080fd5b50610278610661565b60405190815260200161025a565b34801561029257600080fd5b5061029b6106ac565b60405161025a9190612079565b3480156102b457600080fd5b506102c86102c33660046120ea565b61073e565b604051901515815260200161025a565b3480156102e457600080fd5b5061027860095481565b3480156102fa57600080fd5b50610303610754565b005b34801561031157600080fd5b5061027860075481565b610303610874565b34801561032f57600080fd5b50600254610278565b34801561034457600080fd5b50610278600c5481565b34801561035a57600080fd5b506102c8610369366004612114565b610ad7565b34801561037a57600080fd5b50610303610b81565b34801561038f57600080fd5b506040516012815260200161025a565b3480156103ab57600080fd5b506102c86103ba3660046120ea565b610bb8565b610303610bf4565b3480156103d357600080fd5b506103036103e2366004612150565b611181565b3480156103f357600080fd5b5061027860085481565b34801561040957600080fd5b50610278610418366004612169565b61118d565b34801561042957600080fd5b5061027860105481565b34801561043f57600080fd5b5061030361044e3660046120ea565b6111a8565b34801561045f57600080fd5b5061027860125481565b34801561047557600080fd5b50610278600b5481565b34801561048b57600080fd5b5061030361122e565b3480156104a057600080fd5b5061029b6112ef565b3480156104b557600080fd5b506102c86104c43660046120ea565b6112fe565b3480156104d557600080fd5b506102c86104e43660046120ea565b611397565b3480156104f557600080fd5b506102c86105043660046120ea565b6113a4565b34801561051557600080fd5b50610278600a5481565b34801561052b57600080fd5b506011546040805160ff6301000000840481161515825262010000840481161515602083015290921615159082015260600161025a565b34801561056e57600080fd5b5061027860065481565b34801561058457600080fd5b5033600090815260136020526040902054610278565b3480156105a657600080fd5b506103036105b5366004612150565b61142d565b3480156105c657600080fd5b50610278600d5481565b3480156105dc57600080fd5b506102786105eb36600461218b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b34801561062257600080fd5b506103036106313660046121be565b6116f5565b34801561064257600080fd5b50610303611916565b34801561065757600080fd5b5061027860055481565b60115460009062010000900460ff16156106965760405162461bcd60e51b815260040161068d9061220a565b60405180910390fd5b6106a76106a23361118d565b6119f3565b905090565b6060600380546106bb90612236565b80601f01602080910402602001604051908101604052809291908181526020018280546106e790612236565b80156107345780601f1061070957610100808354040283529160200191610734565b820191906000526020600020905b81548152906001019060200180831161071757829003601f168201915b5050505050905090565b600061074b338484611b2c565b50600192915050565b600e546001600160a01b0316331461077e5760405162461bcd60e51b815260040161068d9061226b565b60115460ff16156107c65760405162461bcd60e51b8152602060048201526012602482015271105b1c9958591e481d195c9b5a5b985d195960721b604482015260640161068d565b6007546011805460ff19166001179055801561081857600f546040516001600160a01b039091169082156108fc029083906000818181858888f19350505050158015610816573d6000803e3d6000fd5b505b61083d60006005819055600881905560078190556011805462ff000019169055601055565b6040514281527f396ef65364c652a5186a005bb7dcf6aac4d2adcb6c6d0adf39a5f13104a2e344906020015b60405180910390a150565b6000600b54607861088591906122ac565b90506108936103e8826122cb565b600b546108a091906122ed565b3410156108e45760405162461bcd60e51b81526020600482015260126024820152714e6f7420456e6f756768207265776172647360701b604482015260640161068d565b60115460ff161561092a5760405162461bcd60e51b815260206004820152601060248201526f10d85b5c185a59db8818589bdc9d195960821b604482015260640161068d565b6009544211801561093c575060065442105b6109815760405162461bcd60e51b815260206004820152601660248201527510dbdb9d1c9858dd081b9bdd081858dd1a5d985d195960521b604482015260640161068d565b601154610100900460ff16156109ca5760405162461bcd60e51b815260206004820152600e60248201526d105b1c9958591e48199d5b99195960921b604482015260640161068d565b60003411610a105760405162461bcd60e51b8152602060048201526013602482015272139bc81c995dd85c991cc81c1c9bdd9a591959606a1b604482015260640161068d565b610a1c33600c546113a4565b80610a315750600f546001600160a01b031633145b610a7d5760405162461bcd60e51b815260206004820181905260248201527f4e6f7420656e726f6c6c656420617320736572766963652070726f7669646572604482015260640161068d565b3460076000828254610a8f91906122ed565b90915550506011805461ff0019166101001790556040517f6379339f0ae63e95e65fad18ca2a7ec4e7e3f05f3cc5f7079f4d8da8cec34faa9061086990339034904290612305565b6000610ae4848484611c50565b6001600160a01b038416600090815260016020908152604080832033845290915290205482811015610b695760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b606482015260840161068d565b610b768533858403611b2c565b506001949350505050565b60115462010000900460ff1615610baa5760405162461bcd60e51b815260040161068d9061220a565b610bb66105b53361118d565b565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161074b918590610bef9086906122ed565b611b2c565b60115460ff1615610c3a5760405162461bcd60e51b815260206004820152601060248201526f10d85b5c185a59db8818589bdc9d195960821b604482015260640161068d565b6011546301000000900460ff16610c855760405162461bcd60e51b815260206004820152600f60248201526e139bdd081a5b9a5d1a585b1a5e9959608a1b604482015260640161068d565b60003411610cc75760405162461bcd60e51b815260206004820152600f60248201526e139bc81155d5081c1c9bdd9a591959608a1b604482015260640161068d565b6008544210610d075760405162461bcd60e51b815260206004820152600c60248201526b14da59db9d5c08115b99195960a21b604482015260640161068d565b600554600b5410610d4d5760405162461bcd60e51b815260206004820152601060248201526f12185c9918d85c08115e18d95959195960821b604482015260640161068d565b6010543360009081526013602052604090205410610dad5760405162461bcd60e51b815260206004820152601a60248201527f436f6e747269627574696f6e206c696d69742072656163686564000000000000604482015260640161068d565b60115462010000900460ff1615610dd65760405162461bcd60e51b815260040161068d9061220a565b601254341015610e175760405162461bcd60e51b815260206004820152600c60248201526b56616c756520746f206c6f7760a01b604482015260640161068d565b610e2333600d546113a4565b610e605760405162461bcd60e51b815260206004820152600e60248201526d4e6f20706174726f6e20726f6c6560901b604482015260640161068d565b60105433600090815260136020526040902054610e7e9034906122ed565b1061109f5733600090815260136020526040812054601054610ea09190612326565b610eaa9034612326565b90506000610eb88234612326565b905060055481600b54610ecb91906122ed565b10610fd9576000600b54600554610ee29190612326565b610eec9083612326565b90506000610efa8284612326565b33600090815260136020526040812080549293508392909190610f1e9084906122ed565b90915550610f2e90503382611e1f565b604051428152819033907f55595f34fd936311e65eca0a752ee70068b8992fdf64918aff1b6345689c84e49060200160405180910390a37fef3402545c3e64e30583a48b60392700e20c20e1e2406dce9d340c9b54c476fc3334610f9285886122ed565b604051610fa193929190612305565b60405180910390a180600b6000828254610fbb91906122ed565b90915550610fd39050610fce83866122ed565b611efe565b50505050565b3360009081526013602052604081208054839290610ff89084906122ed565b9091555061100890503382611e1f565b604051428152819033907f55595f34fd936311e65eca0a752ee70068b8992fdf64918aff1b6345689c84e49060200160405180910390a37fef3402545c3e64e30583a48b60392700e20c20e1e2406dce9d340c9b54c476fc33348460405161107293929190612305565b60405180910390a180600b600082825461108c91906122ed565b9091555061109b905082611efe565b5050565b60055434600b546110b091906122ed565b10611103576000600b546005546110c79190612326565b6110d19034612326565b905060006110df8234612326565b33600090815260136020526040812080549293508392909190610ff89084906122ed565b33600090815260136020526040812080543492906111229084906122ed565b9091555050604051428152349033907f55595f34fd936311e65eca0a752ee70068b8992fdf64918aff1b6345689c84e49060200160405180910390a36111683334611e1f565b34600b600082825461117a91906122ed565b9091555050565b61118a8161142d565b50565b6001600160a01b031660009081526020819052604090205490565b60006111b483336105eb565b9050818110156112125760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b606482015260840161068d565b61121f8333848403611b2c565b6112298383611f2b565b505050565b600e546001600160a01b031633146112585760405162461bcd60e51b815260040161068d9061226b565b60115462010000900460ff16156112815760405162461bcd60e51b815260040161068d9061220a565b6011805462ff000019166201000017905560408051818152600e918101919091526d18dbdb9d1c9858dd14185d5cd95960921b60608201524260208201527f5921431fa16f8be49d0a0175ba96d394094d37c61ef3ecd3985329c254cd108a906080015b60405180910390a1565b6060600480546106bb90612236565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156113805760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161068d565b61138d3385858403611b2c565b5060019392505050565b600061074b338484611c50565b601154604051634aefbd8f60e11b815260009164010000000090046001600160a01b03169081906395df7b1e906113e49087908790600190600401612305565b602060405180830381865afa158015611401573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611425919061233d565b949350505050565b60115462010000900460ff16156114565760405162461bcd60e51b815260040161068d9061220a565b60115460ff1680611468575060095442105b80611474575060065442115b6114b85760405162461bcd60e51b815260206004820152601560248201527415da5d1a191c985ddcc81b9bdd08185b1b1bddd959605a1b604482015260640161068d565b6114c433600d546113a4565b6115015760405162461bcd60e51b815260206004820152600e60248201526d4e6f20706174726f6e20726f6c6560901b604482015260640161068d565b806000811161154a5760405162461bcd60e51b8152602060048201526015602482015274195c9c9bdc8e881dda5d1a191c985dc80c081155d5605a1b604482015260640161068d565b6115533361118d565b6115955760405162461bcd60e51b81526020600482015260136024820152724e6f206465706f736974206174207374616b6560681b604482015260640161068d565b8061159f3361118d565b10156115e75760405162461bcd60e51b81526020600482015260176024820152764e6f7420656e6f75676820455754206174207374616b6560481b604482015260640161068d565b60006115f2836119f3565b90506115fe3384611f2b565b82600b60008282546116109190612326565b9091555050604051339082156108fc029083906000818181858888f19350505050158015611642573d6000803e3d6000fd5b50604051428152819033907f92ccf450a286a957af52509bc1c9939d1a6a481783e142e41e2499f0bb66ebc69060200160405180910390a37f40ec41b547e3a769f863d660b593350eb4ce5d779b1c4e3f112eefc40c8e81d83384426040516116ad93929190612305565b60405180910390a182600b60008282546116c79190612326565b909155505033600090815260136020526040812080548592906116eb908490612326565b9091555050505050565b600e546001600160a01b0316331461171f5760405162461bcd60e51b815260040161068d9061226b565b6011546301000000900460ff161561176f5760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b604482015260640161068d565b600082116117bf5760405162461bcd60e51b815260206004820152601860248201527f77726f6e6720636f6e747269627574696f6e206c696d69740000000000000000604482015260640161068d565b818310156118025760405162461bcd60e51b815260206004820152601060248201526f12185c9918d85c08115e18d95959195960821b604482015260640161068d565b8587106118475760405162461bcd60e51b815260206004820152601360248201527257726f6e67207369676e757020636f6e66696760681b604482015260640161068d565b8585116118965760405162461bcd60e51b815260206004820152601a60248201527f5374617274206665626f7265207369676e757020706572696f64000000000000604482015260640161068d565b6006849055600583905560098590556008869055600a8790556011805463ff000000191663010000001790556010829055601281905560408051428152602081018790529081018590527f2942eb7be804ba7efe93e5b8f2e1b0bcde0a25deae1aabcad7ddd8b307bff90d9060600160405180910390a150505050505050565b600e546001600160a01b031633146119405760405162461bcd60e51b815260040161068d9061226b565b60115462010000900460ff1661198e5760405162461bcd60e51b815260206004820152601360248201527210dbdb9d1c9858dd081b9bdd0814185d5cd959606a1b604482015260640161068d565b6011805462ff000019169055604080518181526010918101919091526f18dbdb9d1c9858dd155b9c185d5cd95960821b60608201524260208201527f5921431fa16f8be49d0a0175ba96d394094d37c61ef3ecd3985329c254cd108a906080016112e5565b60008160008111611a3e5760405162461bcd60e51b8152602060048201526015602482015274195c9c9bdc8e881dda5d1a191c985dc80c081155d5605a1b604482015260640161068d565b611a473361118d565b611a895760405162461bcd60e51b81526020600482015260136024820152724e6f206465706f736974206174207374616b6560681b604482015260640161068d565b80611a933361118d565b1015611adb5760405162461bcd60e51b81526020600482015260176024820152764e6f7420656e6f75676820455754206174207374616b6560481b604482015260640161068d565b60115460ff16158015611aef575060075415155b15611b22576000611b018460646122ac565b905083611b106103e8836122cb565b611b1a91906122ed565b925050611b26565b8291505b50919050565b6001600160a01b038316611b8e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161068d565b6001600160a01b038216611bef5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161068d565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316611cb45760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161068d565b6001600160a01b038216611d165760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161068d565b6001600160a01b03831660009081526020819052604090205481811015611d8e5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161068d565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290611dc59084906122ed565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611e1191815260200190565b60405180910390a350505050565b6001600160a01b038216611e755760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161068d565b8060026000828254611e8791906122ed565b90915550506001600160a01b03821660009081526020819052604081208054839290611eb49084906122ed565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b604051339082156108fc029083906000818181858888f1935050505015801561109b573d6000803e3d6000fd5b6001600160a01b038216611f8b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161068d565b6001600160a01b03821660009081526020819052604090205481811015611fff5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161068d565b6001600160a01b038316600090815260208190526040812083830390556002805484929061202e908490612326565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600060208083528351808285015260005b818110156120a65785810183015185820160400152820161208a565b818111156120b8576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146120e557600080fd5b919050565b600080604083850312156120fd57600080fd5b612106836120ce565b946020939093013593505050565b60008060006060848603121561212957600080fd5b612132846120ce565b9250612140602085016120ce565b9150604084013590509250925092565b60006020828403121561216257600080fd5b5035919050565b60006020828403121561217b57600080fd5b612184826120ce565b9392505050565b6000806040838503121561219e57600080fd5b6121a7836120ce565b91506121b5602084016120ce565b90509250929050565b600080600080600080600060e0888a0312156121d957600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b60208082526012908201527121b7b73a3930b1ba1034b990333937bd32b760711b604082015260600190565b600181811c9082168061224a57607f821691505b60208210811415611b2657634e487b7160e01b600052602260045260246000fd5b60208082526011908201527026bab9ba103132903a34329030b236b4b760791b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156122c6576122c6612296565b500290565b6000826122e857634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561230057612300612296565b500190565b6001600160a01b039390931683526020830191909152604082015260600190565b60008282101561233857612338612296565b500390565b60006020828403121561234f57600080fd5b8151801515811461218457600080fdfea2646970667358221220a68bed82c9aaf62b02d8cd6767f77bb89e4fbeb12dd01cc38c5c1ad6384aae8164736f6c634300080c0033";

export class Staking__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _claimManager: string,
    _rewardProvider: string,
    _serviceRole: BytesLike,
    _patronRole: BytesLike,
    tokenName: string,
    tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(
      _claimManager,
      _rewardProvider,
      _serviceRole,
      _patronRole,
      tokenName,
      tokenSymbol,
      overrides || {}
    ) as Promise<Staking>;
  }
  getDeployTransaction(
    _claimManager: string,
    _rewardProvider: string,
    _serviceRole: BytesLike,
    _patronRole: BytesLike,
    tokenName: string,
    tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _claimManager,
      _rewardProvider,
      _serviceRole,
      _patronRole,
      tokenName,
      tokenSymbol,
      overrides || {}
    );
  }
  attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
