import React from "react";
import Image from "next/image";
import AnimateLayout from "../layout/AnimateLayout";
import Button from "../commen/Button";
import Icon from "../../public/static/icons/arrow-right.svg";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const NavToAbout = () => {
    router.push("/about");
  };
  return (
    <>
      <AnimateLayout>
        <div className="background-dark ">
          <div className="relative animation  lg:h-screen lg:overflow-hidden lg:overflow-y-scroll no-scrollbar w-full sm:w-[500px] md:w-[700px] mx-auto lg:w-full">
            <div className="relative w-full pt-8 pb-20 lg:py-10 w-padding h-full flex lg:flex-row flex-col gap-10 lg:gap-5 xl:gap-24 items-center">
              <div className="w-80 hidden lg:flex absolute left-0 items-center bg-primary-yellow h-full w-padding custom-clippath"></div>
              <div className="relative z-10 lg:h-full lg:w-8/12 xl:w-7/12 w-56 h-56 sm:w-64 sm:h-64 border-4 border-opacity-60 dark:border-opacity-60 border-primary-light dark:border-primary-dark lg:border-none  rounded-full lg:rounded-3xl shadow shadow-gray-700 overflow-hidden">
                <Image
                  src="/static/images/profile.jpg"
                  fill
                  objectFit="cover"
                  alt="image"
                  quality={100}
                />
              </div>

              {/* text  */}
              <div className="flex w-full max-w items-center justify-center">
                <div className="flex w-full lg:w-[500px] xl:w-[700px]  justify-center items-center lg:items-start lg:justify-start flex-col gap-5">
                  <div className="font-bold flex flex-col items-center lg:items-start  uppercase font-Poppins tracking-wide text-[26px] sm:text-3xl leading-[30px] md:leading-[52px] md:text-[42px] ">
                    <span className="text-primary-yellow flex items-center">
                      <span className="hidden xl:flex">-</span> I am Prama
                      Pandit.
                    </span>

                    <span className="text-primary-dark dark:text-primary-light">
                      web developer
                    </span>
                  </div>
                  <div className="text-primary-dark text-center opacity-90 font-medium lg:text-left text-sm md:text-base font-OpenSans dark:text-primary-light ">
                    <div className="leading-[30px] ">
                      I am a Frontend|Web developer from Nepal focused on
                      crafting clean & user???friendly experiences and robust
                      systems, I am passionate about building excellent software
                      that improves the lives of those around me.
                    </div>
                  </div>
                  <div>
                    <Button
                      func={NavToAbout}
                      text="more about me"
                      icon={<Icon />}
                    />
                  </div>
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
