import LandingPageTitle from "components/LandingPageTitle";

const Roadmap = () => {
  return (
    <section className="wrapper mt-10 sm:mt-[120px] relative isolate">
      <div className="w-full max-w-[663px] absolute left-0 top-0 opacity-30 bg-shadowRed rounded-full aspect-square -translate-x-[30%] blur-[450px] -z-20"></div>
      <div className="contain justify-start items-center flex-col gap-6 md:gap-10">
        <LandingPageTitle back="03" title="Roadmap" />
        <div className="grid grid-cols-1 xl:gap-0 gap-12 xl:grid-cols-5 justify-start xl:place-items-center items-start w-full relative isolate">
          <div className="w-0.5 xl:w-full absolute top-0 xl:left-0 left-2 xl:top-20 h-full xl:h-0.5 bg-[#232C35] -z-10"></div>
          <RoadmapItem
            phase="Phase I"
            title="Basic"
            points={["Idea & Concep", "Website & Smart Contract"]}
          />
          <RoadmapItem
            phase="Phase II"
            title="Preparing for FL"
            points={[
              "KYC by Pinksale",
              "Audit",
              "Ads for Fairlaunch",
              "Fairlaunch on Pinksale",
            ]}
          />
          <RoadmapItem
            phase="Phase III"
            title="Launch Side"
            points={[
              "Ads for Launch",
              "Launch on PCS",
              "Listing on CoinGecko",
              "Listing on CoinMarketCap",
            ]}
          />
          <RoadmapItem
            phase="Phase IV"
            title="Utility Side"
            points={["Minting NFTs", "Open Staking App"]}
          />
          <RoadmapItem
            phase="Phase V"
            title="CEX Listings"
            points={["CEX Listing on Tier 1/2"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

const RoadmapItem = ({ phase, title, points }) => {
  return (
    <div className="flex relative isolate justify-start items-start w-full xl:w-auto pl-10 xl:items-center flex-col gap-6 xl:gap-[43px]">
      <h4 className="text-[#919CA2] uppercase text-xl font-normal">{phase}</h4>
      <div className="bg-[#232C35] xl:static absolute left-0 top-1 border-2 w-5 aspect-square border-solid border-main-2 rounded-full"></div>
      <div className="flex justify-start items-start xl:items-center flex-col xl:text-center gap-2">
        <h5 className="mb-2 uppercase text-white font-normal text-lg 2xl:text-xl">
          {title}
        </h5>
        {points.map((elem, idx) => {
          return (
            <p
              className="text-[#919CA2] text-base 2xl:text-lg font-normal"
              key={elem + idx}
            >
              {elem}
            </p>
          );
        })}
      </div>
    </div>
  );
};
