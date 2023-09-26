import clsx from "clsx";
import LandingPageTitle from "components/LandingPageTitle";

const Games = () => {
  const items = [
    {
      bg: "/assets/vectors/category-cards/card-1.svg",
      label: "ROULETTE",
    },
    {
      bg: "/assets/vectors/category-cards/card-2.svg",
      label: "SLOTS",
    },
    {
      bg: "/assets/vectors/category-cards/card-3.svg",
      label: "BACCARAT",
    },
    {
      bg: "/assets/vectors/category-cards/card-4.svg",
      label: "HORSE RACING",
    },
    {
      bg: "/assets/vectors/category-cards/card-5.svg",
      label: "PLINKO",
    },
    {
      bg: "/assets/vectors/category-cards/card-6.svg",
      label: "KENO",
    },
    {
      bg: "/assets/vectors/category-cards/card-7.svg",
      label: "MINES",
    },
    {
      bg: "/assets/vectors/category-cards/card-8.svg",
      label: "COIN FLIP",
    },
    {
      bg: "/assets/vectors/category-cards/card-9.svg",
      label: "WHEEL",
    },
    {
      bg: "/assets/vectors/category-cards/card-10.svg",
      label: "MOON",
    },
    {
      bg: "/assets/vectors/category-cards/card-11.svg",
      label: "DICE",
    },
    {
      bg: "/assets/vectors/category-cards/card-12.svg",
      label: "ROCK PAPER SCRISSORS",
    },
  ];
  return (
    <section className="wrapper mt-12 sm:mt-[120px] relative isolate">
      <div className="w-full max-w-[663px] absolute left-0 top-32 bg-shadowRed rounded-full aspect-square -translate-x-[30%] blur-[450px] -z-20"></div>
      <div className="contain justify-start items-center flex-col gap-3">
        <LandingPageTitle back="01" title="all game" />
        <div
          className={clsx(
            "grid grid-cols-gamesGrid place-items-center w-full gap-6"
          )}
        >
          {items.map((el, idx) => {
            return (
              <div
                key={"category-card-item-" + idx}
                className="rounded-2xl w-full max-w-[210px] relative overflow-hidden h-[210px]"
              >
                <img
                  className="absolute left-0 top-0 w-full h-full object-cover"
                  src={el.bg}
                  alt={el.label}
                />
                <div className="relative py-4 px-6">
                  <div className="font-bison">{el.label}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center flex-wrap items-center gap-4 mt-3">
          <button className=" w-6 aspect-square rounded-full grid place-items-center">
            <span className="bg-white rounded-full w-1.5 aspect-square"></span>
          </button>
          <button className=" border border-solid border-main-2 w-6 aspect-square rounded-full grid place-items-center">
            <span className="bg-white rounded-full w-1.5 aspect-square"></span>
          </button>
          <button className=" w-6 aspect-square rounded-full grid place-items-center">
            <span className="bg-white rounded-full w-1.5 aspect-square"></span>
          </button>
          <button className=" w-6 aspect-square rounded-full grid place-items-center">
            <span className="bg-white rounded-full w-1.5 aspect-square"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Games;
