import { useState } from "react";
import Slider from "react-input-slider";
import { useSelector } from "react-redux";

import PageContainer from "components/PageContainer";
import Card from "components/Card";

import useCoinflip from "../../../hooks/useCoinflip";

import { useGlobal } from "../../../contexts/GlobalContext";
import { useCustomWallet } from "../../../contexts/WalletContext";
import BigNumber from "bignumber.js";
import walletConfig from "../../../contexts/WalletContext/config";

const Coinflip = () => {
    const [state, setState] = useState({ x: 1, y: 1 });
    const [coinState, setCoinState] = useState(1);
    const [betAmount, setBetAmount] = useState(10);

    const { maxPayout, betHistory, approveUSDTForHouse, play } = useCoinflip(
        coinState,
        betAmount
    );

    const { connectWallet, isLoggedIn, wallet } = useCustomWallet();
    const { stringFormat, cutDecimal, chainId } = useGlobal();
    const { houseAllowance, bet } = useSelector((state) => state.coinflip);
    const { count, win } = useSelector((state) => state.game);
    const balance = useSelector((state) => state.vault.balance);
    const vaultCap = useSelector((state) => state.vault.vaultCap);
    const totalWager = useSelector((state) => state.vault.totalWager);

    return (
        <PageContainer>
            <h4 className="mb-8">Coinflip</h4>

            <Card className="overflow-hidden rounded-t-2xl py-0 px-[20px] md:px-[60px] flex flex-col lg:flex-row items-center lg:items-stretch gap-5 lg:gap-[82px]">
                <div className="flex-grow flex flex-col justify-center items-center relative py-[20px] lg:py-[60px]">
                    <img
                        className="absolute max-w-none w-[1280px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        src="/assets/vectors/coinflip/bg.svg"
                        alt="bg"
                    />
                    {coinState === 1 ? (
                        <img
                            className="w-[240px]"
                            src="/assets/vectors/coinflip/gen.svg"
                            alt="degen"
                        />
                    ) : (
                        <img
                            className="w-[240px]"
                            src="/assets/vectors/coinflip/degen.svg"
                            alt="degen"
                        />
                    )
                    }


                    <div className="w-[260px] sm:w-[300px] mt-[50px] bg-[#1a1e30] rounded-2xl relative z-10">
                        <div className="p-1 flex gap-3 rounded-2xl border border-solid border-[#06071a]">
                            <div
                                className={`flex-grow rounded-xl px-3 sm:px-5 py-3 flex gap-2 items-center cursor-pointer ${
                                    coinState === 1 && "bg-[#1E2238]"
                                }`}
                                onClick={() => setCoinState(1)}
                            >
                                <img
                                    src="/assets/vectors/coinflip/tail.svg"
                                    alt="tail"
                                />
                                <div className="font-bison text-sm sm:text-base">
                                    TAILS
                                </div>
                            </div>
                            <div
                                className={`flex-grow rounded-xl px-3 sm:px-5 py-3 flex gap-2 items-center cursor-pointer ${
                                    coinState === 2 && "bg-[#1E2238]"
                                }`}
                                onClick={() => setCoinState(2)}
                            >
                                <img
                                    src="/assets/vectors/coinflip/head.svg"
                                    alt="head"
                                />
                                <div className="font-bison text-sm sm:text-base">
                                    HEADS
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-[260px] sm:w-[300px] mt-2 bg-[#1a1e30] rounded-2xl relative z-10">
                        <div className="flex gap-3">
                            <div className="flex-grow rounded-xl px-5 py-3 flex gap-1 items-center justify-center">
                                <div className="text-[#919ca2] text-sm font-bold">
                                    -0.0001
                                </div>
                                <img
                                    src="/assets/vectors/topbar/eth.svg"
                                    alt="eth"
                                    className="w-[24px]"
                                />
                            </div>
                            <div className="flex-grow rounded-xl px-5 py-3 flex gap-1 items-center justify-center">
                                <div className="text-[#09a854] text-sm font-bold">
                                    0.00096
                                </div>
                                <img
                                    src="/assets/vectors/topbar/eth.svg"
                                    alt="eth"
                                    className="w-[24px]"
                                />
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="sm:w-[360px] py-[20px] lg:py-[60px] relative z-10">
                    <div>
                        <div className="flex justify-between items-center font-bold">
                            <div className="text-grey-60 text-sm font-bold">
                                Wager
                            </div>
                            <div className="text-sm">
                                <span className="text-white">{stringFormat(betAmount)}</span>
                                &nbsp;USDT
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-background-1 border border-solid border-background-3 p-3 rounded-lg mt-2 flex justify-between items-center">
                                {/* <div className="text-base font-bold">0.001</div> */}
                                <input
                                    type="number"
                                    className="w-full outline-none border-0 bg-transparent text-base font-bold"
                                    value={betAmount}
                                    onChange={(e) =>
                                        setBetAmount(e.target.value)
                                    }
                                />
                                <div className="flex gap-1 items-center">
                                    {/* <div className="text-grey-60 text-base font-bold">
                                        $
                                    </div>
                                    <img
                                        src="/assets/vectors/stake/arrows.svg"
                                        alt="arrows"
                                    /> */}
                                    <img
                                        src="/assets/vectors/topbar/eth.svg"
                                        alt="eth"
                                        className="w-[24px]"
                                    />
                                </div>
                            </div>
                            {/* 
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
              </div> */}
                        </div>

                        <div className="mt-3 flex gap-1">
                            <div
                                className="bg-grey-80 rounded-[4px] py-[2px] px-3 text-xs font-bold w-12 text-center h-[22px] cursor-pointer"
                                onClick={() => {
                                    setBetAmount((betAmount / 3).toFixed(2));
                                }}
                            >
                                1/3
                            </div>
                            <div
                                className="bg-grey-80 rounded-[4px] py-[2px] px-3 text-xs font-bold w-12 text-center h-[22px] cursor-pointer"
                                onClick={() => {
                                    setBetAmount(betAmount * 2);
                                }}
                            >
                                2x{" "}
                            </div>
                            <div
                                className="bg-grey-80 rounded-[4px] py-[2px] px-3 text-xs font-bold w-12 text-center h-[22px] cursor-pointer"
                                onClick={() => {
                                    const maxBet =
                                        (parseFloat(vaultCap) * 0.025) /
                                        maxPayout;
                                    const bal = parseFloat(balance);
                                    if (maxBet > bal)
                                        setBetAmount((bal - 0.01).toFixed(2));
                                    else
                                        setBetAmount(
                                            (maxBet - 0.01).toFixed(2)
                                        );
                                }}
                            >
                                Max
                            </div>
                        </div>

                        {/* <div className="text-grey-60 text-sm mt-6 mb-2 font-bold">
                            Multiple Bets
                        </div>
                        <div className="relative">
                            <div className="bg-background-1 border border-solid border-background-3 p-3 rounded-lg mt-2">
                                <div className="text-base font-bold">
                                    {state.x}
                                </div>
                            </div>

                            <div className="w-[calc(100%-24px)] h-3 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[7px]">
                                <Slider
                                    axis="x"
                                    xmin={1}
                                    x={state.x}
                                    onChange={({ x }) =>
                                        setState((state) => ({ ...state, x }))
                                    }
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

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="text-grey-60 text-sm mt-6 mb-2 font-bold">
                                    Max Payout
                                </div>

                                <div className="bg-background-1 relative border border-solid border-background-3 p-3 rounded-lg mt-2 flex justify-between items-center">
                                    <input
                                        type="text"
                                        className="w-full outline-none border-0 bg-transparent text-base font-bold"
                                        value={stringFormat(
                                            cutDecimal(
                                                (parseFloat(vaultCap) * 0.025) /
                                                    maxPayout,
                                                2
                                            )
                                        )}
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
                                        value={totalWager}
                                    />
                                    <img
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-[24px]"
                                        src="/assets/vectors/topbar/eth.svg"
                                        alt="eth"
                                    />
                                </div>
                            </div>
                        </div>

                        {!isLoggedIn() ? (
                            <button
                                className="mt-6 w-full h-12 text-sm sm:text-lg rounded-lg font-bison bg-main-1 transition-transform hover:-translate-y-1"
                                onClick={connectWallet}
                            >
                                Connect Wallet
                            </button>
                        ) : BigNumber(houseAllowance).lt(
                              BigNumber(betAmount)
                          ) ? (
                            <button
                                className="mt-6 w-full h-12 text-sm sm:text-lg rounded-lg font-bison bg-main-1 transition-transform hover:-translate-y-1"
                                onClick={approveUSDTForHouse}
                            >
                                Approve
                            </button>
                        ) : (
                            <button
                                className="mt-6 w-full h-12 text-sm sm:text-lg rounded-lg font-bison bg-main-1 transition-transform hover:-translate-y-1"
                                onClick={play}
                            >
                                Play
                            </button>
                        )}
                    </div>
                </div>
            </Card>
            <div className="bg-background-3 rounded-b-2xl w-full py-3 px-[60px] flex justify-between items-center">
                {/* <div className="text-grey-60 text-sm font-bison">
                    HOW TO PLAY?
                </div> */}
                {/* <div className="flex items-center gap-2">
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
                                    Player
                                </th>
                                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                                    Transaction
                                </th>
                                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-center border-b border-solid border-background-3">
                                    Played
                                </th>
                                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-center border-b border-solid border-background-3">
                                    Outcome
                                </th>
                                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-end border-b border-solid border-background-3">
                                    Wager
                                </th>
                                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-end border-b border-solid border-background-3">
                                    Payout
                                </th>
                                <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-end  border-b border-solid border-background-3">
                                    Profit
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td className="py-2 text-sm font-bold px-3">
                                    <a href={`${walletConfig[chainId].blockUrls + "/tx/" + bet.tx}`} target="_blank">
                                        <p className='text-white'>
                                            {bet.tx.slice(0, 10) + '...' + bet.tx.slice(-8)}
                                        </p>
                                    </a>
                                </td>
                                <td className="py-2 text-sm font-bold text-center">
                                    {bet.cast === 0 ? "ROCK" : bet.cast === 1 ? "SCISSORS" : bet.cast === 2 ? "PAPER" : "_"}
                                </td>
                                <td className="py-2 text-sm font-bold text-center">
                                    <div className="flex justify-center items-center gap-1">
                                        {cutDecimal(bet.deposit, 6)}
                                        <img
                                            src="/assets/vectors/topbar/eth.svg"
                                            alt="eth"
                                            className="w-[24px]"
                                        />
                                    </div>
                                </td>
                                <td className="py-2 text-sm font-bold text-center">
                                    <div className="flex justify-center items-center gap-1">
                                        {cutDecimal(bet.payout, 6)}
                                        <img
                                            src="/assets/vectors/topbar/eth.svg"
                                            alt="eth"
                                            className="w-[24px]"
                                        />
                                    </div>
                                </td>
                                <td className="py-2 text-sm font-bold text-end px-3">
                                    <div className="text-main-9 flex gap-1 justify-end items-center">
                                        {cutDecimal(
                                            bet.payout - bet.deposit,
                                            6
                                        )}
                                        <img
                                            src="/assets/vectors/topbar/eth.svg"
                                            alt="eth"
                                            className="w-[24px]"
                                        />
                                    </div>
                                </td>
                            </tr> */}
                            {
                                betHistory.map((betItem) => { return (
                                    <tr>
                                        <td className="py-2 text-sm font-bold text-start">
                                            <a href={`${walletConfig[chainId].blockUrls + "/address/" + betItem[1]}`} target="_blank">
                                                <p className={`${betItem[1] === wallet.address && (betItem[3] - betItem[2] > 0 ? 'text-main-9' : 'text-[#E74C3C]')}`}>
                                                    {betItem[1].slice(0, 6) + '...' + betItem[1].slice(-4)}
                                                </p>
                                            </a>
                                        </td>
                                        <td className="py-2 text-sm font-bold px-3">
                                            <a href={`${walletConfig[chainId].blockUrls + "/tx/" + betItem[0]}`} target="_blank">
                                                <p className={`${betItem[1] === wallet.address && (betItem[3] - betItem[2] > 0 ? 'text-main-9' : 'text-[#E74C3C]')}`}>
                                                    {betItem[0].slice(0, 6) + '...' + betItem[0].slice(-4)}
                                                </p>
                                            </a>
                                        </td>
                                        <td className={`${betItem[1] === wallet.address && (betItem[3] - betItem[2] > 0 ? 'text-main-9' : 'text-[#E74C3C]')} py-2 text-sm font-bold text-center`}>
                                            {betItem[5]}
                                        </td>
                                        <td className={`${betItem[1] === wallet.address && (betItem[3] - betItem[2] > 0 ? 'text-main-9' : 'text-[#E74C3C]')} py-2 text-sm font-bold text-center`}>
                                            {betItem[4] === 0 ? "_" : betItem[4] == 1 ? "TAILS" : "HEADS"}
                                        </td>
                                        <td className="py-2 text-sm font-bold text-center">
                                            <div className={`${betItem[1] === wallet.address && (betItem[3] - betItem[2] > 0 ? 'text-main-9' : 'text-[#E74C3C]')} flex justify-end items-center gap-1`}>
                                                {cutDecimal(betItem[2], 6)}
                                                <img
                                                    src="/assets/vectors/topbar/eth.svg"
                                                    alt="eth"
                                                    className="w-[24px]"
                                                />
                                            </div>
                                        </td>
                                        <td className="py-2 text-sm font-bold text-center">
                                            <div className={`${betItem[1] === wallet.address && (betItem[3] - betItem[2] > 0 ? 'text-main-9' : 'text-[#E74C3C]')} flex justify-end items-center gap-1`}>
                                                {cutDecimal(betItem[3], 6)}
                                                <img
                                                    src="/assets/vectors/topbar/eth.svg"
                                                    alt="eth"
                                                    className="w-[24px]"
                                                />
                                            </div>
                                        </td>
                                        <td className="py-2 text-sm font-bold text-end px-3">
                                            <div className={`${betItem[1] === wallet.address && (betItem[3] - betItem[2] > 0 ? 'text-main-9' : 'text-[#E74C3C]')} flex gap-1 justify-end items-center`}>
                                                {cutDecimal(betItem[3] - betItem[2], 6)}
                                                <img
                                                    src="/assets/vectors/topbar/eth.svg"
                                                    alt="eth"
                                                    className="w-[24px]"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )
                                })
                            }
                        </tbody>
                    </table>
                </Card>
            </div>
        </PageContainer>
    );
};

export default Coinflip;
