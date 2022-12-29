import React, { useEffect, useState } from 'react'

const Card = ({ number, title }) => {
    const [numberstate, setNumberstate] = useState(0)
    // useEffect(() => {
    //     const func = setInterval(() => {
    //         if (numberstate <= number) {
    //             setNumberstate(numberstate + 1)
    //         } else {
    //             return
    //         }
    //     }, 400)
    //     // return clearInterval(func)
    // }, [numberstate])
    return (
        <div className=' col-span-2 sm:col-span-1 border rounded-md px-8 py-5'>
            <div className=' flex items-start'>
                <div className=' text-5xl text-primary-yellow font-bold font-Poppins'>{number}</div>
                <div className=' font-semibold text-primary-yellow text-3xl'>+</div>
            </div>

            <div className=' mt-3 flex items-center'>
                <div className=' w-10 mr-3 h-[1px] bg-primary-dark'></div>
                <div className=' text-lg w-18 text-primary-dark font-normal'>
                    {title.toUpperCase()}
                </div>
            </div>
        </div>
    )
}

export default Card