import Toggle from "../toggle/Toggle";
import Navbar from "./Navbar";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Layout = ({ children }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <>
      <div className={dark && "dark"}>
        <Toggle />
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
