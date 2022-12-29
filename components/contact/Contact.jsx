import React from 'react'
import Title from '../commen/Title'
import Contactdetails from './Contactdetails'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div className=' max-w-6xl mx-auto w-padding'>
            <div className=' my-8'>
                <Title firstdata="get in" seconddata="touch" backgroundtext="contact" />
            </div>
            <div className=' lg:grid grid-cols-12 gap-4'>
                <div className=' col-span-4'>
                    <Contactdetails />
                </div>
                <div className=' col-span-8'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact