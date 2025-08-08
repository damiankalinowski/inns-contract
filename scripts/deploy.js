const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contract with:", deployer.address);

  const INNSToken = await hre.ethers.getContractFactory("INNSToken");
  const token = await INNSToken.deploy("0x3BaBBcDf6d29B28400AbbCf120E46b8658d3A77C");

  await token.waitForDeployment(); // zamiast deployed()
  console.log("INNS Token deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});