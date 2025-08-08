const { ethers, upgrades } = require("hardhat");

async function main() {
  const proxyAddress = "0x67b662BA5857dcba70CC44188f551415803D3e70"; // Twój stały proxy
  const INNSToken = await ethers.getContractFactory("INNSToken");

  const upgraded = await upgrades.upgradeProxy(proxyAddress, INNSToken);
  await upgraded.waitForDeployment();

  console.log("Proxy zaktualizowany:", await upgraded.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});