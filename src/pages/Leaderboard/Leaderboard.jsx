import CategoryCards from "components/CategoryCards";
import PageContainer from "components/PageContainer";
import classes from "./Leaderboard.module.css";
import clsx from "clsx";

const Leaderboard = () => {
  return (
    <PageContainer>
      {/* <div className="sm:grid grid-cols-12 gap-8">
        <div className=" w-[calc(100vw-48px)] sm:w-auto overflow-auto col-span-12 lg:col-span-3 flex flex-row flex-wrap lg:flex-col lg:justify-end gap-4">
          <div
            className={clsx(
              classes.card1,
              "w-[calc(100vw-24px)] sm:w-auto sm:min-w-[220px] flex-grow lg:flex-grow-0"
            )}
          >
            <div className="bg-background-3 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <img src="/assets/imgs/leaderboard/rank.png" alt="rank" />
                  <div className="text-grey-60">Rank</div>
                </div>

                <div className="text-xl font-bison">#1</div>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              classes.card2,
              "  sm:w-auto sm:min-w-[220px] flex-grow lg:flex-grow-0"
            )}
          >
            <div className="bg-background-3 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <img src="/assets/imgs/leaderboard/profit.png" alt="profit" />
                  <div className="text-grey-60">Profit</div>
                </div>

                <div className="text-xl font-bison">$0</div>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              classes.card3,
              "  sm:w-auto sm:min-w-[220px] flex-grow lg:flex-grow-0"
            )}
          >
            <div className="bg-background-3 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <img src="/assets/imgs/leaderboard/bets.png" alt="bets" />
                  <div className="text-grey-60">Bets</div>
                </div>

                <div className="text-xl font-bison">0</div>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              classes.card4,
              "w-[calc(100vw-24px)] sm:w-auto sm:min-w-[220px] flex-grow lg:flex-grow-0"
            )}
          >
            <div className="bg-background-3 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <img
                    src="/assets/imgs/leaderboard/winrate.png"
                    alt="winrate"
                  />
                  <div className="text-grey-60">Win Rate</div>
                </div>

                <div className="text-xl font-bison">0%</div>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              classes.card5,
              "w-[calc(100vw-24px)] sm:w-auto sm:min-w-[220px] flex-grow lg:flex-grow-0"
            )}
          >
            <div className="bg-background-3 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <img src="/assets/imgs/leaderboard/volume.png" alt="volume" />
                  <div className="text-grey-60">Volume</div>
                </div>

                <div className="text-xl font-bison">$0</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 w-[calc(100vw-48px)] sm:w-auto overflow-auto col-span-12 lg:col-span-9">
          <h4>LeaderBoard</h4>

          <div className="mt-5">
            <div className="bg-background-2 rounded-2xl  w-[calc(100vw-48px)] sm:w-auto p-6 overflow-auto">
              <table className="w-full min-w-[720px] md:min-w-0">
                <thead>
                  <tr className="">
                    <th className="border-b border-solid border-background-3 pb-3 ">
                      Rank
                    </th>
                    <th className="border-b border-solid border-background-3 pb-3 text-start">
                      Player
                    </th>
                    <th className="border-b border-solid border-background-3 pb-3 text-start">
                      Profit
                    </th>
                    <th className="border-b border-solid border-background-3 pb-3 text-start">
                      Bets
                    </th>
                    <th className="border-b border-solid border-background-3 pb-3 text-start">
                      Win Rate
                    </th>
                    <th className="border-b border-solid border-background-3 pb-3 text-start">
                      Volume
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="pt-3 relative">
                      <div className="text-center p-2 text-[#FFCE20]">1</div>
                      <img
                        className="absolute left-1/2 top-3 -translate-x-1/2"
                        src="/assets/vectors/leaderboard/position-1.svg"
                        alt="1"
                      />
                    </td>
                    <td className="pt-3 font-bold">0xba4e...5D1e</td>
                    <td className="pt-3 font-bold text-grey-60">$102,416.44</td>
                    <td className="pt-3 font-bold">3300</td>
                    <td className="pt-3 font-bold text-grey-60">69%</td>
                    <td className="pt-3 font-bold">$299,197.76</td>
                  </tr>
                  <tr className="">
                    <td className="relative">
                      <div className="text-center p-2 text-[#CECECE]">2</div>
                      <img
                        className="absolute left-1/2 top-0 -translate-x-1/2"
                        src="/assets/vectors/leaderboard/position-2.svg"
                        alt="2"
                      />
                    </td>
                    <td className="font-bold">0xba4e...5D1e</td>
                    <td className="font-bold text-grey-60">$102,416.44</td>
                    <td className="font-bold">3300</td>
                    <td className="font-bold text-grey-60">69%</td>
                    <td className="font-bold">$299,197.76</td>
                  </tr>
                  <tr className="">
                    <td className="relative">
                      <div className="text-center p-2 text-[#C07300]">3</div>
                      <img
                        className="absolute left-1/2 top-0 -translate-x-1/2"
                        src="/assets/vectors/leaderboard/position-3.svg"
                        alt="3"
                      />
                    </td>
                    <td className="font-bold">0xba4e...5D1e</td>
                    <td className="font-bold text-grey-60">$102,416.44</td>
                    <td className="font-bold">3300</td>
                    <td className="font-bold text-grey-60">69%</td>
                    <td className="font-bold">$299,197.76</td>
                  </tr>
                  <tr className="">
                    <td>
                      <div className="text-grey-60 text-center p-2">4</div>
                    </td>
                    <td className="font-bold">0xba4e...5D1e</td>
                    <td className="font-bold text-grey-60">$102,416.44</td>
                    <td className="font-bold">3300</td>
                    <td className="font-bold text-grey-60">69%</td>
                    <td className="font-bold">$299,197.76</td>
                  </tr>
                  <tr className="">
                    <td>
                      <div className="text-grey-60 text-center p-2">5</div>
                    </td>
                    <td className="font-bold">0xba4e...5D1e</td>
                    <td className="font-bold text-grey-60">$102,416.44</td>
                    <td className="font-bold">3300</td>
                    <td className="font-bold text-grey-60">69%</td>
                    <td className="font-bold">$299,197.76</td>
                  </tr>
                  <tr className="">
                    <td>
                      <div className="text-grey-60 text-center p-2">6</div>
                    </td>
                    <td className="font-bold">0xba4e...5D1e</td>
                    <td className="font-bold text-grey-60">$102,416.44</td>
                    <td className="font-bold">3300</td>
                    <td className="font-bold text-grey-60">69%</td>
                    <td className="font-bold">$299,197.76</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}

      <CategoryCards className="mt-10" />
    </PageContainer>
  );
};

export default Leaderboard;
