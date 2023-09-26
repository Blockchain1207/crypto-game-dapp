import clsx from "clsx";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import classes from "./MainLayout.module.css";
import Topbar from "./Topbar";

const navItems = [
  {
    icon: "/assets/vectors/sidebar/home.svg",
    iconActive: "/assets/vectors/sidebar/home-active.svg",
    label: "HOME",
    to: "/",
  },
  {
    icon: "/assets/vectors/sidebar/roulette.svg",
    iconActive: "/assets/vectors/sidebar/roulette.svg",
    label: "ROULETTE",
    to: "/roulette",
  },
  {
    icon: "/assets/vectors/sidebar/coinflip.svg",
    iconActive: "/assets/vectors/sidebar/coinflip.svg",
    label: "COINFLIP",
    to: "/coinflip",
  },
  {
    icon: "/assets/vectors/sidebar/rps.svg",
    iconActive: "/assets/vectors/sidebar/rps.svg",
    label: "RPS",
    to: "/rock-paper-scissor",
  },
  {
    icon: "/assets/vectors/sidebar/dice.svg",
    iconActive: "/assets/vectors/sidebar/dice.svg",
    label: "DICE",
    to: "/dice",
  },
  // {
  //   icon: "/assets/vectors/sidebar/game.svg",
  //   iconActive: "/assets/vectors/sidebar/game-active.svg",
  //   label: "GAME",
  //   to: "/game",
  // },
  // {
  //   icon: "/assets/vectors/sidebar/dashboard.svg",
  //   iconActive: "/assets/vectors/sidebar/dashboard-active.svg",
  //   label: "DASHBOARD",
  //   to: "/dashboard",
  // },
  // {
  //   icon: "/assets/vectors/sidebar/stake.svg",
  //   iconActive: "/assets/vectors/sidebar/stake-active.svg",
  //   label: "STAKE",
  //   to: "/stake",
  // },
  // {
  //   icon: "/assets/vectors/sidebar/referral.svg",
  //   iconActive: "/assets/vectors/sidebar/referral-active.svg",
  //   label: "REFERRAL",
  //   to: "/referral",
  // },
  // {
  //   icon: "/assets/vectors/sidebar/contest.svg",
  //   iconActive: "/assets/vectors/sidebar/contest-active.svg",
  //   label: "CONTEST",
  //   to: "/contest",
  // },
];

