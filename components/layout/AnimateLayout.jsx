import React, { useState, useEffect } from 'react'

const AnimateLayout = ({ children }) => {
    const [animator, setAnimator] = useState(false)
    useEffect(() => {
        setAnimator(true)
    }, [])
    return (
        <div className=" bg-gray-100 w-full h-screen">
            <div className={` relative bg-white w-full ${animator ? " h-screen " : "  h-0  "} ease-out duration-1000 transition-all `}>
                <div className={`${animator ? "opacity-100 mt-0" : "opacity-0 mt-20"} delay-300 duration-1000`}>

                    {children}
                </div>
            </div>
        </div>
    )
}

export default AnimateLayout