import React, { useState } from "react";
import Button from "../commen/Button";
import Telegram from "../../public/static/icons/telegram-plane.svg";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formState, setFormState] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    const config = {
      SecureToken: "3ae5ade4-73b6-4c9a-b3fe-9942e2169fda",
      To: "panditprama@gmail.com",
      From: formState.email,
      Subject: formState.sub,

      Body: formState.message,
    };

    if (window.Email) {
      window.Email.send(config).then(
        (result) => {
          alert("message sent successfully");
        },
        (error) => {
          alert("message can't sent");
        }
      );
    }
  };

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={sendEmail}
      className=" py-10 grid gap-5 p-6 text-primary-dark dark:text-primary-light animation"
    >
      <div className=" z-[999]  col-span-2 sm:col-span-1 ">
        <input
          className="input rounded-full "
          placeholder="YOUR NAME"
          type="text"
          name="name"
          value={formState.name || ""}
          onChange={changeHandler}
        />
      </div>
      <div className="z-[999] col-span-2 sm:col-span-1 ">
        <input
          className=" input rounded-full"
          placeholder="YOUR EMAIL"
          type="email"
          name="email"
          value={formState.email || ""}
          onChange={changeHandler}
        />
      </div>
      <div className="z-[999] col-span-2 ">
        <input
          className="input rounded-full"
          placeholder="YOUR SUBJECT"
          type="text"
          value={formState.sub || ""}
          onChange={changeHandler}
          name="sub"
        />
      </div>
      <div className="z-[999] col-span-2 ">
        <textarea
          className=" input rounded-3xl h-32"
          placeholder="YOUR MESSAGE"
          name="message"
          value={formState.message || ""}
          onChange={changeHandler}
        />
      </div>

      <div className=" w-fit">
        <Button text="send message" icon={<Telegram />} />
      </div>
    </form>
  );
};

export default ContactForm;
