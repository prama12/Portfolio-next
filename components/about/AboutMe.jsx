import React, { useEffect, useState } from "react";
import Title from "../commen/Title";
import PersonalInfo from "./PersonalInfo";
import AnimateLayout from "../layout/AnimateLayout";

const AboutMe = () => {
  return (
    <AnimateLayout>
      <div className=" dark:bg-black pb-16 w-padding">
        <div className=" py-10">
          <Title firstdata="about" seconddata="me" backgroundtext="resume" />
        </div>
        <PersonalInfo />
      </div>
    </AnimateLayout>
  )
};

export default AboutMe;
