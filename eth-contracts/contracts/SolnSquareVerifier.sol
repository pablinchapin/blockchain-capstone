// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <=0.9.0;
pragma experimental ABIEncoderV2;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./verifier.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
import "./ERC721Mintable.sol";
//is CustomERC721Token, Verifier {
contract SolnSquareVerifier is CustomERC721Token {

    
    constructor (
                    string memory name,
                    string memory symbol
                )
                CustomERC721Token   (
                                        name,
                                        symbol
                                    )
                public
    {

    }
    

    //PVM 07/01/2021
    // TODO define a solutions struct that can hold an index & an address
    struct SolutionsStruct {
        uint256 _index;
        address _address;
    }

    //PVM 07/01/2021
    // TODO define an array of the above struct
    SolutionsStruct[] solutions;

    //PVM 07/01/2021
    // TODO define a mapping to store unique solutions submitted
    mapping(uint256 => SolutionsStruct) submittedSolutions;

    //PVM 07/01/2021
    // TODO Create an event to emit when a solution is added
    //event SolutionIsAdded(uint256 _index, address _address);
    event SolutionIsAdded(SolutionsStruct solutionsStruct);

    //PVM 07/01/2021
    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution    (
                            uint256 _index,
                            address _address
                            )
                            public
    {
        /*
        require(
                !submittedSolutions[_index].address == _address,
                'Solution already added'
        );
        */
        SolutionsStruct memory solutionStruct = SolutionsStruct( _index, _address );
        solutions.push(solutionStruct);
        submittedSolutions[_index] = solutionStruct;

        emit SolutionIsAdded(solutionStruct);
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly

    

}