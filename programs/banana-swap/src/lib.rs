use anchor_lang::prelude::*;

declare_id!("3Zg1z6Yfuv4vAkVcm1j3jxhb1QqF3DPzn7uaf3jeNqwo");

#[program]
pub mod banana_swap {
    use super::*;

    pub fn swap(ctx: Context<Swap>, amount_in: u64, amount_out: u64) -> Result<()> {
        emit!(SwapEvent {
            market: ctx.accounts.market.key(),
            amount_in,
            amount_out
        });

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Swap<'info> {
    /// CHECK: A market account
    pub market: UncheckedAccount<'info>,
}

#[event]
#[derive(Debug)]
struct SwapEvent {
    market: Pubkey,
    amount_in: u64,
    amount_out: u64,
}
