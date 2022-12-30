import Link from "next/link";
import navdata from "../data/navdata";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <nav className="  fixed bottom-0 bg-white lg:bg-transparent shadow-md lg:shadow-none w-full lg:w-fit lg:right-0 z-50 flex lg:h-screen items-center justify-center ">
        <div className=" flex flex-row lg:flex-col w-full sm:px-10 lg:px-0  sm:gap-5 justify-between lg:justify-center py-3 ">
          {navdata.map((data) => {
            return (
              <div className="px-3" key={data.id}>
                <Link href={data.path}>
                  <div
                    className={
                      router.pathname == data.path
                        ? "text-xl sm:text-2xl w-10 h-10 sm:w-14 sm:h-14 text-white bg-primary-yellow shadow rounded-full flex items-center justify-center"
                        : "text-xl sm:text-2xl w-10 h-10 sm:w-14 sm:h-14 bg-primary-light text-primary-dark  shadow rounded-full flex items-center justify-center "
                    }
                  >
                    {data.icon}
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
