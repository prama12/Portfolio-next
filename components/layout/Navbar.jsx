import Link from "next/link";
import navdata from "../data/navdata";
import NavbarHover from "./NavbarHover";

const Navbar = () => {
  return (
    <>
      <nav className="fixed bottom-0 animation lg:bg-transparent border-t-4 dark:border-none lg:border-none border-slate-100 lg:shadow-none w-full lg:w-fit lg:right-0 z-[9999] flex lg:h-screen items-center justify-center ">
        <div className="flex flex-row bg-white px-3 xsm:px-5 dark:bg-[#2b2a2a] lg:bg-transparent lg:flex-col w-full sm:px-20 lg:px-0 lg:pr-5 lg:dark:bg-transparent sm:gap-5 justify-between lg:justify-center lg:items-end py-1 ">
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
