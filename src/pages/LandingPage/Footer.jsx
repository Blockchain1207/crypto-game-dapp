const Footer = () => {
  return (
    <footer className="wrapper border-t bg-[#47406026] relative   border-solid border-main-2 mt-[100px] sm:mt-[200px]">
      <div className="flex w-[90%] sm:flex-row flex-col sm:gap-0 gap-5 justify-between items-center h-auto py-5 sm:py-0 sm:h-[80px]">
        <p className="text-white sm:text-base text-sm text-center font-montserrat">
          DEGEN © 2023. ALL RIGHTS RESERVED
        </p>
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
      </div>
    </footer>
  );
};

export default Footer;
