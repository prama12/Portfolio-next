import Sun from "../../public/static/icons/sun.svg";
import Moon from "../../public/static/icons/moon.svg";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Toggle = () => {
  // const [dark, setDark] = useState(false);
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <>
      <div className=" fixed top-5 right-4 z-[99999]">
        <div
          onClick={() => setDark(!dark)}
          className={`h-12 w-12 cursor-pointer flex items-center justify-center rounded-full p-0.5 ${
            dark ? " bg-primary-dark" : " bg-primary-light"
          }`}
        >
          <div
            className={`relative text-2xl text-white flex justify-center items-center duration-500 rounded-full  
            }`}
          >
            {dark ? (
              <Sun className="text-white" />
            ) : (
              <Moon className="text-primary-dark" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Toggle;
