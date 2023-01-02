import React from 'react'

const Title = ({ firstdata, seconddata, backgroundtext }) => {
    return (
        <div className="relative flex justify-center items-center overflow-hidden">
            <div className=" relative text-7xl md:text-[110px] font-extrabold tracking-[0.7rem] text-primary-dark dark:text-primary-light opacity-10 ">{backgroundtext.toUpperCase()}</div>
            <div className="absolute text-4xl sm:text-6xl font-extrabold tracking-wide text-primary-dark dark:text-primary-light "><span>{firstdata.toUpperCase()}</span><span className=" text-primary-yellow">{seconddata.toUpperCase()}</span></div>
        </div>
    )
}

export default Title