# INNS Contracts

Upgradable ERC20 (UUPS) z rolami admin/pauser/upgrader/burner przypisanymi do multisiga (Safe).

## Adresy

### BSC Mainnet
- Proxy: 0x1BaADC71A4de933002Ca0c11677d0901CBc9d1B2  
  https://bscscan.com/address/0x1BaADC71A4de933002Ca0c11677d0901CBc9d1B2#readProxyContract  
- Implementation: 0x104d6929e4E5fDa23AC5003289fC16f8B5C8DB80  
  https://bscscan.com/address/0x104d6929e4E5fDa23AC5003289fC16f8B5C8DB80#code  
- Multisig: 0x3BaBBcDf6d29B28400AbbCf120E46b8658d3A77C  
- Deployer: 0x2c7707D789d2d9F245b99A539b5F26B23dbC48E4

### BSC Testnet
- Proxy: 0x17234a16c4AA3cf2330F779Ca602B6B430D96842  
  https://testnet.bscscan.com/address/0x17234a16c4AA3cf2330F779Ca602B6B430D96842#readProxyContract  
- Implementation: 0x335a54a91F4B99fe4A99526C86A31bF5820fd0D5  
  https://testnet.bscscan.com/address/0x335a54a91F4B99fe4A99526C86A31bF5820fd0D5#code

## Quick start
npm i && npx hardhat compile

## Deploy (przykład)
npx hardhat run scripts/deploy_proxy.js --network bsc

## Verify
Implementation:
npx hardhat verify --network bsc 0x104d6929e4E5fDa23AC5003289fC16f8B5C8DB80

Proxy:
npx hardhat verify --network bsc --contract @openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol:ERC1967Proxy 0x1BaADC71A4de933002Ca0c11677d0901CBc9d1B2 0x104d6929e4E5fDa23AC5003289fC16f8B5C8DB80 0xc4d66de80000000000000000000000003babbcdf6d29b28400abbcf120e46b8658d3a77c

## Role
Wszystkie role krytyczne -> multisig.

## Addresses

**BSC Mainnet**
- Proxy: `0x1BaADC71A4de933002Ca0c11677d0901CBc9d1B2`
- Implementation: `0x104d6929e4E5fDa23AC5003289fC16f8B5C8DB80` (✅ verified)
- Multisig (treasury/admin): `0x3BaBBcDf6d29B28400AbbCf120E46b8658d3A77C`

**BSC Testnet**
- Proxy: `0x17234a16c4AA3cf2330F779Ca602B6B430D96842`
- Implementation: `0x335a54a91F4B99fe4A99526C86A31bF5820fd0D5` (✅ verified)
- Multisig: `0x3BaBBcDf6d29B28400AbbCf120E46b8658d3A77C`

**BscScan**
- Mainnet impl: https://bscscan.com/address/0x104d6929e4E5fDa23AC5003289fC16f8B5C8DB80#code
- Mainnet proxy: https://bscscan.com/address/0x1BaADC71A4de933002Ca0c11677d0901CBc9d1B2
- Testnet impl: https://testnet.bscscan.com/address/0x335a54a91F4B99fe4A99526C86A31bF5820fd0D5#code
- Testnet proxy: https://testnet.bscscan.com/address/0x17234a16c4AA3cf2330F779Ca602B6B430D96842

## Addresses

**BSC Mainnet**
- Proxy: `0x1BaADC71A4de933002Ca0c11677d0901CBc9d1B2`
- Implementation: `0x104d6929e4E5fDa23AC5003289fC16f8B5C8DB80` (✅ verified)
- Multisig (treasury/admin): `0x3BaBBcDf6d29B28400AbbCf120E46b8658d3A77C`

**BSC Testnet**
- Proxy: `0x17234a16c4AA3cf2330F779Ca602B6B430D96842`
- Implementation: `0x335a54a91F4B99fe4A99526C86A31bF5820fd0D5` (✅ verified)
- Multisig: `0x3BaBBcDf6d29B28400AbbCf120E46b8658d3A77C`

**BscScan**
- Mainnet impl: https://bscscan.com/address/0x104d6929e4E5fDa23AC5003289fC16f8B5C8DB80#code
- Mainnet proxy: https://bscscan.com/address/0x1BaADC71A4de933002Ca0c11677d0901CBc9d1B2
- Testnet impl: https://testnet.bscscan.com/address/0x335a54a91F4B99fe4A99526C86A31bF5820fd0D5#code
- Testnet proxy: https://testnet.bscscan.com/address/0x17234a16c4AA3cf2330F779Ca602B6B430D96842
