import React, { useState } from "react";
import Image from "next/image";

const ProjectCard = ({ link, title, imagelink }) => {
  const [imageMagnify, setImageMagnify] = useState(false);
  return (
    <div
      onMouseEnter={() => setImageMagnify(true)}
      onMouseLeave={() => setImageMagnify(false)}
      className="h-52 w-full z-[999] relative overflow-hidden rounded-xl shadow "
    >
      <a href={link} className="relative" target="_blank" rel="noreferrer">
        <div
          className={`w-full absolute z-[99] ${
            imageMagnify ? "top-0 opacity-100 " : "opacity-0 -top-52 "
          } ease-in-out duration-500 top-0 h-full bg-primary-yellow flex items-center capitalize text-2xl tracking-wider font-bold text-white justify-center text-center`}
        >
          <div
            className={`absolute ${
              imageMagnify ? "  " : " -top-52 "
            } ease-in-out duration-700  `}
          >
            {title}
          </div>
        </div>

        <div className="w-full h-52 relative ">
          <Image
            src={imagelink}
            alt="project_image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
