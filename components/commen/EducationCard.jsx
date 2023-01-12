import JobIcon from "../../public/static/icons/job.svg";

const EducationCard = ({ description, uni, date, degree }) => {
  return (
    <>
      <div className="flex h-full  items-start gap-4">
        <div className="flex  justify-center items-center flex-col">
          <div className=" w-fit h-fit  text-white text-xl bg-primary-yellow p-3 rounded-full">
            <JobIcon />
          </div>
          <div className="h-16 w-[1px] opacity-60 bg-primary-dark dark:bg-primary-light"></div>
        </div>

        <div className="flex flex-col gap-3">
          <div className=" text-primary-dark dark:text-primary-light font-semibold bg-gray-100 dark:bg-primary-dark px-2 mb-2 rounded-2xl w-fit text-sm ">
            {date}
          </div>
          <div className=" sm:flex  items-center ">
            <div className=" font-semibold uppercase text-lg text-primary-dark dark:text-primary-light mr-2">
              {degree}
            </div>
            <div className="hidden sm:block w-6 bg-primary-dark dark:bg-primary-light h-[2px]"></div>
            <div className=" ml-3 uppercase font-semibold text-gray-500 dark:text-primary-light">
              {uni}
            </div>
          </div>
          <div className=" text-primary-dark text-sm">{description}</div>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
