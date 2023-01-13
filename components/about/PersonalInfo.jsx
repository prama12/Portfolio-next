import React from "react";
import Button from "../commen/Button";
import Header from "../commen/Header";
import about from "../data/about";
import DownloadIcon from "../../public/static/icons/download.svg";
import aboutcard from "../data/aboutcard";
import Card from "../commen/Card";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ScrollTrigger from "react-scroll-trigger";

const PersonalInfo = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className=" mx-auto w-full px-0 md:px-10 lg:px-0 lg:w-[980px] xl:w-[1100px]">
      <div className="w-full grid gap-5 mdd:grid-cols-2">
        <div className="w-full flex flex-col gap-4">
          {/* title  */}
          <div className="text-left">
            <Header title="Personal Infos" />
          </div>

          {/* image  */}
          <div className="flex  xsm:hidden w-full ">
            <div className="w-40 h-40 border-4 border-primary-dark dark:border-gray-600 relative  rounded-full overflow-hidden">
              <Image
                src="/static/images/profile.jpg"
                layout="fill"
                objectFit="cover"
                alt="image"
                quality={100}
              />
            </div>
          </div>

          {/* persional details  */}
          <div className="w-full flex justify-start ">
            <div className="grid grid-cols-2 gap-2 xsm:gap-3">
              {Object.keys(about).map((key, index) => {
                return (
                  <div
                    className=" w-full sm:gap-3  mdd:gap-0 lg:gap-3 font-OpenSans text-[15px] leading-[24px] overflow-auto flex flex-col sm:flex-row mdd:flex-col lg:flex-row "
                    key={index}
                  >
                    <span className="opacity-70 text-primary-dark dark:text-primary-light capitalize">
                      {key}:
                    </span>
                    <span
                      className="text-primary-dark dark:text-primary-light text-sm font-bold 
                    "
                    >
                      {about[key]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* cv download  */}
          <div className=" w-full text-sm md:text-base my-2 sm:my-6 ">
            <a href="/static/files/Prama-Pandit-cv.pdf" download={"Prama-CV"}>
              <Button text="Download CV" icon={<DownloadIcon />} />
            </a>
          </div>
        </div>
        {/* cards */}
        <div className="w-full">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className=" grid grid-cols-2 gap-x-7 gap-y-5 ">
              {aboutcard.map((data, index) => {
                return <Card key={index} {...data} counter={counterOn} />;
              })}
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
