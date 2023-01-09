import React, { useState } from "react";
import Image from "next/image";

const BLlogCard = ({ imagepath, title, description }) => {
  const [imageMagnify, setImageMagnify] = useState(false);
  return (
    <div
      onMouseEnter={() => setImageMagnify(true)}
      onMouseLeave={() => setImageMagnify(false)}
      className=" cursor-pointer  w-full rounded-md overflow-hidden shadow-2xl bg-gray-200 background-dark  duration-300 dark:border border-gray-700"
    >
      <div className=" w-full border-b-4 border-primary-yellow overflow-hidden">
        <div
          className={`${
            imageMagnify && " scale-125"
          } duration-500 relative w-full h-80`}
        >
          {/* <img src={imagepath} alt="" /> */}
          <Image
            src={imagepath}
            alt="blog_image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className=" p-4">
        <div className="text-xl font-Poppins mt-3 font-semibold capitalize hover:text-primary-yellow dark:text-white duration-500">
          {title}
        </div>
        <div className="text-primary-dark font-Poppins text-sm mt-2">
          {description.substring(0, 140)}...
        </div>
      </div>
    </div>
  );
};

export default BLlogCard;
