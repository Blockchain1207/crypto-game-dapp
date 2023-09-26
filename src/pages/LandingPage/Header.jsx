import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  useEffect(() => {
    const bgFunc = () => {
      if (window.scrollY > 0) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };
    window.addEventListener("scroll", bgFunc);
    return () => {
      window.removeEventListener("scroll", bgFunc);
    };
  }, []);

  return (
    <header
      className={`wrapper fixed top-0 transition-all duration-300 z-50 left-0 ${
        headerBg ? "bg-[#090909]" : "bg-transparent"
      }`}
    >
      {headerToggle && (
        <div className="w-full h-full z-[100] bg-black lg:hidden block bg-opacity-70 fixed top-0 left-0"></div>
      )}
      <div className="flex w-[90%] justify-between  items-center   h-[100px]">
        <Link to="/">
          <img
            src="/assets/imgs/common/logo.png"
            className="w-[134px] object-contain"
            alt=""
          />
        </Link>
        <nav
          className={`lg:static fixed top-0 ${
            headerToggle ? "right-0" : "-right-full"
          } w-full sm:max-w-[450px] px-[3rem] flex-col lg:flex-row pb-[3rem] pt-[6rem] z-[102] lg:bg-transparent bg-[#1a1a1a] h-full overflow-y-auto transition-all duration-700 lg:p-0 lg:max-w-none lg:w-auto lg:h-auto lg:overflow-visible  flex justify-start items-center sm:items-start lg:justify-center lg:items-center gap-8 2xl:gap-20 `}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-white uppercase relative isolate text-lg font-bison xl:text-xl "
          >
            Game
            <span className="bg-main-2 shadow-activeLink -bottom-6 w-full h-2 left-0 absolute">
              {" "}
            </span>
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-white uppercase relative isolate text-lg font-bison xl:text-xl "
          >
            Whitepaper
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-white uppercase relative isolate text-lg font-bison xl:text-xl "
          >
            Tokenomics
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-white uppercase relative isolate text-lg font-bison xl:text-xl "
          >
            FAQ
          </a>
          <div className="lg:hidden flex justify-center items-center sm:flex-row flex-col gap-5 xl:gap-2">
            <div className="flex justify-center items-center xl:gap-2 gap-5">
              <a href="#" target="blank">
                <img
                  src="/assets/imgs/common/telegram.png"
                  className="w-[46px] object-contain"
                  alt=""
                />
              </a>
              <a href="#" target="blank">
                <img
                  src="/assets/imgs/common/twitter.png"
                  className="w-[46px] object-contain"
                  alt=""
                />
              </a>
            </div>
            <Link
              to="/"
              className="relative isolate font-bison bg-main-1 grid place-items-center rounded-lg  text-base font-normal w-[164px] h-[46px] "
            >
              Deposit
            </Link>
          </div>
        </nav>
        <div className="hidden lg:flex justify-center items-center sm:flex-row flex-col gap-5 xl:gap-2">
          <div className="flex justify-center items-center xl:gap-2 gap-5">
            <a href="#" target="blank">
              <img
                src="/assets/imgs/common/telegram.png"
                className="w-[46px] object-contain"
                alt=""
              />
            </a>
            <a href="#" target="blank">
              <img
                src="/assets/imgs/common/twitter.png"
                className="w-[46px] object-contain"
                alt=""
              />
            </a>
          </div>
          <Link
            to="/"
            className="relative isolate font-bison bg-main-1 grid place-items-center rounded-lg  text-base font-normal w-[164px] h-[46px] "
          >
            Deposit
          </Link>
        </div>
        <button
          onClick={() => setHeaderToggle((prev) => !prev)}
          className="relative z-[104] lg:hidden block text-white"
        >
          {headerToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
