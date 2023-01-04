import React from "react";

const Title = ({ firstdata, seconddata, backgroundtext }) => {
  return (
    <div className="relative flex justify-center items-center overflow-hidden">
      <div className=" relative text-7xl md:text-[110px] font-extrabold  tracking-wider text-primary-dark dark:text-primary-light opacity-10 uppercase">
        {backgroundtext}
      </div>
      <div className="absolute text-4xl sm:text-6xl font-extrabold tracking-wide text-primary-dark dark:text-primary-light uppercase ">
        <span>{firstdata}</span>
        <span className=" text-primary-yellow uppercase">{seconddata}</span>
      </div>
    </div>
  );
};

export default Title;
