import clsx from "clsx";
import { useState } from "react";

import Card from "components/Card";
import classes from "../Referral.module.css";

const ReferralCodesInfo = () => {
  const [formState, setFormState] = useState({
    clamiReferral: 0,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <h4 className="mb-8 ">
        EARN REBATES FROM{" "}
        <span className="text-main-2 font-bison">REFERRALS</span>
      </h4>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className={classes.card1}>
          <div className="bg-background-3 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <img src="/assets/imgs/stake/stake-1.png" alt="stake" />

              <div>
                <div className="text-grey-60 text-sm mb-2">
                  Total Players Referred
                </div>
                <div className="text-xl font-bison">0 Players</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.card2}>
          <div className="bg-background-3 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <img src="/assets/imgs/stake/stake-2.png" alt="stake" />

              <div>
                <div className="text-grey-60 text-sm mb-2">
                  Total Edge Volume
                </div>
                <div className="text-xl font-bison">$ 0 </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.card3}>
          <div className="bg-background-3 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <img src="/assets/imgs/referral/referral-3.png" alt="referral" />

              <div>
                <div className="text-grey-60 text-sm mb-2">Total Rebates</div>
                <div className="text-xl font-bison">$ 0</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <Card roundedMd className="px-6 sm:px-12 py-8">
          <div className="flex flex-wrap justify-between items-center gap-6">
            <div className="text-xl font-bison">Your Referral codes</div>
            <button className="h-12 rounded-lg px-6 font-bison bg-main-1 transition-transform hover:-translate-y-1">
              CREATE
            </button>
          </div>

          <table className="w-full mt-12">
            <thead>
              <tr>
                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                  Referral Code
                </th>
                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                  WINR Output
                </th>
                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                  Rewards
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 text-base font-bold text-start px-3">-</td>
                <td className="py-2 text-base font-bold px-3">0</td>
                <td className="py-2 text-base font-bold px-3">0</td>
              </tr>
              <tr>
                <td className="py-2 text-base font-bold text-start px-3">-</td>
                <td className="py-2 text-base font-bold px-3">0</td>
                <td className="py-2 text-base font-bold px-3">0</td>
              </tr>
            </tbody>
          </table>
        </Card>
        <Card roundedMd className="px-6 sm:px-12 py-8">
          <div className="flex gap-6 flex-col justify-between h-full">
            <div>
              <div className="text-xl font-bison mb-1">
                Enter Referral Code{" "}
              </div>
              <div className="text-grey-60 text-sm">
                Please input a referral code to benefit the increasing vWINR
                minting rate
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  className="w-full h-12 rounded-lg bg-background-3 border-0 outline-none p-3 text-base"
                  type="text"
                />
                <img
                  className="absolute top-1/2 -translate-y-1/2 right-3"
                  src="/assets/vectors/stake/tick.svg"
                  alt="tick"
                />
              </div>

              <div className="flex gap-2 text-grey-60 text-sm mt-2">
                Your vWINR Minting Rate: <span>5%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card
        className={clsx(classes.card7, "mt-8 py-6 px-6 sm:px-12 ")}
        roundedMd
      >
        <div className="bg-background-2 rounded-3xl flex flex-col lg:flex-row items-center gap-6 justify-between">
          <div className="font-bison text-xl ">Claim Rebates</div>
          <div className="text-sm text-grey-60">
            Rewards become available for claim every 24 hours, at 3 PM UTC.
          </div>
          <div className="flex-col sm:flex-row flex flex-shrink-0 items-end gap-8">
            <div className="sm:w-52">
              <div className="flex justify-between items-center mb-2">
                <div className="text-grey-60 text-sm">Rewards</div>
                <div className="text-white text-sm">$0</div>
              </div>

              <div className="bg-background-3 rounded-lg p-3 flex justify-between items-center relative">
                <input
                  className="bg-transparent border-0 outline-none "
                  type="number"
                  name="clamiReferral"
                  value={formState.clamiReferral}
                  onChange={inputChangeHandler}
                />
                <img
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  src="/assets/imgs/common/degen.png"
                  alt="degen"
                />
              </div>
            </div>
            <button className="flex-shrink-0 h-12 text-base rounded-lg px-6 font-bison bg-main-1 transition-transform hover:-translate-y-1">
              CLAIM REBATE
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ReferralCodesInfo;
