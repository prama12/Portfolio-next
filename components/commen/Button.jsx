import { useState } from "react";
import Link from "next/link";

const Button = ({ text, icon, func = () => {} }) => {
  const [hovereffect, setHovereffect] = useState(false);
  return (
    <>
      <div className="w-full flex sm:justify-start justify-center">
        <button
          onClick={() => func()}
          onMouseEnter={() => setHovereffect(true)}
          onMouseLeave={() => setHovereffect(false)}
          className=" cursor-pointer rounded-full border border-primary-yellow font-Poppins font-semibold flex  items-center overflow-hidden  relative"
        >
          <div
            className={`${
              hovereffect
                ? " text-white"
                : " text-primary-dark dark:text-primary-light"
            } animation px-8 py-3  z-10 text-center rounded-full`}
          >
            {text?.toUpperCase()}
          </div>
          <div className=" z-10 w-12 h-12 rounded-full bg-primary-yellow  flex justify-center items-center">
            <div className="text-3xl text-white ">{icon}</div>
          </div>
          <div
            className={`absolute ${
              hovereffect ? "w-full" : " w-0"
            } right-4 animation bg-primary-yellow h-full top-0`}
          ></div>
        </button>
      </div>
    </>
  );
};

export default Button;
