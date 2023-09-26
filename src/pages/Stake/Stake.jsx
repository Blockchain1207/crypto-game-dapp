import { useState } from "react";

import PageContainer from "components/PageContainer";
import Card from "components/Card";
import classes from "./Stake.module.css";

const Stake = () => {
  const [formState, setFormState] = useState({
    vestingDuration: 15,
    stakeVWINR: 0,
    stakewithdraw: 0,
    stake2VWINR: 0,
    stake2withdraw: 0,
    conversionvWINR: 0,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <PageContainer>
      <h4 className="mb-8">STAKE</h4>

      <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-6">
        <div className={classes.card1}>
          <div className="bg-background-3 rounded-2xl p-3 sm:p-6">
            <div className="flex items-center gap-4">
              <img src="/assets/imgs/stake/stake-1.png" alt="stake" />

              <div>
                <div className="text-grey-60 text-sm mb-2">StakedvWINR</div>
                <div className="text-xl font-bison">196,447,911</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.card2}>
          <div className="bg-background-3 rounded-2xl p-3 sm:p-6">
            <div className="flex items-center gap-4">
              <img src="/assets/imgs/stake/stake-2.png" alt="stake" />

              <div>
                <div className="text-grey-60 text-sm mb-2">Staked WINR</div>
                <div className="text-xl font-bison">53,195,682</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.card3}>
          <div className="bg-background-3 rounded-2xl p-3 sm:p-6">
            <div className="flex items-center gap-4">
              <img src="/assets/imgs/stake/stake-3.png" alt="stake" />

              <div>
                <div className="text-grey-60 text-sm mb-2">APR</div>
                <div className="text-xl font-bison">4.38%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.card4}>
          <div className="bg-background-3 rounded-2xl p-3 sm:p-6">
            <div className="flex items-center gap-4">
              <img src="/assets/imgs/stake/stake-4.png" alt="stake" />

              <div>
                <div className="text-grey-60 text-sm mb-2">Total Earned</div>
                <div className="text-xl font-bison">$ 430,507</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <Card roundedMd className="col-span-2 md:col-span-1 p-6 sm:p-12">
          <div className="font-bison text-xl mb-1">STAKE VWINR</div>
          <div className="text-grey-60 text-sm">
            Get 2x weight in the staking pool.
          </div>

          <div className="text-end text-sm font-bold mt-4">
            0 <span className="text-grey-60">vWINR</span>
          </div>

          <div className="border border-background-3 py-2 px-3 rounded-lg flex justify-between items-center text-base mt-2">
            <input
              className="flex-grow w-full bg-transparent border-0 outline-none"
              type="number"
              name="stakeVWINR"
              value={formState.stakeVWINR}
              onChange={inputChangeHandler}
            />
            <div className="flex flex-shrink-0 gap-1">
              <img src="/assets/vectors/stake/arrows.svg" alt="arrows" />
              <img src="/assets/imgs/common/degen.png" alt="degen" />
            </div>
          </div>

          <button className="text-sm xl:text-lg w-full h-12 rounded-lg bg-main-1 font-bison mt-4 transition-all hover:-translate-y-1">
            APPROVE AND STAKE
          </button>

          <div className="text-end text-sm font-bold mt-8 ">
            0 <span className="text-grey-60">vWINR</span>
          </div>

          <div className="border border-background-3 py-2 px-3 rounded-lg flex justify-between items-center text-base mt-2">
            <input
              className="flex-grow w-full bg-transparent border-0 outline-none"
              type="number"
              name="stakewithdraw"
              value={formState.stakewithdraw}
              onChange={inputChangeHandler}
            />
            <div className="flex flex-shrink-0 gap-1">
              <img src="/assets/vectors/stake/arrows.svg" alt="arrows" />
              <img src="/assets/imgs/common/degen.png" alt="degen" />
            </div>
          </div>

          <div className="my-4 text-base text-grey-60">
            Burn Fee: <span className="text-white">0.5%</span>
          </div>

          <button className="w-full font-bison border border-grey-60 text-grey-60 rounded-lg h-12 transition-all hover:-translate-y-1">
            WITHDRAW
          </button>
        </Card>
        <Card roundedMd className="col-span-2 md:col-span-1 p-6 sm:p-12">
          <div className="font-bison text-xl mb-1">STAKE VWINR</div>
          <div className="text-grey-60 text-sm">
            Get 2x weight in the staking pool.
          </div>

          <div className="text-end text-sm font-bold mt-4">
            0 <span className="text-grey-60">vWINR</span>
          </div>

          <div className="border border-background-3 py-2 px-3 rounded-lg flex justify-between items-center text-base mt-2">
            <input
              className="flex-grow w-full bg-transparent border-0 outline-none"
              type="number"
              name="stake2VWINR"
              value={formState.stake2VWINR}
              onChange={inputChangeHandler}
            />
            <div className="flex flex-shrink-0 gap-1">
              <img src="/assets/vectors/stake/arrows.svg" alt="arrows" />
              <img src="/assets/imgs/common/degen.png" alt="degen" />
            </div>
          </div>

          <button className="text-sm xl:text-lg w-full h-12 rounded-lg bg-main-1 font-bison mt-4 transition-all hover:-translate-y-1">
            APPROVE AND STAKE
          </button>

          <div className="text-end text-sm font-bold mt-8 ">
            0 <span className="text-grey-60">vWINR</span>
          </div>

          <div className="border border-background-3 py-2 px-3 rounded-lg flex justify-between items-center text-base mt-2">
            <input
              className="flex-grow w-full bg-transparent border-0 outline-none"
              type="number"
              name="stake2withdraw"
              value={formState.stake2withdraw}
              onChange={inputChangeHandler}
            />
            <div className="flex flex-shrink-0 gap-1">
              <img src="/assets/vectors/stake/arrows.svg" alt="arrows" />
              <img src="/assets/imgs/common/degen.png" alt="degen" />
            </div>
          </div>

          <div className="my-4 text-base text-grey-60">
            Burn Fee: <span className="text-white">0.5%</span>
          </div>

          <button className="w-full font-bison border border-grey-60 text-grey-60 rounded-lg h-12 transition-all hover:-translate-y-1">
            WITHDRAW
          </button>
        </Card>
        <Card roundedMd className="pt-0 p-6 sm:p-12 col-span-2 lg:col-span-1">
          <div className="flex justify-center">
            <img src="/assets/imgs/stake/crown.png" alt="crown" />
          </div>

          <div className="font-bison text-xl text-center mt-6 mb-4">
            REWARDS
          </div>

          <div className="bg-background-3 rounded-lg py-2 px-3 flex justify-between items-center mb-2">
            <div className="text-base">Total Earned</div>
            <div>
              <div className="text-grey-10 text-base text-end mb-2">$0</div>
              <div className="flex gap-1">
                <div className="text-grey-10 text-base">0</div>
                <img src="/assets/imgs/common/degen.png" alt="degen" />
              </div>
            </div>
          </div>
          <div className="bg-background-3 rounded-lg py-2 px-3 flex justify-between items-center mb-4">
            <div className="text-base">Claimable</div>
            <div>
              <div className="text-grey-10 text-base text-end mb-2">$0</div>
              <div className="flex gap-1">
                <div className="text-grey-10 text-base">0</div>
                <img src="/assets/imgs/common/degen.png" alt="degen" />
              </div>
            </div>
          </div>

          <button className="text-base font-bison h-12 rounded-lg bg-grey-60 w-full transition-transform hover:-translate-y-1 pointer-events-none">
            CLAIM
          </button>
        </Card>
        <Card roundedMd className="p-6 sm:p-12 col-span-2">
          <div className="font-bison text-xl mb-1">VESTING</div>
          <div className="text-grey-60 text-sm">
            Vested vWINR is entitled to 50% of the real yield.
          </div>

          <div className="mt-4 bg-background-3 rounded-xl py-3 px-6 flex flex-wrap gap-6 justify-between items-center">
            <div>
              <div className="text-grey-60 text-sm">Min. Vesting</div>
              <div clas sName="text-grey-10 text-sm">
                15 days
              </div>
            </div>
            <div className="text-grey-60 text-sm">
              Max. Vesting
              <div clas sName="text-grey-10 text-sm">
                180 days
              </div>
            </div>
            <div>
              <div className="text-grey-60 text-sm">Min. Ratio</div>
              <div clas sName="text-grey-10 text-sm">
                %50
              </div>
            </div>
            <div>
              <div className="text-grey-60 text-sm">Max. Ratio</div>
              <div clas sName="text-grey-10 text-sm">
                %100
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-auto">
            <table className="w-full min-w-[630px]">
              <thead>
                <tr>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                    vWINR Input
                  </th>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                    vWINR Output
                  </th>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                    TIme Left
                  </th>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 border-b border-solid border-background-3 text-center">
                    Cancel/Redeem
                  </th>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 border-b border-solid border-background-3 text-end">
                    Rewards
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 text-base font-bold text-start px-3">
                    0
                  </td>
                  <td className="py-2 text-base font-bold px-3">0</td>
                  <td className="py-2 text-base font-bold px-3">03h27m39s</td>
                  <td className="py-2 text-base font-bold text-center">
                    Cancel
                  </td>
                  <td className="py-2 text-base font-bold text-end px-3">
                    100
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-base font-bold text-start px-3">
                    0
                  </td>
                  <td className="py-2 text-base font-bold px-3">0</td>
                  <td className="py-2 text-base font-bold px-3">03h27m39s</td>
                  <td className="py-2 text-base font-bold text-center">
                    Redeem
                  </td>
                  <td className="py-2 text-base font-bold text-end px-3">
                    100
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
        <Card roundedMd className="p-6 sm:p-12 col-span-2 lg:col-span-1">
          <div className="text-xl font-bison">CONVERSION</div>
          <div className="flex gap-3 items-center mt-3 ">
            <div className="text-base font-bold">vWINR</div>
            <div className="w-6 h-6 bg-grey-60 rounded-[50%] flex justify-center items-center">
              <img src="/assets/vectors/stake/transfer.svg" alt="transfer" />
            </div>
            <div className="text-base font-bold">vWINR</div>
          </div>
          <div className="text-grey-60 text-sm mt-2 ">
            Customize your vesting schedule.
          </div>

          <div className="text-end text-sm font-bold mt-8 ">
            0 <span className="text-grey-60">vWINR</span>
          </div>

          <div className="border border-background-3 py-2 px-3 rounded-lg flex justify-between items-center text-base mt-2">
            <input
              className="flex-grow w-full bg-transparent border-0 outline-none"
              type="number"
              name="conversionvWINR"
              value={formState.conversionvWINR}
              onChange={inputChangeHandler}
            />
            <div className="flex gap-1">
              <img src="/assets/vectors/stake/arrows.svg" alt="arrows" />
              <img src="/assets/imgs/common/degen.png" alt="degen" />
            </div>
          </div>

          <div className="mt-8">
            <div className="text-grey-60 font-bold text-sm">
              Vesting Duration
            </div>

            <div className="border border-background-3 py-2 px-3 rounded-lg flex justify-between items-center text-base mt-2">
              <input
                className="flex-grow w-full bg-transparent border-0 outline-none"
                type="number"
                name="vestingDuration"
                value={formState.vestingDuration}
                onChange={inputChangeHandler}
              />
              <div className="text-grey-60 font-bold text-base">Days</div>
            </div>

            <div className="text-grey-60 font-bold text-base mt-4">
              Redeem Percentage: <span className="text-white">0%</span>
            </div>
            <div className="text-grey-60 font-bold text-base mt-4 flex items-center gap-2">
              Redeemable WINR: <span className="text-white">0%</span>{" "}
              <img src="/assets/imgs/common/degen.png" alt="degen" />
            </div>

            <button className="w-full font-bison border border-grey-60 text-grey-60 text-sm sm:text-lg rounded-lg h-12 transition-all hover:-translate-y-1 mt-4">
              Approve and vest
            </button>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};

export default Stake;
