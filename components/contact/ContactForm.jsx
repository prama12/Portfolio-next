import React from 'react'
import Button from "../commen/Button"
import Telegram from "../../public/static/icons/telegram-plane.svg";

const ContactForm = () => {
  const sendMessage = () => {
    alert("Thank you for your message! I will get back to you soon.")
  }
  return (
    <div className=' py-10 grid gap-5 p-6 text-primary-dark dark:text-primary-light animation'>
      <div className=' col-span-2 sm:col-span-1 border overflow-hidden p-3 rounded-full'><input className=' duration-300 outline-none w-full dark:bg-black' placeholder='YOUR NAME' type="text" /></div>
      <div className=' col-span-2 sm:col-span-1 border overflow-hidden p-3 rounded-full'><input className=' animation dark:bg-black outline-none w-full' placeholder='YOUR EMAIL' type="text" /></div>
      <div className=' col-span-2 border overflow-hidden p-3 rounded-full'><input className='animation dark:bg-black outline-none w-full' placeholder='YOUR SUBJECT' type="text" /></div>
      <div className=' col-span-2 border overflow-hidden p-3 rounded-3xl'><textarea className=' animation dark:bg-black resize-y h-36 outline-none w-full' placeholder='YOUR MESSAGE' /></div>

      <div className=' w-fit'>
        <Button func={sendMessage} text="send message" icon={<Telegram />} />
      </div>
    </div>
  )
}

export default ContactForm