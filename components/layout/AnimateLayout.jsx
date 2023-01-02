import React, { useState, useEffect } from "react";

const AnimateLayout = ({ children }) => {
  const [animator, setAnimator] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    setAnimator(true);
  }, []);
  return (
    <div className=" bg-gray-100 dark:bg-gray-900 w-full h-screen ">
      <div
        className={` relative bg-white dark:bg-black w-full dark:border-b-4 dark:border-blue-900 ${
          animator ? " h-screen " : "  h-0  "
        } ease-out duration-1000 transition-all `}
      >
        <div
          className={`${
            animator ? "opacity-100 pt-0" : "opacity-0 pt-20"
          } delay-700 duration-1000`}
        >
          <div
            style={{
              position: "relative",
              top: mousePosition.y - 16,
              left: mousePosition.x - 16,
            }}
            className="w-8 h-8  rounded-full bg-primary-yellow opacity-30 duration-300 ease-out"
          ></div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimateLayout;
