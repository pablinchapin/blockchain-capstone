# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Install
The repository contains Smart Contract code written solidity and tests using Javascript. To run the code:
* npm install
* Truffle Compile (use npx truffle compile if there are issues compiling to use local version of truffle)

## Package versions:
* Truffle v5.0.15 (core: 5.0.15)
* Solidity - 0.5.2 (solc-js)
* Node v14.16.1
* Web3.js v1.5.3

## Generating proof with zokrates
* Navigate to folder zokrates\code\
* Run zokrates docker image docker run -v $(pwd):/home/zokrates/code -it zokrates/zokrates /bin/bash
* compile the program
  cd code
  ~zokrates compile -i square/square.code
* Generate the trusted setup ~/zokrates setup

* Compute witness for your desired pair of number ~/zokrates compute-witness -a 3 9

* Generate proof ~/zokrates generate-proof

* Generate verifier.sol ~/zokrates export-verifier

## Pass Truffle Test using local development blockchain
```
truffle compile
```
All contracts have been compiled as shown below:
![image](images/truffle-compile.png)

```
truffle migrate
```
All migrations have been passed as shown below:
![image](images/truffle-migrate-1.png)
![image](images/truffle-migrate-2.png)
![image](images/truffle-migrate-3.png)
![image](images/truffle-migrate-4.png)
![image](images/truffle-migrate-5.png)
![image](images/truffle-migrate-6.png)

```
truffle test
```
All tests have been passed as shown below:
![image](images/truffle-test.png)


## Deployed contract address (Verifier) on Rinkeby Testnet
0xA31eb7EBaC798B89e7456495321BF6d484F9becC

## Deployed contract address (SolnSquareVerifier) on Rinkeby Testnet
0x9a6e9809Dc26d9Fc44e0353cd230273E97E6925c

## Owner address
0xF3DbD0ba5130114b30e58c5202aA12e68d2ED12f

