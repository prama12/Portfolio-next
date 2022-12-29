import React from 'react'
import contact from '../data/contact'
const Contactdetails = () => {
  return (
    <div className=' py-10'>
      <div className=' font-semibold text-3xl text-primary-dark font-Poppins'>{contact.title}</div>
      <div className=' text-primary-dark my-4'>{contact.description}</div>

      <div className=' flex items-center gap-4 my-6'>
        <div className=' text-4xl text-primary-yellow'>{contact.addressicon}</div>
        <div className='flex flex-col gap-1'>
          <div className='text-primary-dark'>ADDRESS POINT</div>
          <div className=' font-bold text-primary-dark font-Poppins text-sm'>{contact.address}</div>
        </div>
      </div>

      <div className=' flex items-center gap-4 my-3'>
        <div className=' text-4xl text-primary-yellow'>{contact.mailicon}</div>
        <div className='flex flex-col gap-1'>
          <div className='text-primary-dark'>MAIL ME</div>
          <div className=' font-bold text-primary-dark font-Poppins text-sm'>{contact.mail}</div>
        </div>
      </div>

      <div className=' flex items-center gap-4 my-3'>
        <div className=' text-2xl rounded-md text-white p-1 bg-primary-yellow'>{contact.Phone}</div>
        <div className='flex flex-col gap-1'>
          <div className='text-primary-dark'>CALL ME</div>
          <div className=' font-bold text-primary-dark font-Poppins text-sm'>{contact.address}</div>
        </div>
      </div>
    </div>
  )
}

export default Contactdetails