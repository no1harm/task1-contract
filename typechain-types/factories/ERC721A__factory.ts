/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721A, ERC721AInterface } from "../ERC721A";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620023f0380380620023f08339818101604052810190620000379190620001ae565b81600290805190602001906200004f9291906200008c565b508060039080519060200190620000689291906200008c565b50620000796200008760201b60201c565b600081905550505062000391565b600090565b8280546200009a90620002b6565b90600052602060002090601f016020900481019282620000be57600085556200010a565b82601f10620000d957805160ff19168380011785556200010a565b828001600101855582156200010a579182015b8281111562000109578251825591602001919060010190620000ec565b5b5090506200011991906200011d565b5090565b5b80821115620001385760008160009055506001016200011e565b5090565b6000620001536200014d846200024a565b62000221565b9050828152602081018484840111156200016c57600080fd5b6200017984828562000280565b509392505050565b600082601f8301126200019357600080fd5b8151620001a58482602086016200013c565b91505092915050565b60008060408385031215620001c257600080fd5b600083015167ffffffffffffffff811115620001dd57600080fd5b620001eb8582860162000181565b925050602083015167ffffffffffffffff8111156200020957600080fd5b620002178582860162000181565b9150509250929050565b60006200022d62000240565b90506200023b8282620002ec565b919050565b6000604051905090565b600067ffffffffffffffff82111562000268576200026762000351565b5b620002738262000380565b9050602081019050919050565b60005b83811015620002a057808201518184015260208101905062000283565b83811115620002b0576000848401525b50505050565b60006002820490506001821680620002cf57607f821691505b60208210811415620002e657620002e562000322565b5b50919050565b620002f78262000380565b810181811067ffffffffffffffff8211171562000319576200031862000351565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61204f80620003a16000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb4651461025d578063b88d4fde14610279578063c87b56dd14610295578063e985e9c5146102c5576100ea565b80636352211e146101df57806370a082311461020f57806395d89b411461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806318160ddd1461018957806323b872dd146101a757806342842e0e146101c3576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b610109600480360381019061010491906119db565b6102f5565b6040516101169190611bb1565b60405180910390f35b6101276103d7565b6040516101349190611bcc565b60405180910390f35b61015760048036038101906101529190611a2d565b610469565b6040516101649190611b4a565b60405180910390f35b6101876004803603810190610182919061199f565b6104e5565b005b6101916105f0565b60405161019e9190611bee565b60405180910390f35b6101c160048036038101906101bc9190611899565b610607565b005b6101dd60048036038101906101d89190611899565b610617565b005b6101f960048036038101906101f49190611a2d565b610637565b6040516102069190611b4a565b60405180910390f35b61022960048036038101906102249190611834565b61064d565b6040516102369190611bee565b60405180910390f35b61024761071d565b6040516102549190611bcc565b60405180910390f35b61027760048036038101906102729190611963565b6107af565b005b610293600480360381019061028e91906118e8565b610927565b005b6102af60048036038101906102aa9190611a2d565b6109a3565b6040516102bc9190611bcc565b60405180910390f35b6102df60048036038101906102da919061185d565b610a42565b6040516102ec9190611bb1565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103c057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103d057506103cf82610ad6565b5b9050919050565b6060600280546103e690611e13565b80601f016020809104026020016040519081016040528092919081815260200182805461041290611e13565b801561045f5780601f106104345761010080835404028352916020019161045f565b820191906000526020600020905b81548152906001019060200180831161044257829003601f168201915b5050505050905090565b600061047482610b40565b6104aa576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104f082610637565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610558576040517f943f7b8c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610577610b8e565b73ffffffffffffffffffffffffffffffffffffffff16141580156105a957506105a7816105a2610b8e565b610a42565b155b156105e0576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105eb838383610b96565b505050565b60006105fa610c48565b6001546000540303905090565b610612838383610c4d565b505050565b61063283838360405180602001604052806000815250610927565b505050565b60006106428261113e565b600001519050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106b5576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b60606003805461072c90611e13565b80601f016020809104026020016040519081016040528092919081815260200182805461075890611e13565b80156107a55780601f1061077a576101008083540402835291602001916107a5565b820191906000526020600020905b81548152906001019060200180831161078857829003601f168201915b5050505050905090565b6107b7610b8e565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561081c576040517fb06307db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060076000610829610b8e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166108d6610b8e565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161091b9190611bb1565b60405180910390a35050565b610932848484610c4d565b6109518373ffffffffffffffffffffffffffffffffffffffff166113cd565b80156109665750610964848484846113f0565b155b1561099d576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60606109ae82610b40565b6109e4576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006109ee611550565b9050600081511415610a0f5760405180602001604052806000815250610a3a565b80610a1984611567565b604051602001610a2a929190611b26565b6040516020818303038152906040525b915050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600081610b4b610c48565b11158015610b5a575060005482105b8015610b87575060046000838152602001908152602001600020600001601c9054906101000a900460ff16155b9050919050565b600033905090565b826006600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b600090565b6000610c588261113e565b90506000816000015173ffffffffffffffffffffffffffffffffffffffff16610c7f610b8e565b73ffffffffffffffffffffffffffffffffffffffff161480610cb25750610cb18260000151610cac610b8e565b610a42565b5b80610cf75750610cc0610b8e565b73ffffffffffffffffffffffffffffffffffffffff16610cdf84610469565b73ffffffffffffffffffffffffffffffffffffffff16145b905080610d30576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8473ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff1614610d99576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610e00576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e0d8585856001611714565b610e1d6000848460000151610b96565b6001600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160392506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550836004600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426004600085815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000600184019050600073ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156110ce576000548110156110cd5782600001516004600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082602001516004600083815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505b5b50828473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611137858585600161171a565b5050505050565b611146611720565b600082905080611154610c48565b11158015611163575060005481105b15611396576000600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff1615151515815250509050806040015161139457600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff16146112785780925050506113c8565b5b60011561139357818060019003925050600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff1615151515815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161461138e5780925050506113c8565b611279565b5b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611416610b8e565b8786866040518563ffffffff1660e01b81526004016114389493929190611b65565b602060405180830381600087803b15801561145257600080fd5b505af192505050801561148357506040513d601f19601f820116820180604052508101906114809190611a04565b60015b6114fd573d80600081146114b3576040519150601f19603f3d011682016040523d82523d6000602084013e6114b8565b606091505b506000815114156114f5576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b606060405180602001604052806000815250905090565b606060008214156115af576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061170f565b600082905060005b600082146115e15780806115ca90611e76565b915050600a826115da9190611cf8565b91506115b7565b60008167ffffffffffffffff811115611623577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156116555781602001600182028036833780820191505090505b5090505b600085146117085760018261166e9190611d29565b9150600a8561167d9190611ebf565b60306116899190611ca2565b60f81b8183815181106116c5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856117019190611cf8565b9450611659565b8093505050505b919050565b50505050565b50505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff1681526020016000151581525090565b600061177661177184611c2e565b611c09565b90508281526020810184848401111561178e57600080fd5b611799848285611dd1565b509392505050565b6000813590506117b081611fbd565b92915050565b6000813590506117c581611fd4565b92915050565b6000813590506117da81611feb565b92915050565b6000815190506117ef81611feb565b92915050565b600082601f83011261180657600080fd5b8135611816848260208601611763565b91505092915050565b60008135905061182e81612002565b92915050565b60006020828403121561184657600080fd5b6000611854848285016117a1565b91505092915050565b6000806040838503121561187057600080fd5b600061187e858286016117a1565b925050602061188f858286016117a1565b9150509250929050565b6000806000606084860312156118ae57600080fd5b60006118bc868287016117a1565b93505060206118cd868287016117a1565b92505060406118de8682870161181f565b9150509250925092565b600080600080608085870312156118fe57600080fd5b600061190c878288016117a1565b945050602061191d878288016117a1565b935050604061192e8782880161181f565b925050606085013567ffffffffffffffff81111561194b57600080fd5b611957878288016117f5565b91505092959194509250565b6000806040838503121561197657600080fd5b6000611984858286016117a1565b9250506020611995858286016117b6565b9150509250929050565b600080604083850312156119b257600080fd5b60006119c0858286016117a1565b92505060206119d18582860161181f565b9150509250929050565b6000602082840312156119ed57600080fd5b60006119fb848285016117cb565b91505092915050565b600060208284031215611a1657600080fd5b6000611a24848285016117e0565b91505092915050565b600060208284031215611a3f57600080fd5b6000611a4d8482850161181f565b91505092915050565b611a5f81611d5d565b82525050565b611a6e81611d6f565b82525050565b6000611a7f82611c5f565b611a898185611c75565b9350611a99818560208601611de0565b611aa281611fac565b840191505092915050565b6000611ab882611c6a565b611ac28185611c86565b9350611ad2818560208601611de0565b611adb81611fac565b840191505092915050565b6000611af182611c6a565b611afb8185611c97565b9350611b0b818560208601611de0565b80840191505092915050565b611b2081611dc7565b82525050565b6000611b328285611ae6565b9150611b3e8284611ae6565b91508190509392505050565b6000602082019050611b5f6000830184611a56565b92915050565b6000608082019050611b7a6000830187611a56565b611b876020830186611a56565b611b946040830185611b17565b8181036060830152611ba68184611a74565b905095945050505050565b6000602082019050611bc66000830184611a65565b92915050565b60006020820190508181036000830152611be68184611aad565b905092915050565b6000602082019050611c036000830184611b17565b92915050565b6000611c13611c24565b9050611c1f8282611e45565b919050565b6000604051905090565b600067ffffffffffffffff821115611c4957611c48611f7d565b5b611c5282611fac565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611cad82611dc7565b9150611cb883611dc7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611ced57611cec611ef0565b5b828201905092915050565b6000611d0382611dc7565b9150611d0e83611dc7565b925082611d1e57611d1d611f1f565b5b828204905092915050565b6000611d3482611dc7565b9150611d3f83611dc7565b925082821015611d5257611d51611ef0565b5b828203905092915050565b6000611d6882611da7565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611dfe578082015181840152602081019050611de3565b83811115611e0d576000848401525b50505050565b60006002820490506001821680611e2b57607f821691505b60208210811415611e3f57611e3e611f4e565b5b50919050565b611e4e82611fac565b810181811067ffffffffffffffff82111715611e6d57611e6c611f7d565b5b80604052505050565b6000611e8182611dc7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611eb457611eb3611ef0565b5b600182019050919050565b6000611eca82611dc7565b9150611ed583611dc7565b925082611ee557611ee4611f1f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611fc681611d5d565b8114611fd157600080fd5b50565b611fdd81611d6f565b8114611fe857600080fd5b50565b611ff481611d7b565b8114611fff57600080fd5b50565b61200b81611dc7565b811461201657600080fd5b5056fea2646970667358221220bb550241d1b198491426351f38654e8d281e27a698392ebd2818dc075defbee164736f6c63430008040033";

type ERC721AConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721AConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721A__factory extends ContractFactory {
  constructor(...args: ERC721AConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721A";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721A> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721A>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721A {
    return super.attach(address) as ERC721A;
  }
  connect(signer: Signer): ERC721A__factory {
    return super.connect(signer) as ERC721A__factory;
  }
  static readonly contractName: "ERC721A";
  public readonly contractName: "ERC721A";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AInterface {
    return new utils.Interface(_abi) as ERC721AInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721A {
    return new Contract(address, _abi, signerOrProvider) as ERC721A;
  }
}