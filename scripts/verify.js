// scripts/verify.js
const hre = require("hardhat");

async function main() {
  const impl = process.env.IMPLEMENTATION_ADDRESS;
  if (!impl) throw new Error("Ustaw IMPLEMENTATION_ADDRESS w .env");
  await hre.run("verify:verify", { address: impl });
  console.log("✅ Verified implementation:", impl);
}
main().catch((e) => { console.error(e); process.exit(1); });