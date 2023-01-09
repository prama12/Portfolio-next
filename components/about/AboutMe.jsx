import React, { useEffect, useState } from "react";
import Title from "../commen/Title";
import PersonalInfo from "./PersonalInfo";
import AnimateLayout from "../layout/AnimateLayout";

const AboutMe = () => {
  return (
    <AnimateLayout>
      <div className=" background-dark pb-10 w-padding max-w">
        <div className=" py-10">
          <Title firstdata="about" seconddata="me" backgroundtext="resume" />
        </div>
        <PersonalInfo />
      </div>
    </AnimateLayout>
  );
};

export default AboutMe;
