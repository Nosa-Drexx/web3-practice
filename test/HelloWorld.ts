import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", ()=> {
    it("should get the hello world", async () => {
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const hello = await HelloWorld.deploy();
        hello.deployed();

        expect(await hello.hello()).to.equal("Hello, World");
    });
})