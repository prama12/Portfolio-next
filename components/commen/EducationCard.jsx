import JobIcon from "../../public/static/icons/job.svg";
import Dash from "../../public/static/icons/dash.svg";

const EducationCard = ({ description, uni, date, degree }) => {
  return (
    <>
      <div className="grid grid-cols-12 h-full items-start gap-4">
        <div className="flex col-span-1 justify-center items-center flex-col">
          <div className=" w-fit h-fit  text-white text-xl bg-primary-yellow p-3 rounded-full">
            <JobIcon />
          </div>
          <div className="h-full w-[1px] opacity-60 bg-primary-dark dark:bg-primary-light"></div>
        </div>

        <div className="col-span-11 flex flex-col gap-3">
          <div className=" text-primary-dark dark:text-primary-light font-semibold bg-gray-100 dark:bg-primary-dark px-2 mb-2 rounded-2xl w-fit text-sm ">
            {date}
          </div>
          <div className="font-semibold uppercase text-base leading-5  text-primary-dark dark:text-primary-light ">
            <div className="">
              <span className="text-dark-background dark:text-white pr-1">
                {degree}
              </span>
              <span className="opacity-90 text-2xl">- </span>
              {/* <Dash className="w-fit opacity-90 " /> */}
              <span className="opacity-90 ">{uni}</span>
            </div>
          </div>
          <div className=" text-primary-dark opacity-90 dark:text-primary-light text-sm">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
