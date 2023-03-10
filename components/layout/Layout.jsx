import Toggle from "../toggle/Toggle";
import Navbar from "./Navbar";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Layout = ({ children }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <>
      <div className="w-full">
        <div className={dark && "dark"}>
          <Toggle />
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
