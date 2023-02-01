import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Telegram from "../../public/static/icons/telegram-plane.svg";
import toast, { Toaster } from "react-hot-toast";
import Button from "../commen/Button";
import Tick from "../../public/static/icons/tick.svg";

// useform imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// schemas for validation
const EmailSentSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const [formState, setFormState] = useState({});

  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailSentSchema),
  });

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_0p8p8md",
        "template_1oft1ur",
        form.current,
        "c2K6ZexAGRvOI8zn0"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");

          // custom toast to match the theme foe success

          // toast.custom((e) => (
          //   <div
          //     className={`${
          //       e.visible ? "animate-enter" : "animate-leave"
          //     } bg-primary-light border flex items-center gap-3 dark:bg-dark-background rounded-lg shadow-sm text-primary-dark font-Poppins font-semibold text-sm dark:text-primary-light border-primary-yellow px-4 py-3`}
          //   >
          //     <div className="w-5 h-5 rounded-full flex items-center justify-center text-sm text-primary-light font-Poppins font-semibold bg-primary-yellow">
          //       <Tick />
          //     </div>
          //     <div>Message sent successfully</div>
          //   </div>
          // ));
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
        onSubmit={handleSubmit(sendEmail)}
        className="  w-full grid gap-5 text-primary-dark dark:text-primary-light animation"
      >
        <div className=" z-[999] flex flex-col gap-1 col-span-2 sm:col-span-1 ">
          <input
            className={`input rounded-full capitalize ${
              errors.name ? "is-invalid" : ""
            } `}
            {...register("name")}
            placeholder="YOUR NAME"
            type="text"
            name="name"
            value={formState.name || ""}
            onChange={changeHandler}
          />
          {errors.name && (
            <p className="invalid-feedback  w-full text-left">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="z-[999] flex flex-col gap-1 col-span-2 sm:col-span-1">
          <input
            className={`input rounded-full ${
              errors.email ? "is-invalid" : ""
            }  `}
            {...register("email")}
            placeholder="YOUR EMAIL"
            type="text"
            name="email"
            value={formState.email || ""}
            onChange={changeHandler}
          />
          {errors.email && (
            <p className="invalid-feedback  w-full text-left">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="z-[999] flex flex-col gap-1 col-span-2 ">
          <input
            className={`input rounded-full ${
              errors.subject ? "is-invalid" : ""
            }  `}
            {...register("subject")}
            placeholder="YOUR SUBJECT"
            type="text"
            value={formState.subject || ""}
            onChange={changeHandler}
            name="subject"
          />
          {errors.subject && (
            <p className="invalid-feedback  w-full text-left">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div className="z-[999] flex flex-col gap-1 col-span-2 ">
          <textarea
            className={`input rounded-3xl h-32 ${
              errors.message ? "is-invalid" : ""
            }  `}
            {...register("message")}
            placeholder="YOUR MESSAGE"
            name="message"
            value={formState.message || ""}
            onChange={changeHandler}
          />
          {errors.message && (
            <p className="invalid-feedback w-full text-left">
              {errors.message.message}
            </p>
          )}
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
