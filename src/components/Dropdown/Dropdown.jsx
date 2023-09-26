const Dropdown = ({ label }) => {
  return (
    <div>
      <div className="cursor-pointer flex justify-between items-center gap-2 bg-background-1 rounded-lg py-2 px-3 border border-solid border-background-3 text-base">
        {label}
        <img src="/assets/vectors/topbar/chevron-down.svg" alt="chevron" />
      </div>
    </div>
  );
};

export default Dropdown;
