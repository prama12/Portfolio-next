import React, { useEffect, useState } from "react";
import Title from "../commen/Title";
import PersonalInfo from "./PersonalInfo";

const AboutMe = () => {
  const [animator, setAnimator] = useState(false)
  useEffect(() => {
    setAnimator(true)
  }, [])
  return (
    <div className=" bg-gray-100 w-full h-screen">
      <div className={` relative bg-white overflow-y-scroll w-full ${animator ? " h-screen " : "  h-0  "} ease-out transition-all duration-1000 `}>
        <div className={`${animator ? "opacity-100 mt-0" : "opacity-0 mt-20"} delay-300 duration-1000`}>
          <Title firstdata="about" seconddata="me" backgroundtext="resume" />
          <PersonalInfo />
        </div>
      </div>
    </div>
  )
};

export default AboutMe;
