import { data } from "autoprefixer";
import React from "react";
import Title from "../commen/Title";
import blog from "../data/blog";
import BLlogCard from "./BlogCard";
import AnimateLayout from "../layout/AnimateLayout";

const Blog = () => {
  return (
    <AnimateLayout>
      <div className=" background-dark pb-12">
        <div className=" max-w-6xl mx-auto w-padding">
          <Title firstdata="my" seconddata="blog" backgroundtext="posts" />
          <div className=" my-12 grid lg:grid-cols-3 md:grid-cols-2  gap-10">
            {blog.map((data, index) => {
              return <BLlogCard key={index} {...data} />;
            })}
          </div>
        </div>
      </div>
    </AnimateLayout>
  );
};

export default Blog;
