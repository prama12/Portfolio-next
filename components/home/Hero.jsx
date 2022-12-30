import React from "react";
import Image from "next/image";
import AnimateLayout from "../layout/AnimateLayout";
import Button from "../commen/Button";
import Icon from "../../public/static/icons/arrow-right.svg"

const Hero = () => {
  return (
    <>
      <AnimateLayout>
        <div className="relative h-screen overflow-hidden w-full">
          <div className="relative w-full  py-10 w-padding h-full flex gap-24 items-center">
            <div className="w-3/12 absolute left-0 items-center bg-primary-yellow h-full w-padding custom-clippath"></div>

            <div className="relative z-10 h-full w-7/12 rounded-3xl shadow shadow-gray-700 overflow-hidden">
              <Image
                src="/static/images/profile.jpg"
                layout="fill"
                objectFit="cover"
                alt="image"
                quality={100}
              />

            </div>

            {/* text  */}
            <div className="flex w-full items-center justify-center">
              <div className="flex w-[600px] flex-col gap-5 text-primary-dark dark:text-primary-light">
                <div className="font-bold flex flex-col content-center  uppercase font-Poppins tracking-wide leading-[52px] text-[42px] ">
                  <span className="text-primary-yellow">
                    - I am prama pandit.
                  </span>
                  <span className="">
                    Frontend Developer
                  </span>
                </div>
                <div className=" leading-9 font-Open Sans ">
                  I am a Tunisian based web designer & front‑end developer focused
                  on crafting clean & user‑friendly experiences, I am passionate
                  about building excellent software that improves the lives of
                  those around me.
                </div>

                <div>
                  <Button text="more about me" icon={<Icon />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateLayout>
    </>
  );
};

export default Hero;
