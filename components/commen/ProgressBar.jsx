import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ name, percent }) => {
  const [percentsetter, setPerentsetter] = useState(1);
  useEffect(() => {
    setPerentsetter(percent);
  }, [percent]);
  return (
    <div className=" w-full p-5 xsm:px-10 xxsm:px-14 sm:px-24 md:px-12 col-span-6 md:col-span-3 flex flex-col items-center gap-3">
      <CircularProgressbar
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: "butt",
          textSize: "16px",
          pathTransitionDuration: 2,
          pathColor: `#ffb400`,
          textColor: "#666666",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
        strokeWidth={7}
        value={percentsetter}
        maxValue={100}
        text={`${percentsetter}%`}
      />
      <div className=" font-medium uppercase text-xs sm:text-sm md:text-base text-primary-dark dark:text-primary-light">
        {name}
      </div>
    </div>
  );
};

export default ProgressBar;
