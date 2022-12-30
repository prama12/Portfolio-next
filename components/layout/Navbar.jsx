import Link from "next/link";
import navdata from "../data/navdata";
import NavbarHover from "./NavbarHover";

const Navbar = () => {
  return (
    <>
      <nav className="  fixed right-0 z-50 flex h-screen items-center justify-center ">
        <div className=" flex flex-col items-end gap-5 ">
          {navdata.map((data) => {
            return (
              <div className="px-3" key={data.id}>
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
