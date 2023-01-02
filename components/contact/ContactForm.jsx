import React from 'react'
import Button from "../commen/Button"
import Telegram from "../../public/static/icons/telegram-plane.svg";

const ContactForm = () => {
  const sendMessage = () => {
    alert("Thank you for your message! I will get back to you soon.")
  }
  return (
    <div className=' py-10 grid gap-5 p-6 text-primary-dark dark:text-primary-light animation'>
      <div className=' z-[999]  col-span-2 sm:col-span-1 '>
        <input className='input rounded-full ' placeholder='YOUR NAME' type="text" /></div>
      <div className='z-[999] col-span-2 sm:col-span-1 '>
        <input className=' input rounded-full' placeholder='YOUR EMAIL' type="text" />
      </div>
      <div className='z-[999] col-span-2 '>
        <input className='input rounded-full' placeholder='YOUR SUBJECT' type="text" />
      </div>
      <div className='z-[999] col-span-2 '>
        <textarea className=' input rounded-3xl  h-32' placeholder='YOUR MESSAGE' />
      </div>

      <div className=' w-fit'>
        <Button func={sendMessage} text="send message" icon={<Telegram />} />
      </div>
    </div>
  )
}

export default ContactForm