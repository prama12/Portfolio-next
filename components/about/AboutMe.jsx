import React, { useEffect, useState } from "react";
import Title from "../commen/Title";
import PersonalInfo from "./PersonalInfo";
import AnimateLayout from "../layout/AnimateLayout";

const AboutMe = () => {
  return (
    <AnimateLayout>
      <div className=" dark:bg-black pb-16">
      <Title firstdata="about" seconddata="me" backgroundtext="resume" />
      <PersonalInfo />
      </div>
    </AnimateLayout>
  )
};

export default AboutMe;
