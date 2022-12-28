import Link from "next/link";
import navdata from "../data/navdata";

const Navbar = () => {
  return (
    <>

      <nav className="  fixed right-0 z-50 flex h-screen items-center justify-center ">
        <div className=" flex flex-col gap-5 ">
          {navdata.map((data) => {
            return (
              <div className="px-3" key={data.id}>
                <Link href={data.path}>
                  <div className="text-2xl w-14 h-14 bg-primary-light dark:bg-primary-dark shadow rounded-full flex items-center justify-center">
                    <div className="text-primary-dark dark:text-white">
                      {data.icon}
                    </div>
                  </div>
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
