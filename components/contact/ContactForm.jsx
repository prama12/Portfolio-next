import React, { useRef } from "react";
import Button from "../commen/Button";
import Telegram from "../../public/static/icons/telegram-plane.svg";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ybk3ctk",
        "template_t52cv3n",
        form.current,
        "_oOCAs9jSLHEZ-4TW"
      )
      .then(
        (result) => {
          console.log("message sent");
        },
        (error) => {
          console.log("message can't sent");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className=" py-10 grid gap-5 p-6 text-primary-dark dark:text-primary-light animation"
    >
      <div className=" z-[999]  col-span-2 sm:col-span-1 ">
        <input
          className="input rounded-full "
          placeholder="YOUR NAME"
          type="text"
          name="user_name"
        />
      </div>
      <div className="z-[999] col-span-2 sm:col-span-1 ">
        <input
          className=" input rounded-full"
          placeholder="YOUR EMAIL"
          type="email"
          name="user_email"
        />
      </div>
      <div className="z-[999] col-span-2 ">
        <input
          className="input rounded-full"
          placeholder="YOUR SUBJECT"
          type="text"
          name="sub"
        />
      </div>
      <div className="z-[999] col-span-2 ">
        <textarea
          className=" input rounded-3xl h-32"
          placeholder="YOUR MESSAGE"
          name="message"
        />
      </div>

      <div className=" w-fit">
        <Button text="send message" icon={<Telegram />} />
      </div>
    </form>
  );
};

export default ContactForm;
