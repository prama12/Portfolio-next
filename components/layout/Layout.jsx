import Toggle from "../toggle/Toggle";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Toggle />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
