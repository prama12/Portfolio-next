import React, { useRef } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const NavbarHover = ({ path, name, icon }) => {
  const btnref = useRef();
  const [moueshandler, setMousehandler] = useState(false);
  const router = useRouter();
  return (
    <div
      style={{ width: moueshandler ? btnref?.current?.scrollWidth : "48px" }}
      onMouseEnter={() => setMousehandler(true)}
      onMouseLeave={() => setMousehandler(false)}
      className={`text-2xl duration-300 h-12 shadow-sm  dark:shadow-gray-900 justify-end rounded-full flex overflow-hidden items-center  
         ${
           router.pathname === path || moueshandler
             ? "text-white bg-primary-yellow"
             : " text-primary-dark bg-primary-light  dark:bg-primary-dark dark:text-primary-light text-end"
         }`}
    >
      <div
        ref={btnref}
        className=" flex items-center px-3 lg:pr-3 lg:pl-6 gap-5 "
      >
        <div className={`tracking-wider uppercase text-base  hidden lg:block `}>
          {name}
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default NavbarHover;
