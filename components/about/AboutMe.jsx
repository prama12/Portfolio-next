import React from "react";
import PersonalInfo from "./PersonalInfo";

const AboutMe = () => {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className=" relative text-[110px] font-extrabold tracking-[0.7rem] text-primary-dark opacity-10 ">RESUME</div>
        <div className="absolute text-6xl font-extrabold tracking-wide text-primary-dark "><span>ABOUT</span><span className=" text-primary-yellow">ME</span></div>
      </div>
      <PersonalInfo />
    </>
  )
};

export default AboutMe;
