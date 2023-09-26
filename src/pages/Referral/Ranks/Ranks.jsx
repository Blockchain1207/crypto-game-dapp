const Ranks = () => {
  return (
    <>
      <h4 className="mt-12 mb-[54px]">Ranks</h4>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="relative bg-background-2 border border-solid border-grey-90 rounded-2xl py-12 pb-8 px-8 flex flex-col justify-center items-center">
          <div className="absolute -translate-y-1/2 bg-background-2 flex justify-center items-center left-1/2 -translate-x-1/2 top-0 w-[60px] h-[60px] rounded-lg border border-solid border-grey-90 font-bison text-grey-60">
            01
          </div>
          <img
            className="w-[100px]"
            src="/assets/vectors/referral/rank-1.svg"
            alt="rank"
          />
          <div className="font-bison mt-3 mb-1 text-base">Friend Finder</div>
          <div className="font-bison text-base text-main-9">Reached</div>
          <div className="text-center py-3 px-4 rounded-lg bg-background-3 text-sm mt-3">
            5% of the edge of the game in WLP
          </div>
        </div>
        <div className="relative bg-background-2 border border-solid border-grey-90 rounded-2xl py-12 pb-8 px-8 flex flex-col justify-center items-center">
          <div className="absolute -translate-y-1/2 bg-background-2 flex justify-center items-center left-1/2 -translate-x-1/2 top-0 w-[60px] h-[60px] rounded-lg border border-solid border-grey-90 font-bison text-grey-60">
            02
          </div>
          <img
            className="w-[100px]"
            src="/assets/vectors/referral/rank-2.svg"
            alt="rank"
          />
          <div className="font-bison mt-3 mb-1 text-base">Social Butterfly</div>
          <div className="font-bison text-base-9">
            $57 <span className="text-grey-60">/ $250,000</span>
          </div>
          <div className="text-center py-3 px-4 rounded-lg bg-background-3 text-sm mt-3">
            7.5% of the edge of the game in WLP
          </div>
        </div>
        <div className="relative bg-background-2 border border-solid border-grey-90 rounded-2xl py-12 pb-8 px-8 flex flex-col justify-center items-center">
          <div className="absolute -translate-y-1/2 bg-background-2 flex justify-center items-center left-1/2 -translate-x-1/2 top-0 w-[60px] h-[60px] rounded-lg border border-solid border-grey-90 font-bison text-grey-60">
            03
          </div>
          <img
            className="w-[100px]"
            src="/assets/vectors/referral/rank-3.svg"
            alt="rank"
          />
          <div className="font-bison mt-3 mb-1 text-base">Friend Finder</div>
          <div className="font-bison text-base text-grey-60">
            <span className=""> $0 /</span> $250,000
          </div>
          <div className="text-center py-3 px-4 rounded-lg bg-background-3 text-sm mt-3">
            10% of the edge of the game in WLP
          </div>
        </div>
        <div className="relative bg-background-2 border border-solid border-grey-90 rounded-2xl py-12 pb-8 px-8 flex flex-col justify-center items-center">
          <div className="absolute -translate-y-1/2 bg-background-2 flex justify-center items-center left-1/2 -translate-x-1/2 top-0 w-[60px] h-[60px] rounded-lg border border-solid border-grey-90 font-bison text-grey-60">
            04
          </div>
          <img
            className="w-[100px]"
            src="/assets/vectors/referral/rank-4.svg"
            alt="rank"
          />
          <div className="font-bison mt-3 mb-1 text-base">Influencer</div>
          <div className="font-bison text-base text-grey-60">
            <span className="">$0 /</span> $250,000
          </div>
          <div className="text-center py-3 px-4 rounded-lg bg-background-3 text-sm mt-3">
            15% of the edge of the game in WLP
          </div>
        </div>
      </div>
    </>
  );
};

export default Ranks;
