import LandingPageTitle from "components/LandingPageTitle";

const About = () => {
  return (
    <section className="wrapper mt-10 sm:mt-[120px] relative isolate">
      <div className="w-full max-w-[663px] absolute right-0 bottom translate-y-1/2 bg-shadowRed rounded-full aspect-square translate-x-[30%] blur-[450px] -z-20"></div>
      <div className="contain flex-col justify-start items-center gap-6 sm:gap-10">
        <LandingPageTitle back="02" title="about deggen" />
        <div className="flex justify-center xl:flex-row flex-col items-center gap-12">
          <img
            src="/assets/imgs/landing/about.png"
            className="w-full max-w-[580px] 2xl:max-w-[768px] object-contain"
            alt=""
          />
          <div className="flex max-w-[480px] justify-start items-center text-center xl:text-left  xl:items-start flex-col gap-4">
            <h3 className="text-white font-bison font-normal text-2xl sm:text-[36px]">
              What is <span className="text-main-2">Deggen</span>?
            </h3>
            <p className="text-[#919CA2] text-base sm:text-lg leading-[1.5]">
              Lorem ipsum dolor sit amet consectetur. Consectetur sed viverra
              massa egestas nunc varius auctor. Penatibus ut elit sit commodo
              magna. Sem ultricies lorem et in gravida augue feugiat. Vestibulum
              egestas at erat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:mt-7 gap-6">
              <StatsBox title="Ticker" desc="$PROFIT" />
              <StatsBox title="Total Supply" desc="100M" />
              <StatsBox title="Total Buy/Sell" desc="5% / 5%" />
              <StatsBox title="LP Locked" desc="6 months" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const StatsBox = ({ title, desc }) => {
  return (
    <div className="bg-[#4740605E] border border-white border-solid border-opacity-5 rounded-2xl backdrop-blur-xl w-full py-4 min-h-[92px] flex justify-center items-center gap-1 flex-col text-center ">
      <p className="text-[#c4c4c4] text-base leading-[1.5]">{title}</p>
      <h4 className="text-[#D93535] text-2xl leading-[1.5] font-normal ">
        {desc}
      </h4>
    </div>
  );
};
