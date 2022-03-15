import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Nft = await ethers.getContractFactory("TASKNFT");
  const nft = await Nft.deploy("ipfs://QmbyUfWA5fuedutDAJ5CPs4ujVAfhPhn2Hi1URhAPwYJM7/");

  await nft.deployed();

  console.log("nft deployed to:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});