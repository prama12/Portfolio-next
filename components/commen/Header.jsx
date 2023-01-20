import React from "react";

const Header = ({ title }) => {
  return (
    <div className="cursor-pointer text-primary-dark relative uppercase dark:text-primary-light font-bold  text-xl xxsm:text-2xl leading-[31px] md:text-[26px] tracking-wide ">
      {title}
    </div>
  );
};

export default Header;
