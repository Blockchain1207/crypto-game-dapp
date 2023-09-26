const Hero = () => {
  return (
    <section className="wrapper relative isolate">
      <div className="w-full max-w-[663px] absolute right-0 top-20 bg-shadowRed rounded-full aspect-square translate-x-[30%] blur-[450px] -z-20"></div>
      <img
        src="/assets/imgs/landing/hero-bg.png"
        className="absolute object-cover w-full top-1/2 -translate-y-1/2 -z-10 left-0"
        alt=""
      />
      <div className="contain justify-start pt-[100px] lg:pt-[140px] items-center flex-col md:gap-10 gap-5">
        <img
          src="/assets/imgs/landing/hero.png"
          className="w-full max-w-[1060px] object-contain"
          alt=""
        />
        <div className="flex justify-center xl:flex-row flex-col items-start md:items-center gap-6">
          <div className="flex justify-center gap-2 border border-solid border-[#10D7D8] rounded-xl bg-landingHeroDetails  backdrop-blur-md px-3 sm:px-8 py-3 items-center">
            <a
              href="mailto:Support@profit.io"
              target="blank"
              className="text-sm md:text-lg text-[#A4ABB1] break-all"
            >
              Mail: Support@profit.io
            </a>
            <img
              src="/assets/imgs/landing/copy.svg"
              className="w-6 object-contain cursor-pointer"
              onClick={() =>
                window.navigator.clipboard.writeText("Support@profit.io")
              }
              alt=""
            />
          </div>
          <div className="flex justify-center gap-2 border border-solid border-[#10D7D8] rounded-xl bg-landingHeroDetails  backdrop-blur-md px-3 sm:px-8 py-3 items-center">
            <p className="text-sm md:text-lg text-[#A4ABB1] break-all">
              Contract: 0XCC0D1B36D88FD8F5F26FD00E4E769E2DAB4E3E07
            </p>
            <img
              src="/assets/imgs/landing/copy.svg"
              className="w-6 object-contain cursor-pointer"
              onClick={() =>
                window.navigator.clipboard.writeText(
                  "0XCC0D1B36D88FD8F5F26FD00E4E769E2DAB4E3E07"
                )
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
