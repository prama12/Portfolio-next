import Link from "next/link";
import navdata from "../data/navdata";
import NavbarHover from "./NavbarHover";

const Navbar = () => {
  return (
    <>
      <nav className=" fixed bottom-0  animation lg:bg-transparent shadow-md lg:shadow-none w-full lg:w-fit lg:right-0 z-[9999] flex lg:h-screen items-center justify-center ">
        <div className=" flex flex-row bg-white px-3 xsm:px-5 border:slate-50 dark:border-slate-900 dark:bg-black border-t lg:shadow-none lg:border-none shadow  lg:bg-transparent lg:flex-col w-full sm:px-20 lg:px-0  sm:gap-5 justify-between lg:justify-center lg:items-end py-3 ">
          {navdata.map((data) => {
            return (
              <div className=" px-1 sm:px-3" key={data.id}>
                <Link href={data.path}>
                  <NavbarHover {...data} />
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
