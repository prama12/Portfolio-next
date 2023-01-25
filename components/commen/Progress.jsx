import React from "react";

import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Progress = ({ name, percent }) => {
  return (
    <>
      <VisibilitySensor>
        {({ isVisible }) => {
          const percentage = isVisible ? percent : 0;
          return (
            <div className="w-fit flex gap-3 flex-col items-center justify-center">
              <CircularProgressbar
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "12px",
                  pathTransitionDuration: 1,
                  pathColor: `#ffb400`,
                  textColor: "#666666",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
                value={percentage}
                text={`${percentage}%`}
              />
              <div className="font-medium uppercase text-xs sm:text-sm md:text-base text-primary-dark dark:text-primary-light">
                {name}
              </div>
            </div>
          );
        }}
      </VisibilitySensor>
    </>
  );
};

export default Progress;
