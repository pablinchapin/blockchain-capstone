// migrating the appropriate contracts
// PVM var SquareVerifier = artifacts.require("./SquareVerifier.sol");
const Verifier = artifacts.require("./verifier.sol");
const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {

  const name = "PVM_ERC721Mintable";
  const symbol = "PVM_ERC721M";

  // PVM deployer.deploy(SquareVerifier);
  deployer.deploy(Verifier);
  deployer.deploy(SolnSquareVerifier, name, symbol);
  
};
