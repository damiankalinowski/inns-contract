// hardhat.config.js
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-verify");

// --- klucze/konfiguracja z .env ---
const RAW_PK = (process.env.PRIVATE_KEY || "").trim();
const ACCOUNTS = RAW_PK
  ? [RAW_PK.startsWith("0x") ? RAW_PK : `0x${RAW_PK}`]
  : []; // w CI bez klucza nie wywali się compile

module.exports = {
  solidity: {
    version: "0.8.22",
    settings: {
      optimizer: { enabled: true, runs: 200 },
      // viaIR: false // (domyślnie off – zgodne z OZ UUPS)
    },
  },

  networks: {
    // BNB Smart Chain – mainnet
    bsc: {
      chainId: 56,
      url: "https://bsc-dataseed.binance.org",
      accounts: ACCOUNTS,
    },
    // BNB Smart Chain – testnet
    bsctestnet: {
      chainId: 97,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: ACCOUNTS,
    },
  },

  // Etherscan v2 (multi-chain). Ten sam klucz działa dla BSC (BscScan).
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "",
    // customChains nie jest potrzebny dla BSC w verify v2
  },

  sourcify: { enabled: false },

  mocha: { timeout: 60000 },
};
