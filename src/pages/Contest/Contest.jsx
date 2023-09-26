const items = [
  {
    money: "10,000",
    dates: "22 Sep - 29 Sep",
    title: "Weekly Contest #1",
    img: "/assets/imgs/contest/contest-1.png",
  },
  {
    money: "10,000",
    dates: "22 Sep - 29 Sep",
    title: "Weekly Contest #1",
    img: "/assets/imgs/contest/contest-2.png",
  },
  {
    money: "10,000",
    dates: "22 Sep - 29 Sep",
    title: "Weekly Contest #1",
    img: "/assets/imgs/contest/contest-3.png",
  },
  {
    money: "10,000",
    dates: "22 Sep - 29 Sep",
    title: "Weekly Contest #1",
    img: "/assets/imgs/contest/contest-4.png",
  },
  {
    money: "10,000",
    dates: "22 Sep - 29 Sep",
    title: "Weekly Contest #1",
    img: "/assets/imgs/contest/contest-5.png",
  },
  {
    money: "10,000",
    dates: "22 Sep - 29 Sep",
    title: "Weekly Contest #1",
    img: "/assets/imgs/contest/contest-6.png",
  },
];

const Contest = () => {
  return (
    <div>
      <h4 className="mb-8">Referral Contest</h4>

      <div className="grid lg:grid-cols-2 gap-8">
        {items.map((el, idx) => {
          return (
            <div
              key={"referral-contest-" + idx}
              className="flex flex-col sm:flex-row justify-between bg-background-2 rounded-2xl"
            >
              <div className="p-8">
                <div className="flex">
                  <div className="flex items-center gap-1 rounded-full bg-main-2 py-2 px-3 h-6">
                    <img
                      className="w-4"
                      src="/assets/vectors/referral-contest/trophee.svg"
                      alt="trophee"
                    />
                    <div className="text-xs">${el.money}</div>
                  </div>
                </div>
                <div className="text-grey-60 mt-3 mb-2 text-sm">{el.dates}</div>
                <div className="text-xl font-bison">{el.title}</div>
              </div>
              <img src={el.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contest;
