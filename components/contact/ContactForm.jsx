import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Telegram from "../../public/static/icons/telegram-plane.svg";
import toast, { Toaster } from "react-hot-toast";
import Button from "../commen/Button";
import Tick from "../../public/static/icons/tick.svg";

const ContactForm = () => {
  const [formState, setFormState] = useState({});
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0p8p8md",
        "template_1oft1ur",
        form.current,
        "c2K6ZexAGRvOI8zn0"
      )
      .then(
        (result) => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } bg-primary-light border flex items-center gap-3 dark:bg-dark-background rounded-lg shadow-sm text-primary-dark font-Poppins font-semibold text-sm dark:text-primary-light border-primary-yellow px-4 py-3`}
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-sm text-primary-light font-Poppins font-semibold bg-primary-yellow">
                <Tick />
              </div>
              <div>Message sent successfully</div>
            </div>
          ));
          setFormState("");
        },
        (error) => {
          toast.error("message does't sent");
          setFormState("");
        }
      );
  };

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="  w-full grid gap-5 text-primary-dark dark:text-primary-light animation"
      >
        <div className=" z-[999]  col-span-2 sm:col-span-1 ">
          <input
            required
            className="input capitalize rounded-full "
            placeholder="YOUR NAME"
            type="text"
            name="name"
            value={formState.name || ""}
            onChange={changeHandler}
          />
        </div>
        <div className="z-[999] col-span-2 sm:col-span-1">
          <input
            required
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
            required
            className="input rounded-full"
            placeholder="YOUR SUBJECT"
            type="text"
            value={formState.subject || ""}
            onChange={changeHandler}
            name="subject"
          />
        </div>
        <div className="z-[999] col-span-2 ">
          <textarea
            required
            className=" input rounded-3xl h-32"
            placeholder="YOUR MESSAGE"
            name="message"
            value={formState.message || ""}
            onChange={changeHandler}
          />
        </div>

        <div className=" w-fit">
          <Button text="send message" icon={<Telegram />} />
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
