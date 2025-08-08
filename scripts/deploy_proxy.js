// scripts/deploy_proxy.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const multisig = process.env.SAFE_ADDRESS || "0x3BaBBcDf6d29B28400AbbCf120E46b8658d3A77C"; // <-- jeśli nie dasz w .env, użyje tego
  if (!multisig) throw new Error("Brak SAFE_ADDRESS w .env");

  const [deployer] = await ethers.getSigners();
  console.log("➡️  Network:", (await ethers.provider.getNetwork()).name);
  console.log("➡️  Deployer:", deployer.address);
  console.log("➡️  Safe (treasury/admin):", multisig);

  const INNSToken = await ethers.getContractFactory("INNSToken");
  const proxy = await upgrades.deployProxy(
    INNSToken,
    [multisig],                // initialize(multisig)
    { initializer: "initialize" }
  );

  await proxy.waitForDeployment();
  const proxyAddress = await proxy.getAddress();

  console.log("✅ INNS Token (Proxy) deployed to:", proxyAddress);

  // pokaż implementation )do verify)
  const impl = await upgrades.erc1967.getImplementationAddress(proxyAddress);
  console.log("🔧 Implementation:", impl);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});