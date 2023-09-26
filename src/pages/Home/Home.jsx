import clsx from "clsx";

import CategoryCards from "components/CategoryCards";
import classes from "./Home.module.css";

import { useSelector } from "react-redux";
import { useGlobal } from "../../contexts/GlobalContext";


const Home = () => {
  const { stringFormat } = useGlobal();
  const vaultCap = useSelector((state) => state.vault.vaultCap);
  
  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-6">
          <div className={clsx(classes.card1, "rounded-2xl p-6 relative")}>
            <img
              className="absolute left-0 top-0 w-full h-full object-cover mix-blend-soft-light rounded-2xl"
              src="/assets/imgs/home/bg-card-1.png"
              alt="bg"
            />

            <div className="relative z-10">
              <h4>Play To Win</h4>

              {/* <div className="text-2xl mt-5 max-w-[396px]">
                Play Games and Unlock Free Spins at our Casino
              </div> */}
              <div className="text-2xl mt-5 max-w-[396px]">
                Play Games and Win at our Casino
              </div>

              <div className="mt-10">
                <div className="text-base text-grey-20">Bank</div>
                <h4>{stringFormat(parseInt(vaultCap))}</h4>
              </div>

              {/* <div className="mt-10">
                <button className="text-[20px] font-bison text-grey-100 bg-main-10 rounded-xl py-4 px-[60px] transition-transform hover:-translate-y-1">
                  DEPOSIT
                </button>
              </div> */}
            </div>
            <img
              className="absolute -right-14 -bottom-24"
              src="/assets/imgs/home/card-1-flowers.png"
              alt="flowers"
            />
          </div>
        </div>
        {/* <div className="col-span-12 2xl:col-span-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className={clsx(classes.smallCard1)}>
                <div className="bg-background-3 rounded-[16px]">
                  <div className="p-6">
                    <h6>House</h6>
                    <div className="my-4 text-grey-60 text-sm">
                      Be the house, and earn yield
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold">Bankroll Size</div>
                      <div className="font-bold">$3,555,434</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold">Bankroll APR</div>
                      <div className="font-bold">1.97%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={clsx(classes.smallCard2)}>
                <div className="bg-background-3 rounded-[16px]">
                  <div className="p-6">
                    <h6>Cashback</h6>
                    <div className="my-4 text-grey-60 text-sm">
                      Lock rakeback tokens to earn profit
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold">Total Cashback</div>
                      <div className="font-bold">$3,555,434</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold">Cashback ROI</div>
                      <div className="font-bold">1.97%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={clsx(classes.smallCard3)}>
                <div className="bg-background-3 rounded-[16px]">
                  <div className="p-6">
                    <h6>DEG RAKEBACK</h6>
                    <div className="my-4 text-grey-60 text-sm">
                      Total rakeback distributed
                    </div>
                    <div className="flex flex-wrap gap-1 mt-[32px]">
                      <div className="w-9 border border-solid border-main-1 rounded-lg p-2 bg-[#461e30] text-main-2 text-base font-bison">
                        $
                      </div>
                      <div className="w-9 border border-solid border-grey-10 rounded-lg p-2 bg-[#4b4e60] text-base font-bison">
                        8
                      </div>
                      <div className="w-9 border border-solid border-grey-10 rounded-lg p-2 bg-[#4b4e60] text-base font-bison">
                        3
                      </div>
                      <div className="w-9 border border-solid border-grey-10 rounded-lg p-2 bg-[#4b4e60] text-base font-bison">
                        5
                      </div>
                      <div className="w-9 border border-solid border-grey-10 rounded-lg p-2 bg-[#4b4e60] text-base font-bison">
                        7
                      </div>
                      <div className="w-9 border border-solid border-grey-10 rounded-lg p-2 bg-[#4b4e60] text-base font-bison">
                        2
                      </div>
                      <div className="w-9 border border-solid border-grey-10 rounded-lg p-2 bg-[#4b4e60] text-base font-bison">
                        7
                      </div>
                      <div className="w-9 border border-solid border-grey-10 rounded-lg p-2 bg-[#4b4e60] text-base font-bison">
                        1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={clsx(classes.smallCard4, "h-full")}>
                <div className="bg-background-3 rounded-[16px] h-full">
                  <div className="p-6">
                    <h6>Jackpot</h6>
                    <div className="my-4 text-grey-60 text-sm">
                      Active pot waiting to be won
                    </div>
                    <button className="h-14 w-full bg-[#2673D5] text-xl text-center rounded-lg transition-transform hover:-translate-y-1 font-bison">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <CategoryCards className="mt-[70px]" />
    </div>
  );
};

export default Home;
