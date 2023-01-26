import Header from "../commen/Header";
import ProgressBar from "../commen/ProgressBar";
import skills from "../data/skills";

const Skills = () => {
  return (
    <>
      <div className="max-w-[1000px] mx-auto flex flex-col gap-5 sm:gap-10">
        <div className=" flex justify-center">
          <Header title="MY SKILLS" />
        </div>

        <div className=" grid grid-cols-2 px-5 xsm:px-10 md:grid-cols-4 gap-20 md:gap-10 lg:gap-20 w-full ">
          {skills.map((data, index) => {
            console.log("skill", data);
            return <ProgressBar key={index} {...data} />;



            
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
