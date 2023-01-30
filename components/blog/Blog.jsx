import { data } from "autoprefixer";
import React from "react";
import Title from "../commen/Title";
import blog from "../data/blog";
import BLlogCard from "./BlogCard";
import AnimateLayout from "../layout/AnimateLayout";

const Blog = () => {
  return (
    <AnimateLayout>
      <div className=" pt-14 pb-24 max-w background-dark w-padding ">
        <div className="  md:w-[750px] lg:w-[950px] xl:w-[1150px] mx-auto ">
          <div className="flex flex-col gap-10 md:gap-14 lg:gap-20">
            <Title firstdata="my" seconddata="blog" backgroundtext="posts" />
            <div className="grid lg:grid-cols-3 xxsm:grid-cols-2  gap-10">
              {blog.map((data, index) => {
                return <BLlogCard key={index} {...data} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimateLayout>
  );
};

export default Blog;
