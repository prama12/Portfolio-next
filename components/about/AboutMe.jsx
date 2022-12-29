import React, { useEffect, useState } from "react";
import Title from "../commen/Title";
import PersonalInfo from "./PersonalInfo";
import AnimateLayout from "../layout/AnimateLayout";

const AboutMe = () => {
  return (
    <AnimateLayout>
      <Title firstdata="about" seconddata="me" backgroundtext="resume" />
      <PersonalInfo />
    </AnimateLayout>
  )
};

export default AboutMe;
