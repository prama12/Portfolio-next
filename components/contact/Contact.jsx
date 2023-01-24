import React from "react";
import Title from "../commen/Title";
import Contactdetails from "./Contactdetails";
import ContactForm from "./ContactForm";
import AnimateLayout from "../layout/AnimateLayout";

const Contact = () => {
  return (
    <AnimateLayout>
      <div className="w-padding max-w h-full pt-14 pb-24 background-dark animation">
        <div className="w-full md:w-[750px] lg:w-[950px] xl:w-[1150px] mx-auto   ">
          <div className="flex flex-col gap-10 md:gap-14 lg:gap-16">
            <div className="">
              <Title
                firstdata="get in"
                seconddata="touch"
                backgroundtext="contact"
              />
            </div>
            <div className="lg:grid grid-cols-12 gap-4">
              <div className=" col-span-4">
                <Contactdetails />
              </div>
              <div className=" col-span-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateLayout>
  );
};

export default Contact;
