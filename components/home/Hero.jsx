import React from "react";
import Image from "next/image";
import herodata from "../data/herodata";

const Hero = () => {
  const { greetings, name, work } = herodata
  return (
    <>
      <div className="max-w padding h-screen border-2 ">
        <div className="w-full h-full md:flex justify-between items-center">
          <div className=" flex flex-col  ">
            <span className=" text-6xl">{greetings}</span><span>{name}</span><span>{work}</span>
          </div>
          <div className=" ">
            <Image src="/static/images/profile.jpg" width="300" height="300" alt="profile_pic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
