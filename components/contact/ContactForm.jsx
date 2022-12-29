import React from 'react'
import Button from "../commen/Button"

const ContactForm = () => {
  return (
    <div className=' py-10 grid gap-5 p-6'>
      <div className=' col-span-2 sm:col-span-1 border overflow-hidden p-3 rounded-full'><input className=' outline-none w-full' placeholder='YOUR NAME' type="text" /></div>
      <div className=' col-span-2 sm:col-span-1 border overflow-hidden p-3 rounded-full'><input className=' outline-none w-full' placeholder='YOUR EMAIL' type="text" /></div>
      <div className=' col-span-2 border overflow-hidden p-3 rounded-full'><input className=' outline-none w-full' placeholder='YOUR SUBJECT' type="text" /></div>
      <div className=' col-span-2 border overflow-hidden p-3 rounded-3xl'><textarea className=' resize-y h-36 outline-none w-full' placeholder='YOUR MESSAGE' /></div>

      <div className=' w-fit'>
        <Button text="send message" />
      </div>
    </div>
  )
}

export default ContactForm