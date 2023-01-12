import { useRef, useEffect, useState } from "react";
import Header from "../commen/Header";
import ProgressBar from "../commen/ProgressBar";
import skills from "../data/skills";

const Skills = () => {
  const skillref = useRef();
  const [myElementIsVisible, updateMyElementIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      updateMyElementIsVisible(entry.isIntersecting);
    });

    observer.observe(skillref.current);
  }, []);
  return (
    <>
      <div className="max-w-[1000px] mx-auto flex flex-col gap-10">
        <div className=" flex justify-center">
          <Header title="MY SKILLS" />
        </div>
        <div ref={skillref} className=" grid grid-cols-12  w-full ">
          {myElementIsVisible &&
            skills.map((data, index) => {
              return <ProgressBar key={index} {...data} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Skills;
