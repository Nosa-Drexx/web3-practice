import "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";

async function deploy() {
  const counter = await ethers.getContractFactory("Counter");
  const deployCounter = await counter.deploy();
  await deployCounter.deployed();

  return deployCounter;
}

async function count(counter) {
  await counter.count();
  console.log("Counter", await counter.getCounter());
}

deploy().then(count);
