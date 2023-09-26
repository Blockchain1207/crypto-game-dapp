import clsx from "clsx";
// import { useState } from "react";

import { useSelector } from 'react-redux'
import { useCustomWallet } from '../../contexts/WalletContext';
import { WalletConnect } from '../../components/WalletConnect';
import { useGlobal } from '../../contexts/GlobalContext';


const Topbar = ({
  isChatActive,
  setIsChatActive,
  setIsLeftMenuActive,
  isRightMenuActive,
  setIsRightMenuActive,
  walletConnect,
  setWalletConnect,
}) => {

  const { disconnectWallet, connectWalletByConfig, isLoggedIn, isWrongChain, wallet } = useCustomWallet();
  const balance = useSelector((state) => state.vault.balance);
  const { stringFormat } = useGlobal();

  return (
    <>
    <div className="flex-row flex items-center justify-between gap-10 h-[88px]">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer block xl:hidden"
          onClick={() => setIsLeftMenuActive(true)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          ></path>
        </svg>
      </div>

      <div
        className={clsx(
          "bg-background-1 p-10 md:p-0 md:h-auto h-full md:bg-transparent fixed top-0 md:static flex-col z-20 md:flex-row flex items-start md:items-center gap-6 md:gap-3 lg:gap-10 transition-all",
          isRightMenuActive ? "right-0" : "-right-[256px]"
        )}
      >
        <div className="flex items-center gap-1">
          <div className="font-bison text-sm xl:text-base">WALLET</div>
          <img src="/assets/vectors/topbar/eth.svg" alt="eth" className="w-[24px]"/> <div></div>
          <div className="">{isLoggedIn() ? stringFormat(parseInt(balance)) : '0'}</div>
        </div>
        <div className="cursor-pointer flex items-center gap-1">
          <div className="w-6 h-6 relative top-1">
            <img
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
              src="/assets/vectors/topbar/wallet.svg"
              alt="wallet"
            />
          </div>
          <div className="font-bold text-xs xl:text-lg">{isLoggedIn() ? wallet.address.slice(0, 5) + '...' + wallet.address.slice(-4) : '0x'}</div>
          {/* <img src="/assets/vectors/topbar/chevron-down.svg" alt="chevron" /> */}
        </div>
        <div className="flex-col md:flex-row flex gap-3">
          {/* <button className="w-[120px] lg:w-[164px] text-sm lg:text-lg h-10 rounded-lg font-bison bg-grey-80 transition-transform hover:-translate-y-1">
            WITHDRAW
          </button> */}
          <button
            className="w-[120px] lg:w-[164px] text-sm lg:text-lg h-10 rounded-lg font-bison bg-main-1 transition-transform hover:-translate-y-1"
            onClick={() => !isLoggedIn() ? setWalletConnect(true) : isWrongChain()? connectWalletByConfig(): disconnectWallet() }
          >
            { !isLoggedIn() ? 'Connect' : isWrongChain() ? "Switch" : "Disconnect" }
          </button>

          {/* {!isChatActive && (
            <div
              className="w-10 h-10 relative top-1 cursor-pointer md:block hidden"
              onClick={() => setIsChatActive(true)}
            >
              <img
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
                src="/assets/vectors/topbar/chat.svg"
                alt="chat"
              />
            </div>
          )} */}
        </div>
      </div>

      <div className="md:hidden flex gap-4">
        <div
          className="bg-background-1 border border-solid border-background-3 w-10 h-10 flex justify-center items-center rounded-lg overflow-hidden"
          onClick={() => setIsRightMenuActive(true)}
        >
          <div className="w-6 h-6 relative top-1">
            <img
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
              src="/assets/vectors/topbar/wallet.svg"
              alt="wallet"
            />
          </div>
        </div>

        {/* {!isChatActive && (
          <div
            className="w-10 h-10 relative top-1 cursor-pointer"
            onClick={() => setIsChatActive(true)}
          >
            <img
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
              src="/assets/vectors/topbar/chat.svg"
              alt="chat"
            />
          </div>
        )} */}
      </div>
    </div>

    {walletConnect === true && <WalletConnect close={() => setWalletConnect(false)} />}
    </>
  );
};

export default Topbar;
