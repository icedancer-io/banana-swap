import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { BananaSwap } from "../target/types/banana_swap";
import { BN } from "bn.js";

describe("banana-swap", () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.BananaSwap as Program<BananaSwap>;

  it("Swap", async () => {
    const market = new anchor.web3.PublicKey('EGZ7tiLeH62TPV1gL8WwbXGzEPa9zmcpVnnkPKKnrE2U')

    await program.methods.swap(new BN(1000), new BN(100)).accounts({
      market
    }).rpc();

    await program.methods.swap(new BN(1000), new BN(200)).accounts({
      market
    }).rpc();

    await program.methods.swap(new BN(1000), new BN(300)).accounts({
      market
    }).rpc();
  });
});
