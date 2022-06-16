const BatteryChain = artifacts.require("./BatteryChain.sol");

module.exports = function (deployer) {
  deployer.deploy(BatteryChain, "LGTM");
};
