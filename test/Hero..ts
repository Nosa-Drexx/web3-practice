import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hero", () => {
  async function createHero() {
    const Hero = await ethers.getContractFactory("TestHero");
    const hero = await Hero.deploy();
    await hero.deployed();

    return hero;
  }

  let hero;

  before(async function () {
    hero = await createHero();
  });

  it("should get a zero hero array", async () => {
    expect(await hero.getHeroes()).to.deep.equal([]);
  });

  it("should fail at creating hero because of payment", async () => {
    const hero = await createHero();

    await hero.setRandom(69);
    await hero.createHero(0, {
      value: ethers.utils.parseEther("0.05"),
    });

    const heroes = (await hero.getHeroes())[0];

    expect(await hero.getMagic(heroes)).to.equal(16);
    expect(await hero.getHealth(heroes)).to.equal(2);
  });
});
