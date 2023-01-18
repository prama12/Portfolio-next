import JobIcon from "../../public/static/icons/job.svg";

const EducationCard = ({ description, uni, date, degree }) => {
  return (
    <>
      <div className="h-fit relative flex items-start gap-5 sm:gap-8">
        <div className="absolute top-0 left-0 w-fit h-fit z-[50]  text-white text-lg sm:text-xl bg-primary-yellow p-2 sm:p-3 rounded-full">
          <JobIcon />
        </div>

        <div className=" w-[1px] ml-[17px] sm:ml-[22px] h-full opacity-60 bg-primary-dark dark:bg-primary-light"></div>
        <div className="flex flex-col mt-2 gap-3">
          <div className=" text-primary-dark dark:text-primary-light font-semibold bg-gray-100 dark:bg-primary-dark px-2 mb-2 rounded-2xl w-fit text-xs sm:text-sm ">
            {date}
          </div>
          <div className="font-semibold uppercase text-sm sm:text-base leading-5  text-primary-dark dark:text-primary-light ">
            <span className="text-dark-background dark:text-white pr-1">
              {degree}
            </span>
            <span className="opacity-90 text-xl sm:text-2xl">- </span>
            <span className="opacity-90 ">{uni}</span>
          </div>
          <div className=" text-primary-dark opacity-70 dark:text-primary-light text-xs sm:text-sm">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
