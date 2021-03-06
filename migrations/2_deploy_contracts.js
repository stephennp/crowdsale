var StormToken = artifacts.require("./StormToken.sol");
var StormCrowdsale = artifacts.require("./StormCrowdsale.sol");

module.exports = function(deployer) {
  deployer.deploy(StormCrowdsale).then(function() {
    return deployer.deploy(StormToken, StormCrowdsale.address);
  });
};
