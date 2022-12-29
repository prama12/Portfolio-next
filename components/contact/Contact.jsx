import React, { useState, useEffect } from 'react'
import Title from '../commen/Title'
import Contactdetails from './Contactdetails'
import ContactForm from './ContactForm'

const Contact = () => {
    const [animator, setAnimator] = useState(false)
    useEffect(() => {
        setAnimator(true)
    }, [])
    return (
        <div className=" bg-gray-100 w-full h-screen">
            <div className={` relative bg-white w-full ${animator ? " h-screen " : "  h-0  "} ease-out duration-700 transition-all `}>
                <div className={`${animator ? "opacity-100 mt-0" : "opacity-0 mt-20"} delay-200 duration-1000`}>
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
                </div>
            </div>
        </div>
    )
}

export default Contact