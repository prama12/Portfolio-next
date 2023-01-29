import Header from "../commen/Header";
import ProgressBar from "../commen/ProgressBar";
import skills from "../data/skills";

const Skills = () => {
  return (
    <>
      <div className=" mx-auto w-full lg:w-[990px] xl:w-[1100px] flex flex-col gap-5 sm:gap-10">
        <div className=" flex justify-center">
          <Header title="MY SKILLS" />
        </div>

        <div className=" grid grid-cols-2 px-5 xsm:px-10 xxsm:grid-cols-3 md:grid-cols-4 gap-10 xsm:gap-x-24 md:gap-20 lg:gap-x-32 w-full ">
          {skills.map((data, index) => {
            {
              /* console.log("skill", data); */
            }
            return <ProgressBar key={index} {...data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
