const LandingPageTitle = ({ back, title }) => {
  return (
    <div className="relative isolate w-full flex justify-center items-center">
      <h4 className="text-white text-opacity-10 font-normal font-bison leading-[1.5] text-[120px] md:text-[180px]">
        {back}
      </h4>
      <h2 className="absolute bottom-[25%] font-normal left-1/2 -translate-x-1/2 drop-shadow-landingTitle text-white text-[30px] sm:text-[40px] w-full text-center md:text-[58px] leading-[1.5] uppercase  ">
        {title}
      </h2>
    </div>
  );
};

export default LandingPageTitle;
