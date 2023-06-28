import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("TasGass", () => {
  it("Test", async () => {
    const Gas = await ethers.getContractFactory("TestGas");
    const gas = await Gas.deploy();
    gas.deployed();

    for (let i = 0; i < 10; ++i) {
      await gas.test1();
      await gas.test2();
      await gas.test3();
      await gas.test4();
      await gas.test5();
    }
  });
});
