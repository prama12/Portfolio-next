import Sun from "../../public/static/icons/sun.svg";
import Moon from "../../public/static/icons/moon.svg";
import { useState } from "react";

const Toggle = () => {
  const [dark, setDark] = useState(false);

  return (
    <>
      <div className="fixed top-5  z-50 right-4">
        <div className="w-14 h-14 text-3xl text-primary-dark bg-primary-light rounded-full shadow flex items-center justify-center">
          <Moon />
        </div>
      </div>
    </>
  );
};

export default Toggle;
