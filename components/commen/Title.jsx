import React from 'react'

const Title = ({ firstdata, seconddata, backgroundtext }) => {
    return (
        <div className="relative flex justify-center items-center overflow-hidden">
            <div className=" relative text-[110px] font-extrabold tracking-[0.7rem] text-primary-dark opacity-10 ">{backgroundtext.toUpperCase()}</div>
            <div className="absolute text-4xl sm:text-6xl font-extrabold tracking-wide text-primary-dark "><span>{firstdata.toUpperCase()}</span><span className=" text-primary-yellow">{seconddata.toUpperCase()}</span></div>
        </div>
    )
}

export default Title