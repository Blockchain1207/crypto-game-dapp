import { useState } from "react";
import Slider from "react-input-slider";

import PageContainer from "components/PageContainer";
import Card from "components/Card";
import clsx from "clsx";

import { useDispatch, useSelector } from "react-redux";
import BigNumber from "bignumber.js";

import NumberPanel from "./NumberPanel";

import {
    setChipValue,
    setClickedPoints,
} from "../../../contexts/ReduxContext/reducers/roulette";
import { useCustomWallet } from "../../../contexts/WalletContext";
import { useGlobal } from "../../../contexts/GlobalContext";
import useRoulette from "../../../hooks/useRoulette";
import { setTotalWager } from "contexts/ReduxContext/reducers/vault";
import walletConfig from "../../../contexts/WalletContext/config";

const letters = [
    3,
    6,
    9,
    12,
    15,
    18,
    21,
    24,
    27,
    30,
    33,
    36,
    null,
    2,
    5,
    8,
    11,
    14,
    17,
    20,
    23,
    26,
    29,
    32,
    35,
    null,
    1,
    4,
    7,
    10,
    13,
    16,
    19,
    22,
    25,
    28,
    31,
    34,
];

const Roulette = () => {
    const [state, setState] = useState({ x: 1, y: 1 });
    const { chipValue } = useSelector((state) => state.roulette);
    const clickedPoints = useSelector((state) => state.roulette.clickedPoints);
    const dispatch = useDispatch();

    const { connectWallet, isLoggedIn, wallet } = useCustomWallet();
    const { stringFormat, cutDecimal, chainId } = useGlobal();
    const { totalChips, boardData, houseAllowance, usdtPerChip, bet } =
        useSelector((state) => state.roulette);
    const balance = useSelector((state) => state.vault.balance);
    const vaultCap = useSelector((state) => state.vault.vaultCap);
    const totalWager = useSelector((state) => state.vault.totalWager);
    const { maxPayout, betHistory, approveUSDTForHouse, play } = useRoulette(boardData);

    console.log("ROULETTE", vaultCap, maxPayout);

    return (
        <PageContainer>
            <h4 className="mb-8">Roulette</h4>

            <Card className="rounded-t-2xl p-2 sm:p-5 md:p-[60px] flex flex-col xl:flex-row items-center xl:items-stretch gap-10 2xl:gap-[82px]">
                <div>
                    <div className="bg-[#256843] rounded-[40px] md:p-3 2xl:p-5">
                        <div className="bg-[#19492E] rounded-xl md:rounded-[40px] p-2 md:p-6 2xl:p-10 ">
                            <NumberPanel />
                            <div className="mt-2 flex gap-2 justify-center">
                                <button
                                    className="text-white text-[10px] sm:text-xs font-bison col-span-2 w-[100px] h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                    onClick={() => {
                                        console.log("Undo clicked");
                                        if (clickedPoints.length > 0) {
                                            console.log(
                                                "clickedPoints=",
                                                clickedPoints
                                            );
                                            const _points = clickedPoints.slice(
                                                0,
                                                -1
                                            );
                                            // clickedPoints.
                                            console.log(">>> ", _points);
                                            dispatch(setClickedPoints(_points));
                                        }
                                    }}
                                >
                                    Undo
                                </button>
                                <button
                                    className="text-white text-[10px] sm:text-xs font-bison col-span-2 w-[100px] h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                    onClick={() =>
                                        dispatch(setClickedPoints([]))
                                    }
                                >
                                    Clear
                                </button>
                            </div>
                        </div>

                        {/* <div className="bg-[#19492E] rounded-xl md:rounded-[40px] p-2 md:p-6 2xl:p-10 flex flex-col sm:flex-row sm:items-start items-center gap-1 sm:gap-2 h-full">
                            <div
                                className={clsx(
                                    "h-5 sm:h-[112px] md:h-[136px] text-white text-[10px] sm:text-sm font-bison w-5 sm:w-8 md:w-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                )}
                            >
                                0
                            </div>
                            <div>
                                <div className="w-full grid grid-cols-12 gap-1 sm:gap-2">
                                    {letters.map((el, idx) => {
                                        if (el)
                                            return (
                                                <div key={"letter-" + idx}>
                                                    <div
                                                        className={clsx(
                                                            idx % 2 === 0
                                                                ? "bg-[#1D2738]"
                                                                : "bg-[#D9113A]",
                                                            "text-white text-[9px] sm:text-xs md:text-sm font-bison w-5 sm:w-8 md:w-10 min-w-0 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                                        )}
                                                    >
                                                        {el}
                                                    </div>
                                                </div>
                                            );
                                        return null;
                                    })}
                                    <div
                                        className={clsx(
                                            "text-white text-[10px] sm:text-sm font-bison col-span-4 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                        )}
                                    >
                                        1 to 12
                                    </div>
                                    <div
                                        className={clsx(
                                            "text-white text-[10px] sm:text-sm font-bison col-span-4 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                        )}
                                    >
                                        13 to 24
                                    </div>
                                    <div
                                        className={clsx(
                                            "text-white text-[10px] sm:text-sm font-bison col-span-4 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                        )}
                                    >
                                        25 to 35
                                    </div>
                                    <div
                                        className={clsx(
                                            "text-white text-[8px] sm:text-xs font-bison col-span-2 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                        )}
                                    >
                                        1 to 12
                                    </div>
                                    <div
                                        className={clsx(
                                            "text-white text-[8px] sm:text-xs font-bison col-span-2 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                        )}
                                    >
                                        Even
                                    </div>
                                    <div
                                        className={clsx(
                                            "text-white text-[8px] sm:text-xs font-bison col-span-2 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg bg-[#1D2738] border border-solid border-[#f6f6f6] flex justify-center items-center"
                                        )}
                                    ></div>
                                    <div
                                        className={clsx(
                                            "text-white text-[8px] sm:text-xs font-bison col-span-2 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg bg-[#D9113A] border border-solid border-[#f6f6f6] flex justify-center items-center"
                                        )}
                                    ></div>
                                    <div
                                        className={clsx(
                                            "text-white text-[8px] sm:text-xs font-bison col-span-2 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                        )}
                                    >
                                        ODD
                                    </div>
                                    <div
                                        className={clsx(
                                            "text-white text-[8px] sm:text-xs font-bison col-span-2 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                        )}
                                    >
                                        19 to 36
                                    </div>
                                </div>
                                <div className="mt-2 flex gap-2 justify-center">
                                    <div
                                        className={clsx(
                                            "text-white text-[10px] sm:text-xs font-bison col-span-2 w-[100px] h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                        )}
                                    >
                                        undo
                                    </div>
                                    <div
                                        className={clsx(
                                            "text-white text-[10px] sm:text-xs font-bison col-span-2 w-[100px] h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                        )}
                                    >
                                        clear
                                    </div>
                                    <div
                                        className={clsx(
                                            "text-white text-[10px] sm:text-xs font-bison col-span-2 w-[100px] h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                        )}
                                    >
                                        <img
                                            className="w-3 sm:w-auto"
                                            src="/assets/vectors/roulette/back.svg"
                                            alt="back"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex sm:flex-col gap-1 sm:gap-2">
                                <div
                                    className={clsx(
                                        "text-white text-[9px] sm:text-xs md:text-sm font-bison w-5 sm:w-8 md:w-10 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                    )}
                                >
                                    2:1
                                </div>
                                <div
                                    className={clsx(
                                        "text-white text-[9px] sm:text-xs md:text-sm font-bison w-5 sm:w-8 md:w-10 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                    )}
                                >
                                    2:1
                                </div>
                                <div
                                    className={clsx(
                                        "text-white text-[9px] sm:text-xs md:text-sm font-bison w-5 sm:w-8 md:w-10 h-5 sm:h-8 md:h-10 rounded sm:rounded-lg border border-solid border-[#f6f6f6] flex justify-center items-center"
                                    )}
                                >
                                    2:1
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="sm:w-[360px]">
                    <div>
                        <div className="flex justify-between items-center font-bold">
                            <div className="text-grey-60 text-sm font-bold">
                                Wager
                            </div>
                            <div className="text-sm">
                                <span className="text-white">
                                  {stringFormat(
                                    cutDecimal(BigNumber(totalChips).times(usdtPerChip).toFixed(2), 2),
                                  )}
                                </span>
                                &nbsp;USDT
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-background-1 border border-solid border-background-3 p-3 rounded-lg mt-2 flex justify-between items-center">
                                <div
                                    className="w-full outline-none border-0 bg-transparent text-base font-bold"
                                >
                                    {stringFormat(
                                        cutDecimal(BigNumber(totalChips).times(usdtPerChip).toFixed(2), 2),
                                      )}
                                </div>
                                <div className="flex gap-1 items-center">
                                    <img
                                        src="/assets/vectors/topbar/eth.svg"
                                        alt="eth"
                                        className="w-[24px]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-5 gap-3 mt-2">
                            <div
                                className={clsx(
                                    "p-2 rounded-lg",
                                    chipValue === 1 && "bg-dark"
                                )}
                                onClick={() => dispatch(setChipValue(1))}
                            >
                                <img
                                    src="/assets/imgs/roulette/wager-1.png"
                                    alt=""
                                />
                            </div>
                            <div
                                className={clsx(
                                    "p-2 rounded-lg",
                                    chipValue === 5 && "bg-dark"
                                )}
                                onClick={() => dispatch(setChipValue(5))}
                            >
                                <img
                                    src="/assets/imgs/roulette/wager-2.png"
                                    alt=""
                                />
                            </div>
                            <div
                                className={clsx(
                                    "p-2 rounded-lg",
                                    chipValue === 10 && "bg-dark"
                                )}
                                onClick={() => dispatch(setChipValue(10))}
                            >
                                <img
                                    src="/assets/imgs/roulette/wager-3.png"
                                    alt=""
                                />
                            </div>
                            <div
                                className={clsx(
                                    "p-2 rounded-lg",
                                    chipValue === 20 && "bg-dark"
                                )}
                                onClick={() => dispatch(setChipValue(20))}
                            >
                                <img
                                    src="/assets/imgs/roulette/wager-4.png"
                                    alt=""
                                />
                            </div>
                            <div
                                className={clsx(
                                    "p-2 rounded-lg",
                                    chipValue === 100 && "bg-dark"
                                )}
                                onClick={() => dispatch(setChipValue(100))}
                            >
                                <img
                                    src="/assets/imgs/roulette/wager-5.png"
                                    alt=""
                                />
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
                                        value={
                                            maxPayout === 0
                                                ? 0
                                                : stringFormat(
                                                      cutDecimal(
                                                          (parseFloat(
                                                              vaultCap
                                                          ) *
                                                              0.025) /
                                                              maxPayout,
                                                          2
                                                      )
                                                  )
                                        }
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
                              BigNumber(totalChips).times(usdtPerChip)
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
                                    {bet.cast}
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
                                            {betItem[4]}
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

export default Roulette;
