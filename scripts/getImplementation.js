// scripts/getImplementation.js
const { upgrades } = require("hardhat");

async function main() {
  const proxy = process.env.PROXY_ADDRESS;
  if (!proxy) throw new Error("Ustaw PROXY_ADDRESS w .env");

  const impl = await upgrades.erc1967.getImplementationAddress(proxy);
  console.log("Implementation:", impl);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});