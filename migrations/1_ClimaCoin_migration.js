const ClimaCoin = artifacts.require("./ClimaCoin.sol");

module.exports = function (deployer) {
  deployer.deploy(ClimaCoin, "ClimaCoin", "CC");
};
