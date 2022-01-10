//PVM 07/01/2021
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const Verifier = artifacts.require('Verifier');

const proofJson = require('./../../zokrates/code/square/proof.json');

contract('TestSolnSquareVerifier', async (accounts) => {

    const account_zero = accounts[0];
    const account_one = accounts[1];

    const name = "PVM_ERC721Mintable";
    const symbol = "PVM_ERC721M";

    let solnSquareVerifierInstance;
    let verifierInstance;

    before('Test setup', async() => {
        solnSquareVerifierInstance = await SolnSquareVerifier.new(name, symbol);
        verifierInstance = await Verifier.new( { from : account_zero } );
    })


    describe('Test SolnSquareVerifier', function () {

        //console.log('account_zero -> ', account_zero);
        //console.log('account_one -> ', account_one);

        beforeEach(async function () {
            //this.solnSquareVerifierInstance = await SolnSquareVerifier.new(name, symbol);
            //this.verifierInstance = await Verifier.new( { from : account_zero } );
        });

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it(`Test if a new solution can be added for contract`, async function () {
            const tokenId = 1;
            let transaction = await solnSquareVerifierInstance.addSolution(tokenId, account_zero);
            //console.log("transaction -> ", transaction);
            assert.equal(transaction.logs[0].event, "SolutionIsAdded", "solution can be added for contract");
        });

        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it(`Test if an ERC721 token can be minted for contract`, async function () {
            const tokenId = 2;
            let minted = true;
            let transaction;

            try{
                //let transaction = await solnSquareVerifierInstance.mintNewNFT(tokenId, account_zero);
                transaction = await solnSquareVerifierInstance.mintNewNFT(
                    tokenId, 
                    account_zero
                    //proofJson.proof,
                    //proofJson.inputs
                );
            }catch(error){
                    console.log('error -> ', error);
                    minted = false;
            }
            
            
            //assert.equal(true, true, "ERC721 token can be minted");
            //assert.equal(transaction.logs[0].event, "SolutionsIsMinted", "ERC721 token can be minted");
            assert.equal(transaction.logs[0].event, "SolutionIsAdded", "solution can be added for contract");
            assert.equal(true, minted, "ERC721 token can be minted");
        });

    });

    

});