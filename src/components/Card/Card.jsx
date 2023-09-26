import clsx from "clsx";

const Card = ({
  rounded,
  roundedMd,
  roundedLg,
  className,
  wAuto,
  children,
}) => {
  return (
    <div
      className={clsx(
        "bg-background-2 w-[calc(100vw-48px)] overflow-auto",
        wAuto || "sm:w-auto",
        rounded && "rounded-2xl",
        roundedMd && "rounded-3xl",
        roundedLg && "rounded-[40px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
