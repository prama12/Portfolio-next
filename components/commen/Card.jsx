const Card = ({ number, title }) => {
  return (
    <div className=" w-full  bg-transparent flex flex-col border dark:border-primary-dark border-primary-light  shadow-sm rounded-sm gap-2 px-5 py-3 ">
      <div className=" flex items-start">
        <div className=" text-6xl text-primary-yellow font-bold font-Poppins">
          {number}
        </div>
        <div className=" font-semibold text-primary-yellow text-3xl">+</div>
      </div>

      <div className="flex gap-4 items-start">
        <div className=" w-10 h-[1px] opacity-70 mt-3 bg-primary-dark dark:bg-primary-light"></div>
        <div className=" text-lg font-bold uppercase opacity-70 text-primary-dark dark:text-primary-light ">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Card;
