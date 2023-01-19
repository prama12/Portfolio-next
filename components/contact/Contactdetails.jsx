import React from "react";
import contact from "../data/contact";
import data from "../data/socialData";
const Contactdetails = () => {
  return (
    <div className=" py-10 text-primary-dark dark:text-primary-light">
      <div className=" font-semibold text-3xl  font-Poppins">
        {contact.title}
      </div>
      <div className="  my-4">{contact.description}</div>

      <div className=" flex items-center gap-4 my-6">
        <div className=" text-4xl text-primary-yellow">
          {contact.addressicon}
        </div>
        <div className="flex flex-col gap-1">
          <div className="">ADDRESS POINT</div>
          <div className=" font-bold  font-Poppins text-sm">
            {contact.address}
          </div>
        </div>
      </div>

      <div className=" flex items-center gap-4 my-3">
        <div className=" text-4xl text-primary-yellow">{contact.mailicon}</div>
        <div className="flex flex-col gap-1">
          <div className="">MAIL ME</div>
          <div className=" font-bold z-[9999999] text-primary-yellow hover:scale-105 animation  font-Poppins text-sm">
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

      <div className=" flex items-center gap-4 my-3">
        <div className=" text-2xl rounded-md text-white dark:text-black p-1 bg-primary-yellow">
          {contact.Phone}
        </div>
        <div className="flex flex-col gap-1">
          <div className="">CALL ME</div>
          <div className=" font-bold  font-Poppins text-sm">
            {contact.phone}
          </div>
        </div>
      </div>

      <div className="w-full mt-5    text-xl sm:text-2xl md:text-3xl gap-5 py-2 flex items-center">
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
  );
};

export default Contactdetails;
