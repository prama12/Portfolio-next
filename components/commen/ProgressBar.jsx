import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ name, percent }) => {
  const [percentsetter, setPerentsetter] = useState(1);
  useEffect(() => {
    setPerentsetter(percent);
  }, [percent]);
  return (
    <div className=" w-full p-4 sm:p-8 md:p-8 lg:p-12 col-span-6 md:col-span-3 flex flex-col items-center gap-3">
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
        strokeWidth={8}
        value={percentsetter}
        maxValue={100}
        text={`${percentsetter}%`}
      />
      <div className=" font-medium text-primary-dark dark:text-primary-light">
        {name.toUpperCase()}
      </div>
    </div>
  );
};

export default ProgressBar;
