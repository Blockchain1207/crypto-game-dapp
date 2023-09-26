import Card from "components/Card";
import PageContainer from "components/PageContainer";

import classes from "./Dashboard.module.css";
import clsx from "clsx";
import Dropdown from "components/Dropdown";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";

const Dasboard = () => {
  return (
    <PageContainer>
      <h4 className="mb-8">Dashboard</h4>

      <Card className="p-8" roundedLg>
        <div className="grid sm:grid-cols-gamesGrid 2xl:grid-cols-5 gap-6">
          <div className="min-h-[132px] flex items-center p-6">
            <div>
              <div className="text-sm text-grey-60 mb-2">TODAY'S ROUND</div>
              <div className="font-bison text-xl">EPOCH #111</div>
            </div>
          </div>
          <div className={classes.card1}>
            <div className="min-h-[132px] flex items-center p-6 bg-background-3 rounded-2xl relative">
              <div>
                <div className="text-sm text-grey-60 mb-2">
                  MINING MULTIPLIER
                </div>
                <div className="font-bison text-xl">0.28x</div>

                <img
                  className="absolute right-5 bottom-0"
                  src="/assets/imgs/dashboard/mining.png"
                  alt="mining"
                />
              </div>
            </div>
          </div>
          <div className={classes.card2}>
            <div className="min-h-[132px] flex items-center p-6 bg-background-3 rounded-2xl relative">
              <div>
                <div className="text-sm text-grey-60 mb-2">VOLUME CHANGE</div>
                <div className="flex items-center gap-4">
                  <div className="font-bison text-xl">6.25%</div>
                  <img
                    src="/assets/vectors/dashboard/chart-up.svg"
                    alt="chart"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.card3}>
            <div className="min-h-[132px] flex items-center p-6 bg-background-3 rounded-2xl relative">
              <div>
                <div className="text-sm text-grey-60 mb-2">
                  BRIBE MULTIPLIER
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-bison text-xl">0.0124X</div>
                  <img
                    src="/assets/vectors/dashboard/chart-up.svg"
                    alt="chart"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.card4}>
            <div className="min-h-[132px] flex items-center p-6 bg-background-3 rounded-2xl relative">
              <div>
                <div className="text-sm text-grey-60 mb-2">DLP CHANGE</div>
                <div className="flex items-center gap-4">
                  <div className="font-bison text-xl">0.01</div>
                  <img
                    src="/assets/vectors/dashboard/chart-down.svg"
                    alt="chart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <div className={clsx(classes.card5, " sm:w-auto")}>
            <div className="p-6 bg-background-2 rounded-2xl">
              <div className="mb-8 flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 sm:items-center">
                <div className="flex items-center gap-2">
                  <img src="/assets/imgs/common/degen.png" alt="degen" />
                  <div className="font-bison">DEGEN</div>
                  <img
                    src="/assets/vectors/topbar/chevron-down.svg"
                    alt="chevron"
                  />
                </div>
                <div>
                  <div className="my-2 sm:my-0 flex flex-col sm:block text-grey-60 text-sm">
                    Supply
                    <span className="text-white font-bold sm:mx-2">
                      186,702,751
                    </span>
                    ($7,542,501)
                  </div>
                  <div className="my-2 sm:my-0 flex flex-col sm:block text-grey-60 text-sm">
                    Staked
                    <span className="text-white font-bold sm:mx-2">
                      53,195,681
                    </span>
                    ($2,149,023)
                  </div>
                  <div className="my-2 sm:my-0 flex flex-col sm:block text-grey-60 text-sm">
                    Burned
                    <span className="text-white font-bold sm:mx-2">
                      65,951,130.71
                    </span>
                    ($2,664,323)
                  </div>
                </div>
              </div>

              <div className="w-full h-5 rounded-full bg-dardModeContent-3 overflow-hidden">
                <div className="h-full w-2/5 bg-main-2"></div>
              </div>
            </div>
          </div>
          <div className={clsx(classes.card6, " sm:w-auto")}>
            <div className="p-6 bg-background-2 rounded-2xl">
              <div className="mb-8 flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 sm:items-center">
                <div className="flex items-center gap-2">
                  <img src="/assets/imgs/common/degen.png" alt="degen" />
                  <div className="font-bison">DEGEN</div>
                  <img
                    src="/assets/vectors/topbar/chevron-down.svg"
                    alt="chevron"
                  />
                </div>
                <div>
                  <div className="my-2 sm:my-0 flex flex-col sm:block text-grey-60 text-sm">
                    Supply
                    <span className="text-white font-bold sm:mx-2">
                      186,702,751
                    </span>
                    ($7,542,501)
                  </div>
                  <div className="my-2 sm:my-0 flex flex-col sm:block text-grey-60 text-sm">
                    Staked
                    <span className="text-white font-bold sm:mx-2">
                      53,195,681
                    </span>
                    ($2,149,023)
                  </div>
                  <div className="my-2 sm:my-0 flex flex-col sm:block text-grey-60 text-sm">
                    Minted
                    <span className="text-white font-bold sm:mx-2">41.22%</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-5 rounded-full bg-dardModeContent-3 overflow-hidden">
                <div className="h-full w-4/5 bg-main-2"></div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className={clsx(classes.card7, "mt-6")} roundedMd>
        <div className="bg-background-2 rounded-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-2 px-3">
            <div className="p-6 text-center relative after:absolute after after:bg-background-3 after:h-[60px] after:w-[1px] after:-right-6 after:top-1/2 after:-translate-y-1/2">
              <div className="text-grey-60 text-sm mb-1">VOLUME</div>
              <div className="font-bison">$61,907,253</div>
            </div>
            <div className="p-6 text-center relative after:absolute after after:bg-background-3 after:h-[60px] after:w-[1px] after:-right-6 after:top-1/2 after:-translate-y-1/2">
              <div className="text-grey-60 text-sm mb-1">WLP PROFIT</div>
              <div className="font-bison">$219,540</div>
            </div>
            <div className="p-6 text-center relative after:absolute after after:bg-background-3 after:h-[60px] after:w-[1px] after:-right-6 after:top-1/2 after:-translate-y-1/2">
              <div className="text-grey-60 text-sm mb-1">USERS</div>
              <div className="font-bison">1244</div>
            </div>
            <div className="p-6 text-center relative after:absolute after after:bg-background-3 after:h-[60px] after:w-[1px] after:-right-6 after:top-1/2 after:-translate-y-1/2">
              <div className="text-grey-60 text-sm mb-1">USERS WON</div>
              <div className="font-bison">$3,122,480</div>
            </div>
            <div className="p-6 text-center relative after:absolute after after:bg-background-3 after:h-[60px] after:w-[1px] after:-right-6 after:top-1/2 after:-translate-y-1/2">
              <div className="text-grey-60 text-sm mb-1">USER WIN RATE</div>
              <div className="font-bison">34.65%</div>
            </div>
            <div className="p-6 text-center">
              <div className="text-grey-60 text-sm mb-1">BETS</div>
              <div className="font-bison">4,178,186</div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Card className="p-6" roundedMd>
          <div className="flex justify-between flex-col lg:flex-row items-start gap-6 lg:gap-0 lg:items-center">
            <div>
              <div className="text-grey-60 text-sm font-bold">
                DEGEN LIQ POOL
                <span className="text-white ms-1">(WEEK 30 - WEEK 36)</span>
              </div>
              <div className="mt-1 text-white text-xl font-bison">
                $3,195,681
              </div>
            </div>
            <Dropdown label="Week" />
          </div>

          <div className="mt-4">
            <AreaChart />
          </div>
        </Card>
        <Card className="p-6" roundedMd>
          <div className="flex justify-between flex-col lg:flex-row items-start gap-6 lg:gap-0 lg:items-center">
            <div>
              <div className="text-grey-60 text-sm font-bold">
                VOLUME
                <span className="text-white ms-1">(THU - WED)</span>
              </div>
              <div className="mt-1 text-white text-xl font-bison">
                $425,195,681
              </div>
            </div>
            <Dropdown label="Week" />
          </div>

          <div className="mt-4">
            <BarChart />
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};

export default Dasboard;
