import EducationCard from "../commen/EducationCard";
import Header from "../commen/Header";
import { education, experience } from "../data/experienceeducation";

const EducationExperience = () => {
  return (
    <>
      <div className="flex flex-col gap-20 mx-auto max-w-[1100px]">
        <div className=" text-center">
          <Header title="experience & education" />
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          <div className="w-full flex-col gap-8 ">
            {experience.map((data, index) => {
              return <EducationCard {...data} key={index} />;
            })}
          </div>
          <div className="w-full flex flex-col gap-8 ">
            {education.map((data, index) => {
              return <EducationCard {...data} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationExperience;