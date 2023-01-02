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
        <div className=" bg-white relative  xl:h-screen xl:overflow-hidden w-full">
          <div className="relative w-full pt-20 pb-32 lg:py-10 w-padding h-full flex lg:flex-row flex-col gap-10 xl:gap-24 items-center">
            <div className="w-3/12 hidden lg:flex absolute left-0 items-center bg-primary-yellow h-full w-padding custom-clippath"></div>

            <div className="relative z-10 lg:h-full xl:w-7/12 w-60 h-60 rounded-full lg:rounded-3xl shadow shadow-gray-700 overflow-hidden">
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
              <div className="flex w-full lg:w-[600px]  justify-center items-center lg:items-start lg:justify-start flex-col gap-5">
                <div className="font-bold flex flex-col content-center  uppercase font-Poppins tracking-wide text-xl sm:text-3xl md:leading-[52px] md:text-[42px] ">
                  <span className="text-primary-yellow flex items-center">
                    <span className="hidden xl:flex">-</span> I am prama pandit.
                  </span>
                  <span className="text-primary-dark">Frontend Developer</span>
                </div>

                <div className="text-primary-dark md:leading-9 text-center lg:text-left text-xs sm:text-sm md:text-base font-Open Sans ">
                  I am a Tunisian based web designer & front‑end developer
                  focused on crafting clean & user‑friendly experiences, I am
                  passionate about building excellent software that improves the
                  lives of those around me.
                </div>

                <Button />

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
      </AnimateLayout>
    </>
  );
};

export default Hero;
