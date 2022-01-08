const ERC721Mintable = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', async (accounts) => {

    const account_zero = accounts[0];
    const account_one = accounts[1];
    const account_two = accounts[2];
    const account_three = accounts[3];

    const mintedCounter = 4;

    //const instance = null;

    const name = "PVM_ERC721Mintable";
    const symbol = "PVM_ERC721M";

    describe('match erc721 spec', function () {

        beforeEach(async function () {

            this.instance = await ERC721Mintable.new(name, symbol);
            
            //console.log('instance beforeEach -> ', this.instance);

            // TODO: mint multiple tokens
            //PVM 09/12/2021
            //this.contract.mint(accounts[2], 1);
            //this.contract.mint(accounts[3], 2);
            //this.contract.mint(accounts[4], 3);
            //this.contract.mint(accounts[5], 4); 

            
            for(let x = 0; x < mintedCounter; x++){
                //let minted = await this.instance.mint(accounts[x], x, { from : account_zero });
                await this.instance.mint(accounts[x], x, { from : account_zero });
                //console.log('minted -> ', minted);
            }
            

        });
        

        
        //PVM 09/12/2021
        it('should return total supply', async function () {
            const total = await this.instance.totalSupply();
            //console.log(total);
            assert.equal(total, mintedCounter, "total supply is incorrect");
        });
        
        //PVM 09/12/2021
        it('should get token balance', async function () {
            const balance = await this.instance.balanceOf(account_two);
            //console.log(balance);
            assert.equal(balance, 1, "token balance is incorrect");
        });
        
        //PVM 09/12/2021
        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            const tokenId = 2;
            const tokenURI = `https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/${tokenId}`;
            const URI = await this.instance.tokenURI(tokenId);
            //console.log(tokenURI);
            assert.equal(URI, tokenURI, "token uri is incorrect");
        });
        
        //PVM 09/12/2021
        it('should transfer token from one owner to another', async function () {
            const tokenId = 2;
            await this.instance.approve(account_zero, tokenId, { from : account_two });
            await this.instance.transferFrom(account_two, account_zero, tokenId, { from : account_two });
            
            const balance = await this.instance.balanceOf(account_zero);
            //console.log('balance -> ', balance);
            assert.equal(balance, 2, "the balance is incorrect");
        });
        
    });

    describe('have ownership properties', function () {
        
        beforeEach(async function () {
            this.instance = await ERC721Mintable.new(name, symbol);
        })

        
        //PVM 29/12/2021
        it('should fail when minting when address is not contract owner', async function () {
            let fail = false;
            const tokenId = 4;

            try{
                await this.instance.mint(account_zero, tokenId, { from : account_one });
            }catch(error) {
                    fail = true;
            }

            assert.equal(fail, true, "not the contract owner");   
        });
        
        //PVM 29/12/2021
        it('should return contract owner', async function () {
            const owner = await this.instance.getOwner();
            //console.log('owner -> ', owner);
            assert.equal(owner, account_zero, "not the contract owner");
        });        

    });
})