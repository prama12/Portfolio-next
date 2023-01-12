import Title from "../commen/Title";
import PersonalInfo from "./PersonalInfo";
import AnimateLayout from "../layout/AnimateLayout";
import Skills from "./Skills";
import EducationExperience from "./EducationExperience";

const AboutMe = () => {
  return (
    <AnimateLayout>
      <div className=" background-dark lg:pb-16 pb-28 w-padding max-w">
        <div className=" py-10">
          <Title firstdata="about" seconddata="me" backgroundtext="resume" />
        </div>
        <div className="flex flex-col gap-14 sm:gap-20">
          <PersonalInfo />
          <Skills />
          <EducationExperience />
        </div>
      </div>
    </AnimateLayout>
  );
};

export default AboutMe;
