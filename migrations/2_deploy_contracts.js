const ERCToken  = artifacts.require("ERCToken")

module.exports = async (deployer) => {

  await deployer.deploy(ERCToken)

};
