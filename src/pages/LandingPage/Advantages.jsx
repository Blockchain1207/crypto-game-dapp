const Advantages = () => {
  return (
    <section className="wrapper mt-14 sm:mt-[120px]">
      <div className="contain flex-col justify-start items-center gap-2 sm:gap-10">
        <h2 className="text-xl md:text-[30px] md:leading-[1.5] xl:text-[42px] font-bison font-normal text-white text-center uppercase">
          Degen IS THE MOST ADVANCED <br className="md:block hidden" />
          <span className="text-main-2">decentralized</span> on-chain casino
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 place-items-center gap-6 items-start">
          <AdvantageBox
            heading="Less Downtime"
            desc="Less down time for seamless transactions"
            img="/assets/imgs/landing/advantage1.png"
          />
          <AdvantageBox
            heading="Less Downtime"
            classes="2xl:mt-10"
            desc="Less down time for seamless transactions"
            img="/assets/imgs/landing/advantage2.png"
          />
          <AdvantageBox
            heading="Less Downtime"
            desc="Less down time for seamless transactions"
            img="/assets/imgs/landing/advantage3.png"
          />
          <AdvantageBox
            classes="2xl:mt-10"
            heading="Less Downtime"
            desc="Less down time for seamless transactions"
            img="/assets/imgs/landing/advantage4.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;

const AdvantageBox = ({ img, heading, desc, classes }) => {
  return (
    <div
      className={`flex justify-start items-center flex-col p-6 border border-solid  border-black border-opacity-0 relative isolate bg-advantageBox rounded-xl gap-4 w-full max-w-[350px] text-center ${classes}`}
    >
      <img src={img} className="w-[200px] object-contain " alt="" />
      <h4 className="text-white text-2xl uppercase font-bison font-normal leading-[1.25] ">
        {heading}
      </h4>
      <p className="text-white text-lg leading-[1.5]">{desc}</p>
    </div>
  );
};
