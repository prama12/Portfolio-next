import Sun from "../../public/static/icons/sun.svg";
import Moon from "../../public/static/icons/moon.svg";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext"


const Toggle = () => {
  // const [dark, setDark] = useState(false);
  const { dark, setDark } = useContext(ThemeContext)
  return (
    <>
      <div className=" fixed top-5 right-6 z-[99999]">
        <div onClick={() => setDark(!dark)} className={`w-[60px] h-8 cursor-pointer rounded-2xl p-0.5 ${dark ? " bg-gray-400" : " bg-primary-yellow"}`}>
          <div className={`relative w-8 h-full text-white flex justify-center items-center duration-500 rounded-full  ${dark ? "-right-6 bg-primary-dark text-white" : "right-0 bg-white text-primary-dark"}`}>
            {dark ? <Moon /> : <Sun />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Toggle;