## Contract ABI
"abi": [
{
  "inputs": [
	{
	  "internalType": "string",
	  "name": "name",
	  "type": "string"
	},
	{
	  "internalType": "string",
	  "name": "symbol",
	  "type": "string"
	}
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [
	{
	  "indexed": true,
	  "internalType": "address",
	  "name": "owner",
	  "type": "address"
	},
	{
	  "indexed": true,
	  "internalType": "address",
	  "name": "approved",
	  "type": "address"
	},
	{
	  "indexed": true,
	  "internalType": "uint256",
	  "name": "tokenId",
	  "type": "uint256"
	}
  ],
  "name": "Approval",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
	{
	  "indexed": true,
	  "internalType": "address",
	  "name": "owner",
	  "type": "address"
	},
	{
	  "indexed": true,
	  "internalType": "address",
	  "name": "operator",
	  "type": "address"
	},
	{
	  "indexed": false,
	  "internalType": "bool",
	  "name": "approved",
	  "type": "bool"
	}
  ],
  "name": "ApprovalForAll",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
	{
	  "indexed": false,
	  "internalType": "address",
	  "name": "_owner",
	  "type": "address"
	}
  ],
  "name": "OwnershipIsTransfered",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
	{
	  "indexed": false,
	  "internalType": "address",
	  "name": "triggerAddress",
	  "type": "address"
	}
  ],
  "name": "Paused",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
	{
	  "components": [
		{
		  "internalType": "uint256",
		  "name": "_index",
		  "type": "uint256"
		},
		{
		  "internalType": "address",
		  "name": "_address",
		  "type": "address"
		}
	  ],
	  "indexed": false,
	  "internalType": "struct SolnSquareVerifier.SolutionsStruct",
	  "name": "solutionsStruct",
	  "type": "tuple"
	}
  ],
  "name": "SolutionIsAdded",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
	{
	  "indexed": false,
	  "internalType": "uint256",
	  "name": "_index",
	  "type": "uint256"
	},
	{
	  "indexed": false,
	  "internalType": "address",
	  "name": "_address",
	  "type": "address"
	}
  ],
  "name": "SolutionsIsMinted",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
	{
	  "indexed": true,
	  "internalType": "address",
	  "name": "from",
	  "type": "address"
	},
	{
	  "indexed": true,
	  "internalType": "address",
	  "name": "to",
	  "type": "address"
	},
	{
	  "indexed": true,
	  "internalType": "uint256",
	  "name": "tokenId",
	  "type": "uint256"
	}
  ],
  "name": "Transfer",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
	{
	  "indexed": false,
	  "internalType": "address",
	  "name": "triggerAddress",
	  "type": "address"
	}
  ],
  "name": "Unpaused",
  "type": "event"
},
{
  "constant": true,
  "inputs": [
	{
	  "internalType": "bytes32",
	  "name": "_myid",
	  "type": "bytes32"
	},
	{
	  "internalType": "string",
	  "name": "_result",
	  "type": "string"
	}
  ],
  "name": "__callback",
  "outputs": [],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
	{
	  "internalType": "bytes32",
	  "name": "_myid",
	  "type": "bytes32"
	},
	{
	  "internalType": "string",
	  "name": "_result",
	  "type": "string"
	},
	{
	  "internalType": "bytes",
	  "name": "_proof",
	  "type": "bytes"
	}
  ],
  "name": "__callback",
  "outputs": [],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
	{
	  "internalType": "address",
	  "name": "to",
	  "type": "address"
	},
	{
	  "internalType": "uint256",
	  "name": "tokenId",
	  "type": "uint256"
	}
  ],
  "name": "approve",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
	{
	  "internalType": "address",
	  "name": "owner",
	  "type": "address"
	}
  ],
  "name": "balanceOf",
  "outputs": [
	{
	  "internalType": "uint256",
	  "name": "",
	  "type": "uint256"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
	{
	  "internalType": "uint256",
	  "name": "tokenId",
	  "type": "uint256"
	}
  ],
  "name": "getApproved",
  "outputs": [
	{
	  "internalType": "address",
	  "name": "",
	  "type": "address"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "getBaseTokenURI",
  "outputs": [
	{
	  "internalType": "string",
	  "name": "",
	  "type": "string"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "getName",
  "outputs": [
	{
	  "internalType": "string",
	  "name": "",
	  "type": "string"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "getOwner",
  "outputs": [
	{
	  "internalType": "address",
	  "name": "",
	  "type": "address"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "getSymbol",
  "outputs": [
	{
	  "internalType": "string",
	  "name": "",
	  "type": "string"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
	{
	  "internalType": "address",
	  "name": "owner",
	  "type": "address"
	},
	{
	  "internalType": "address",
	  "name": "operator",
	  "type": "address"
	}
  ],
  "name": "isApprovedForAll",
  "outputs": [
	{
	  "internalType": "bool",
	  "name": "",
	  "type": "bool"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
	{
	  "internalType": "address",
	  "name": "to",
	  "type": "address"
	},
	{
	  "internalType": "uint256",
	  "name": "tokenId",
	  "type": "uint256"
	}
  ],
  "name": "mint",
  "outputs": [
	{
	  "internalType": "bool",
	  "name": "",
	  "type": "bool"
	}
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
	{
	  "internalType": "uint256",
	  "name": "tokenId",
	  "type": "uint256"
	}
  ],
  "name": "ownerOf",
  "outputs": [
	{
	  "internalType": "address",
	  "name": "",
	  "type": "address"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
	{
	  "internalType": "address",
	  "name": "from",
	  "type": "address"
	},
	{
	  "internalType": "address",
	  "name": "to",
	  "type": "address"
	},
	{
	  "internalType": "uint256",
	  "name": "tokenId",
	  "type": "uint256"
	}
  ],
  "name": "safeTransferFrom",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
	{
	  "internalType": "address",
	  "name": "from",
	  "type": "address"
	},
	{
	  "internalType": "address",
	  "name": "to",
	  "type": "address"
	},
	{
	  "internalType": "uint256",
	  "name": "tokenId",
	  "type": "uint256"
	},
	{
	  "internalType": "bytes",
	  "name": "_data",
	  "type": "bytes"
	}
  ],
  "name": "safeTransferFrom",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
	{
	  "internalType": "address",
	  "name": "to",
	  "type": "address"
	},
	{
	  "internalType": "bool",
	  "name": "approved",
	  "type": "bool"
	}
  ],
  "name": "setApprovalForAll",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
	{
	  "internalType": "bool",
	  "name": "status",
	  "type": "bool"
	}
  ],
  "name": "setter",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
	{
	  "internalType": "bytes4",
	  "name": "interfaceId",
	  "type": "bytes4"
	}
  ],
  "name": "supportsInterface",
  "outputs": [
	{
	  "internalType": "bool",
	  "name": "",
	  "type": "bool"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
	{
	  "internalType": "uint256",
	  "name": "index",
	  "type": "uint256"
	}
  ],
  "name": "tokenByIndex",
  "outputs": [
	{
	  "internalType": "uint256",
	  "name": "",
	  "type": "uint256"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
	{
	  "internalType": "address",
	  "name": "owner",
	  "type": "address"
	},
	{
	  "internalType": "uint256",
	  "name": "index",
	  "type": "uint256"
	}
  ],
  "name": "tokenOfOwnerByIndex",
  "outputs": [
	{
	  "internalType": "uint256",
	  "name": "",
	  "type": "uint256"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
	{
	  "internalType": "uint256",
	  "name": "tokenId",
	  "type": "uint256"
	}
  ],
  "name": "tokenURI",
  "outputs": [
	{
	  "internalType": "string",
	  "name": "",
	  "type": "string"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [
	{
	  "internalType": "uint256",
	  "name": "",
	  "type": "uint256"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
	{
	  "internalType": "address",
	  "name": "from",
	  "type": "address"
	},
	{
	  "internalType": "address",
	  "name": "to",
	  "type": "address"
	},
	{
	  "internalType": "uint256",
	  "name": "tokenId",
	  "type": "uint256"
	}
  ],
  "name": "transferFrom",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
	{
	  "internalType": "address",
	  "name": "newOwner",
	  "type": "address"
	}
  ],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "verifier",
  "outputs": [
	{
	  "internalType": "contract Verifier",
	  "name": "",
	  "type": "address"
	}
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
	{
	  "internalType": "uint256",
	  "name": "_index",
	  "type": "uint256"
	},
	{
	  "internalType": "address",
	  "name": "_address",
	  "type": "address"
	}
  ],
  "name": "addSolution",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
	{
	  "internalType": "uint256",
	  "name": "_index",
	  "type": "uint256"
	},
	{
	  "internalType": "address",
	  "name": "_address",
	  "type": "address"
	}
  ],
  "name": "mintNewNFT",
  "outputs": [
	{
	  "internalType": "bool",
	  "name": "",
	  "type": "bool"
	}
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}
]

## Contract address on rinkeby.etherscan: https://rinkeby.etherscan.io/address/0x9a6e9809Dc26d9Fc44e0353cd230273E97E6925c
## Minting tokens
https://www.myetherwallet.com/interface/interact-with-contract

## OpenSea marketplace
https://testnets.opensea.io/assets/0x9a6e9809dc26d9fc44e0353cd230273e97e6925c/3
https://testnets.opensea.io/assets/0x9a6e9809dc26d9fc44e0353cd230273e97e6925c/6
https://testnets.opensea.io/assets/0x9a6e9809dc26d9fc44e0353cd230273e97e6925c/9
https://testnets.opensea.io/assets/0x9a6e9809dc26d9fc44e0353cd230273e97e6925c/12
https://testnets.opensea.io/assets/0x9a6e9809dc26d9fc44e0353cd230273e97e6925c/15

## Token Storefront on Opensea
https://testnets.opensea.io/collection/unidentified-contract-ruec4s7t7p



# Project Resources

* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