const MainLayout = () => {
  const [isChatActive, setIsChatActive] = useState(false);
  const [isLeftMenuActive, setIsLeftMenuActive] = useState(false);
  const [isRightMenuActive, setIsRightMenuActive] = useState(false);
  const [walletConnect, setWalletConnect] = useState(false);

  return (
    <div className="bg-dark flex min-h-[100vh]">
      <div
        className={clsx(
          "fixed flex-shrink-0 top-0 z-20 bg-background-1 xl:bg-transparent xl:static overflow-auto p-6 h-full w-[182px] transition-all",
          isLeftMenuActive ? " left-0" : "-left-[182px]"
        )}
      >
        {isLeftMenuActive && (
          <div
            className="fixed top-2 z-30 left-48 font-bison text-6xl text-end mb-6 cursor-pointer"
            onClick={() => setIsLeftMenuActive(false)}
          >
            &times;
          </div>
        )}

        {isRightMenuActive && (
          <div
            className="fixed top-2 z-30 right-60 font-bison text-6xl text-end mb-6 cursor-pointer"
            onClick={() => setIsRightMenuActive(false)}
          >
            &times;
          </div>
        )}

        <img
          className="w-full mb-6"
          src="/assets/imgs/common/logo.png"
          alt="logo"
        />

        <div className="p-2 bg-dark-400 rounded-[28px] flex flex-col justify-between items-center gap-5">
          <div className="w-full">
            {navItems.map((el, idx) => {
              return (
                <NavLink
                  key={"nav-left-item-" + idx}
                  to={el.to}
                  onClick={() => setIsLeftMenuActive(false)}
                  className={({ isActive }) => {
                    return clsx(
                      isActive ? classes.activeLink : "",
                      classes.link,
                      "rounded-3xl flex flex-col justify-center items-center py-5 transition-all"
                    );
                  }}
                >
                  <div className="w-8 h-8 relative">
                    <img
                      className={clsx(
                        "absolute left-0 top-0",
                        classes.inactive
                      )}
                      src={el.icon}
                      alt={el.label}
                    />
                    <img
                      className={clsx("absolute left-0 top-0", classes.active)}
                      src={el.iconActive}
                      alt={el.label}
                    />
                  </div>
                  <div className="font-bison text-xs mt-1 transition-all">
                    {el.label}
                  </div>
                </NavLink>
              );
            })}
          </div>

          <div className="w-full flex flex-col justify-center items-center ">
            <div className="w-full h-[1px] bg-grey-90 my-4" />
            <a href="#0" className="w-12 h-12 flex justify-center items-center">
              <img src="/assets/vectors/sidebar/telegram.svg" alt="telegram" />
            </a>
            <a href="#0" className="w-12 h-12 flex justify-center items-center">
              <img src="/assets/vectors/sidebar/x.svg" alt="x" />
            </a>
            
            {/* <button className="w-12 h-12 flex justify-center items-center mb-4">
              <img src="/assets/vectors/sidebar/logout.svg" alt="logout" />
            </button> */}
          </div>
        </div>
      </div>

      <div className="flex-grow ps-6 xl:ps-0 pe-6">
        <Topbar
          isChatActive={isChatActive}
          setIsChatActive={setIsChatActive}
          setIsLeftMenuActive={setIsLeftMenuActive}
          isRightMenuActive={isRightMenuActive}
          setIsRightMenuActive={setIsRightMenuActive}
          walletConnect={walletConnect}
          setWalletConnect={setWalletConnect}
        />
        <div className="pb-6">
          <Outlet />
        </div>
      </div>

      {isChatActive && (
        <div className="fixed z-20 top-0 right-0 bottom-0 overflow-auto 2xl:static bg-background-2 w-[292px] rounded-3xl mt-6 mb-4 2xl:mb-6 me-6 p-4 flex-shrink-0 flex flex-col justify-between gap-4 nice-scrollbar">
          <div>
            <div className="flex gap-2 justify-between pb-4">
              <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => setIsChatActive(false)}
              >
                <div className="w-10 h-10 relative top-1">
                  <img
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
                    src="/assets/vectors/topbar/chat.svg"
                    alt="chat"
                  />
                </div>
                <div className="font-bison text-base">Chat</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-main-9 rounded-[50%]"></div>
                <div className="text-grey-70 text-sm">Online: 24</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-4 flex items-start gap-3">
                <div>
                  <img src="/assets/vectors/chatlist/user-1.svg" alt="user" />
                  <div className="text-grey-70 text-xs mt-1">12:09</div>
                </div>
                <div className="bg-background-3 rounded-xl p-3">
                  <div className="text-grey-70 text-xs mb-2">0x5ae8...27A7</div>
                  <div className="text-sm">
                    Hi bro emprire inventory didnt show my knife
                  </div>
                </div>
              </div>
              <div className="mb-4 flex items-start gap-3">
                <div>
                  <img src="/assets/vectors/chatlist/user-2.svg" alt="user" />
                  <div className="text-grey-70 text-xs mt-1">12:09</div>
                </div>
                <div className="bg-background-3 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-grey-70 text-xs ">0x5ae8...27A7</div>
                    <div className="bg-main-10 px-3 py-1 text-xs text-black rounded-full">
                      Moderator
                    </div>
                  </div>
                  <div className="text-sm">
                    Hi bro emprire inventory didnt show my knife
                  </div>
                </div>
              </div>
              <div className="mb-4 flex items-start gap-3">
                <div>
                  <img src="/assets/vectors/chatlist/user-3.svg" alt="user" />
                  <div className="text-grey-70 text-xs mt-1">12:09</div>
                </div>
                <div className="bg-background-3 flex-grow rounded-xl p-3">
                  <div className="text-grey-70 text-xs mb-2">0x5ae8...27A7</div>
                  <div className="text-sm">Hiii</div>
                </div>
              </div>
              <div className="mb-4 flex items-start gap-3">
                <div>
                  <img src="/assets/vectors/chatlist/user-4.svg" alt="user" />
                  <div className="text-grey-70 text-xs mt-1">12:09</div>
                </div>
                <div className="bg-background-3 flex-grow rounded-xl p-3">
                  <div className="text-grey-70 text-xs mb-2">0x5ae8...27A7</div>
                  <div className="text-sm">whats poppin guys</div>
                </div>
              </div>
              <div className="mb-4 flex items-start gap-3">
                <div>
                  <img src="/assets/vectors/chatlist/user-5.svg" alt="user" />
                  <div className="text-grey-70 text-xs mt-1">12:09</div>
                </div>
                <div className="bg-background-3 flex-grow rounded-xl p-3">
                  <div className="text-grey-70 text-xs mb-2">0x5ae8...27A7</div>
                  <div className="text-sm">whats poppin guys</div>
                </div>
              </div>
              <div className="mb-4 flex items-start gap-3">
                <div>
                  <img src="/assets/vectors/chatlist/user-6.svg" alt="user" />
                  <div className="text-grey-70 text-xs mt-1">12:09</div>
                </div>
                <div className="bg-background-3 flex-grow rounded-xl p-3">
                  <div className="text-grey-70 text-xs mb-2">0x5ae8...27A7</div>
                  <div className="text-sm">whats poppin guys</div>
                </div>
              </div>
              <div className="mb-4 flex items-start gap-3">
                <div>
                  <img src="/assets/vectors/chatlist/user-7.svg" alt="user" />
                  <div className="text-grey-70 text-xs mt-1">12:09</div>
                </div>
                <div className="bg-background-3 flex-grow rounded-xl p-3">
                  <div className="text-grey-70 text-xs mb-2">0x5ae8...27A7</div>
                  <div className="text-sm">whats poppin guys</div>
                </div>
              </div>
              <div className="mb-4 flex items-start gap-3">
                <div>
                  <img src="/assets/vectors/chatlist/user-8.svg" alt="user" />
                  <div className="text-grey-70 text-xs mt-1">12:09</div>
                </div>
                <div className="bg-background-3 flex-grow rounded-xl p-3">
                  <div className="text-grey-70 text-xs mb-2">0x5ae8...27A7</div>
                  <div className="text-sm">whats poppin guys</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background-1 rounded-lg p-3 flex items-center gap-3 border-grey-100">
            <textarea
              className="bg-transparent outline-none text-xs flex-grow"
              name="message"
              id="message"
              rows="3"
              placeholder="Send message"
            ></textarea>
            <div className="w-8 h-8 rounded-lg bg-main-4 flex justify-center items-center">
              <img src="/assets/vectors/chatlist/send.svg" alt="send" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
