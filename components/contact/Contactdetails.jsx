import React from 'react'
import contact from '../data/contact'
const Contactdetails = () => {
  return (
    <div className=' py-10 text-primary-dark dark:text-primary-light'>
      <div className=' font-semibold text-3xl  font-Poppins'>{contact.title}</div>
      <div className='  my-4'>{contact.description}</div>

      <div className=' flex items-center gap-4 my-6'>
        <div className=' text-4xl text-primary-yellow'>{contact.addressicon}</div>
        <div className='flex flex-col gap-1'>
          <div className=''>ADDRESS POINT</div>
          <div className=' font-bold  font-Poppins text-sm'>{contact.address}</div>
        </div>
      </div>

      <div className=' flex items-center gap-4 my-3'>
        <div className=' text-4xl text-primary-yellow'>{contact.mailicon}</div>
        <div className='flex flex-col gap-1'>
          <div className=''>MAIL ME</div>
          <div className=' font-bold  font-Poppins text-sm'>{contact.mail}</div>
        </div>
      </div>

      <div className=' flex items-center gap-4 my-3'>
        <div className=' text-2xl rounded-md text-white dark:text-black p-1 bg-primary-yellow'>{contact.Phone}</div>
        <div className='flex flex-col gap-1'>
          <div className=''>CALL ME</div>
          <div className=' font-bold  font-Poppins text-sm'>{contact.address}</div>
        </div>
      </div>
    </div>
  )
}

export default Contactdetails