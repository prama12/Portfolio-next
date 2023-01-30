import CountUp from "react-countup";

const Card = ({ number, title, counter }) => {
  return (
    <div className=" w-full  bg-transparent flex flex-col border-t dark:border-primary-dark border-primary-light  shadow rounded-md dark:shadow-gray-600 gap-2 px-5 py-3 ">
      <div className=" flex items-start  text-primary-yellow">
        <div className=" text-3xl sm:text-5xl lg:text-6xl font-bold font-Poppins">
          {counter && <CountUp start={0} end={number} duration={1} delay={0} />}
        </div>
        <div className="font-semibold text-3xl font-Poppins sm:text-5xl lg:text-6xl">
          +
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <div className=" hidden sm:flex w-10 h-[1px] opacity-70 mt-3 bg-primary-dark dark:bg-primary-light"></div>
        <div className=" font-OpenSans sm:text-lg text-[15px] uppercase opacity-70 text-primary-dark dark:text-primary-light ">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Card;
