require("@nomicfoundation/hardhat-verify");
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

module.exports = {
  solidity: "0.8.22",
  networks: {
    bsc: {
      url: "https://bsc-dataseed.binance.org",
      accounts: [process.env.PRIVATE_KEY.startsWith('0x') ? process.env.PRIVATE_KEY : `0x${process.env.PRIVATE_KEY}`],
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [process.env.PRIVATE_KEY.startsWith('0x') ? process.env.PRIVATE_KEY : `0x${process.env.PRIVATE_KEY}`],
    },
  },
  // Etherscan V2 (multichain) – jeden klucz dla wielu sieci (w tym BSC)
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  // (opcjonalnie) żeby nie spamował info o Sourcify
  sourcify: { enabled: false },
};