import React from "react";

const Title = ({ firstdata, seconddata, backgroundtext }) => {
  return (
    <div className="relative flex justify-center items-center overflow-hidden">
      <div
        data-name={backgroundtext}
        className="text-head cursor-pointer relative text-[54px] sm:text-7xl mdd:text-[110px] leading-[77px] font-Poppins font-bold tracking-wider sm:tracking-[10px] text-primary-dark dark:text-primary-light opacity-10 dark:opacity-20 uppercase"
      >
        {backgroundtext}
      </div>
      <div className="absolute text-3xl mdd:text-[55px] font-bold tracking-wide text-primary-dark font-Poppins dark:text-primary-light uppercase ">
        <span>{firstdata}</span>
        <span className=" text-primary-yellow uppercase">{seconddata}</span>
      </div>
    </div>
  );
};

export default Title;
