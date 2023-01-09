import React from "react";

const Header = ({ title }) => {
  return (
    <div className=" text-primary-dark uppercase dark:text-primary-light font-bold text-lg sm:text-2xl leading-[31px] md:text-[26px] tracking-wide ">
      {title}
    </div>
  );
};

export default Header;
