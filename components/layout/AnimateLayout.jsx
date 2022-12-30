import React, { useState, useEffect } from 'react'

const AnimateLayout = ({ children }) => {
    const [animator, setAnimator] = useState(false)
    useEffect(() => {
        setAnimator(true)
    }, [])
    return (
        <div className=" bg-gray-100 dark:bg-gray-900 w-full h-screen ">
            <div className={` relative bg-white dark:bg-black w-full ${animator ? " h-screen " : "  h-0  "} ease-out duration-1000 transition-all `}>
                <div className={`${animator ? "opacity-100 pt-0" : "opacity-0 pt-20"} delay-700 duration-1000`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AnimateLayout