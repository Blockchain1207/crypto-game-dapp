import { useState } from "react";
import Slider from "react-input-slider";

import PageContainer from "components/PageContainer";
import Card from "components/Card";

const Plinko = () => {
  const [state, setState] = useState({ x: 10, y: 10 });

  return (
    <PageContainer>
      <h4 className="mb-8">PLINKO</h4>

      <Card className="rounded-t-2xl p-[20px] md:p-[60px] flex flex-col lg:flex-row items-center lg:items-end gap-[82px]">
        <div>
          <div className="">
            <div className="flex justify-center">
              <Circle />
              <Circle />
              <Circle />
            </div>
            <div className="flex justify-center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </div>
            <div className="flex justify-center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </div>
            <div className="flex justify-center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </div>
            <div className="flex justify-center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </div>
            <div className="flex justify-center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </div>
            <div className="flex justify-center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </div>
            <div className="flex justify-center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </div>
            <div className="flex justify-center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </div>
            <div className="flex justify-center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </div>
            <div className="flex justify-center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </div>
            <div className="flex justify-center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-1 2xl:mt-0 mt-3">
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-2 rounded-t"></div>
              <button className="bg-other-1 rounded-b text-xs font-bison px-3 py-1">
                70x
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-2 rounded-t"></div>
              <button className="bg-other-1 rounded-b text-xs font-bison px-3 py-1">
                16x
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-2 rounded-t"></div>
              <button className="bg-other-1 rounded-b text-xs font-bison px-3 py-1">
                3x
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-2 rounded-t"></div>
              <button className="bg-other-1 rounded-b text-xs font-bison px-3 py-1">
                2x
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-8 rounded-t"></div>
              <button className="bg-other-2 rounded-b text-xs font-bison px-3 py-1">
                0.9x
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-8 rounded-t"></div>
              <button className="bg-other-2 rounded-b text-xs font-bison px-3 py-1">
                0.6x
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-10 rounded-t"></div>
              <button className="bg-other-3 rounded-b text-xs font-bison px-3 py-1">
                0.4x
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-8 rounded-t"></div>
              <button className="bg-other-2 rounded-b text-xs font-bison px-3 py-1">
                0.6x
              </button>
            </div>{" "}
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-8 rounded-t"></div>
              <button className="bg-other-2 rounded-b text-xs font-bison px-3 py-1">
                0.9x
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-2 rounded-t"></div>
              <button className="bg-other-1 rounded-b text-xs font-bison px-3 py-1">
                2x
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-2 rounded-t"></div>
              <button className="bg-other-1 rounded-b text-xs font-bison px-3 py-1">
                3x
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-2 rounded-t"></div>
              <button className="bg-other-1 rounded-b text-xs font-bison px-3 py-1">
                16x
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full h-1 bg-main-2 rounded-t"></div>
              <button className="bg-other-1 rounded-b text-xs font-bison px-3 py-1">
                70x
              </button>
            </div>
          </div>
        </div>
        <div className="sm:w-[360px]">
          <div>
            <div className="flex justify-between items-center font-bold">
              <div className="text-grey-60 text-sm font-bold">Wager</div>
              <div className="text-sm">
                <span className="text-white">0</span>
                &nbsp;USDT
              </div>
            </div>

            <div className="relative">
              <div className="bg-background-1 border border-solid border-background-3 p-3 rounded-lg mt-2 flex justify-between items-center">
                <div className="text-base font-bold">0.001</div>
                <div className="flex gap-1 items-center">
                  <div className="text-grey-60 text-base font-bold">$0</div>
                  <img src="/assets/vectors/stake/arrows.svg" alt="arrows" />
                  <img src="/assets/vectors/topbar/eth.svg" alt="eth" className="w-[24px]" />
                </div>
              </div>

              <div className="w-[calc(100%-24px)] h-3 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[7px]">
                <Slider
                  axis="x"
                  x={state.x}
                  onChange={({ x }) => setState((state) => ({ ...state, x }))}
                  styles={{
                    track: {
                      backgroundColor: "#434D56",
                      width: "100%",
                      height: 2,
                    },
                    active: {
                      backgroundColor: "#BE0100",
                    },
                    thumb: {
                      width: 12,
                      height: 12,
                      border: "3px solid #BE0100",
                      backgroundColor: "#121628",
                      // background: "#BE0100",
                    },
                    disabled: {
                      opacity: 0.5,
                    },
                  }}
                />
              </div>
            </div>

            <div className="mt-3 flex gap-1">
              <div className="bg-grey-80 rounded-[4px] py-[2px] px-3 text-xs font-bold w-12 text-center h-[22px] cursor-pointer">
                1/3
              </div>
              <div className="bg-grey-80 rounded-[4px] py-[2px] px-3 text-xs font-bold w-12 text-center h-[22px] cursor-pointer">
                2x{" "}
              </div>
              <div className="bg-grey-80 rounded-[4px] py-[2px] px-3 text-xs font-bold w-12 text-center h-[22px] cursor-pointer">
                Max
              </div>
            </div>

            {/* <div className="text-grey-60 text-sm mt-6 mb-2 font-bold">
              Multiple Bets
            </div>
            <div className="relative">
              <div className="bg-background-1 border border-solid border-background-3 p-3 rounded-lg mt-2">
                <div className="text-base font-bold">1</div>
              </div>

              <div className="w-[calc(100%-24px)] h-3 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[7px]">
                <Slider
                  axis="x"
                  x={state.x}
                  onChange={({ x }) => setState((state) => ({ ...state, x }))}
                  styles={{
                    track: {
                      backgroundColor: "#434D56",
                      width: "100%",
                      height: 2,
                    },
                    active: {
                      backgroundColor: "#BE0100",
                    },
                    thumb: {
                      width: 12,
                      height: 12,
                      border: "3px solid #BE0100",
                      backgroundColor: "#121628",
                      // background: "#BE0100",
                    },
                    disabled: {
                      opacity: 0.5,
                    },
                  }}
                />
              </div>
            </div> */}

            <div className="text-grey-60 text-sm mt-6 mb-2 font-bold">
              Plinko Size
            </div>

            <div className="relative">
              <div className="bg-background-1 border border-solid border-background-3 p-3 rounded-lg mt-2 flex justify-between items-center">
                <div className="text-base font-bold">12</div>
                <div className="text-grey-60 text-base font-bold">rows</div>
              </div>
              <div className="w-[calc(100%-24px)] h-3 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[8px]">
                <Slider
                  axis="x"
                  x={state.x}
                  onChange={({ x }) => setState((state) => ({ ...state, x }))}
                  styles={{
                    track: {
                      backgroundColor: "#434D56",
                      width: "100%",
                      height: 2,
                    },
                    active: {
                      backgroundColor: "#BE0100",
                    },
                    thumb: {
                      width: 12,
                      height: 12,
                      border: "3px solid #BE0100",
                      backgroundColor: "#121628",
                      // background: "#BE0100",
                    },
                    disabled: {
                      opacity: 0.5,
                    },
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-grey-60 text-sm mt-6 mb-2 font-bold">
                  Max Payoutize
                </div>

                <div className="bg-background-1 relative border border-solid border-background-3 p-3 rounded-lg mt-2 flex justify-between items-center">
                  <input
                    type="text"
                    className="w-full outline-none border-0 bg-transparent text-base font-bold"
                    value={0}
                  />
                  <img
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-[24px]"
                    src="/assets/vectors/topbar/eth.svg"
                    alt="eth"
                  />
                </div>
              </div>
              <div>
                <div className="text-grey-60 text-sm mt-6 mb-2 font-bold">
                  Total Wager
                </div>

                <div className="bg-background-1 relative border border-solid border-background-3 p-3 rounded-lg mt-2 flex justify-between items-center">
                  <input
                    type="text"
                    className="w-full outline-none border-0 bg-transparent text-base font-bold"
                    value={0}
                  />
                  <img
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-[24px]"
                    src="/assets/vectors/topbar/eth.svg"
                    alt="eth"
                  />
                </div>
              </div>
            </div>

            <button className="mt-6 w-full h-12 text-sm sm:text-lg rounded-lg font-bison bg-main-1 transition-transform hover:-translate-y-1">
              Approve and play
            </button>
          </div>
        </div>
      </Card>
      <div className="bg-background-3 rounded-b-2xl w-full py-3 px-[60px] flex justify-between items-center">
        {/* <div className="text-grey-60 text-sm font-bison">HOW TO PLAY?</div>
        <div className="flex items-center gap-2">
          <img src="/assets/vectors/plinko/volume.svg" alt="volume" />
          <Slider
            axis="x"
            x={state.x}
            onChange={({ x }) => setState((state) => ({ ...state, x }))}
            styles={{
              track: {
                backgroundColor: "#434D56",
                width: 80,
                height: 2,
              },
              active: {
                backgroundColor: "#BE0100",
              },
              thumb: {
                width: 12,
                height: 12,
                border: "3px solid #BE0100",
                backgroundColor: "#121628",
                // background: "#BE0100",
              },
              disabled: {
                opacity: 0.5,
              },
            }}
          />
        </div> */}
      </div>

      <div className="mt-12">
        <div className="font-bison mb-3">BET HISTORY</div>

        <Card className="p-6 rounded-2xl" wAuto="md:w-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr>
                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                  Played
                </th>
                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                  Player
                </th>
                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-center border-b border-solid border-background-3">
                  Outcome
                </th>
                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-center border-b border-solid border-background-3">
                  Wager
                </th>
                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-center border-b border-solid border-background-3">
                  Multiplier
                </th>
                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-center border-b border-solid border-background-3">
                  Payout
                </th>
                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-end  border-b border-solid border-background-3">
                  Profit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 text-sm font-bold text-start px-3 text-grey-60">
                  09:22:47
                </td>
                <td className="py-2 text-sm font-bold px-3">0x0109...B8f1</td>
                <td className="py-2 text-sm font-bold text-center px-3">1</td>
                <td className="py-2 text-sm font-bold text-center flex justify-center items-center gap-1">
                  0.002615{" "}
                  <img src="/assets/vectors/topbar/eth.svg" alt="eth" className="w-[24px]" />
                </td>
                <td className="py-2 text-sm font-bold text-center text-grey-60">
                  0.6x
                </td>
                <td className="py-2 text-sm font-bold text-center flex justify-center items-center gap-1">
                  0.002615{" "}
                  <img src="/assets/vectors/topbar/eth.svg" alt="eth" className="w-[24px]" />
                </td>
                <td className="py-2 text-sm font-bold text-end px-3">
                  <div className="text-main-9 flex gap-1 justify-end items-center">
                    0.002615{" "}
                    <img src="/assets/vectors/topbar/eth.svg" alt="eth" className="w-[24px]" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </PageContainer>
  );
};

export default Plinko;

const Circle = () => {
  return (
    <div className="sm:py-3 p-1 sm:p-3 2xl:p-5">
      <img src="/assets/vectors/plinko/circle.svg" alt="circle" />
    </div>
  );
};
