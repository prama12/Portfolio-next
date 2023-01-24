import React from "react";
import Header from "../commen/Header";
import contact from "../data/contact";
import data from "../data/socialData";
import MyModal from "../google map/MyModal";
const Contactdetails = () => {
  return (
    <div className=" text-primary-dark dark:text-primary-light">
      <div className="flex flex-col gap-5">
        <Header title={contact.title} />

        <div className=" text-sm md:text-base">{contact.description}</div>
        <div className="flex flex-col gap-3">
          <div className=" flex items-center gap-4 ">
            <div className="text-3xl sm:text-4xl text-primary-yellow">
              {contact.addressicon}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm sm:text-base">ADDRESS POINT</div>
              <button className="z-[9999999] animation hover:scale-105 font-bold font-Poppins text-xs sm:text-sm">
                <MyModal text={contact.address} />
              </button>
            </div>
          </div>
          <div className=" flex items-center gap-4 ">
            <div className=" text-3xl sm:text-4xl text-primary-yellow">
              {contact.mailicon}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm sm:text-base">MAIL ME</div>
              <div
                data-name={contact.mail}
                className=" relative text-head font-bold z-[9999999] text-primary-dark dark:text-primary-light hover:scale-105 animation  font-Poppins text-xs sm:text-sm"
              >
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=panditprama@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {contact.mail}
                </a>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-4 ">
            <div className=" text-xl sm:text-2xl rounded-md text-white dark:text-black p-1 bg-primary-yellow">
              {contact.Phone}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm sm:text-base">CALL ME</div>
              <div className=" font-bold  font-Poppins text-xs sm:text-sm">
                {contact.phone}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-xl sm:text-2xl md:text-3xl gap-5 py-2 flex items-center">
          {data.map((data) => {
            return (
              <div key={data.id} className="w-fit">
                <a
                  className="w-10 h-10 bg-primary-light dark:bg-primary-dark shadow-sm dark:shadow-gray-400 flex items-center justify-center rounded-full    text-xl hover:scale-110 animation text-primary-dark z-[999999999999] hover:text-blue-500 hover:dark:text-blue-500 dark:text-white"
                  href={data.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  {data.Icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contactdetails;
