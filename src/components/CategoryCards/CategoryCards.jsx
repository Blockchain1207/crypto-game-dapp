import clsx from "clsx";
import { Link } from "react-router-dom";

const items = [
  {
    bg: "/assets/vectors/category-cards/card-1.svg",
    label: "ROULETTE",
    to: "/roulette",
  },
  {
    bg: "/assets/vectors/category-cards/card-8.svg",
    label: "COIN FLIP",
    to: "/coinflip",
  },
  {
    bg: "/assets/vectors/category-cards/card-11.svg",
    label: "DICE",
    to: "/dice",
  },
  {
    bg: "/assets/vectors/category-cards/card-12.svg",
    label: "ROCK PAPER SCRISSORS",
    to: "/rock-paper-scissor",
  },
  {
    bg: "/assets/vectors/category-cards/card-2.svg",
    label: "SLOTS",
    to: "/",
  },
  {
    bg: "/assets/vectors/category-cards/card-3.svg",
    label: "BACCARAT",
    to: "/",
  },
  {
    bg: "/assets/vectors/category-cards/card-4.svg",
    label: "HORSE RACING",
    to: "/",
  },
  {
    bg: "/assets/vectors/category-cards/card-5.svg",
    label: "PLINKO",
    to: "/",
  },
  {
    bg: "/assets/vectors/category-cards/card-6.svg",
    label: "KENO",
    to: "/",
  },
  {
    bg: "/assets/vectors/category-cards/card-7.svg",
    label: "MINES",
    to: "/",
  },
  {
    bg: "/assets/vectors/category-cards/card-9.svg",
    label: "WHEEL",
    to: "/",
  },
  {
    bg: "/assets/vectors/category-cards/card-10.svg",
    label: "MOON",
    to: "/",
  },
];

const CategoryCards = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "grid grid-cols-gamesGrid 2x:grid-cols-6 gap-6"
      )}
    >
      {items.map((el, idx) => {
        return (
          <Link
            key={"category-card-item-" + idx}
            to={el.to}
            className="block rounded-2xl relative overflow-hidden h-[210px]"
          >
            <img
              className="absolute left-0 top-0 w-full h-full object-cover"
              src={el.bg}
              alt={el.label}
            />
            <div className="relative py-4 px-6">
              <div className="font-bison">
                {el.label}
                {el.to === '/' && (
                  <>
                  <br/><br/>
                  <h2 className="text-[#E7100E]">Coming soon</h2>
                  </>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryCards;
