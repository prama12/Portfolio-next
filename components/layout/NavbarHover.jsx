import React, { useRef } from 'react'
import { useRouter } from "next/router";
import { useState } from "react";

const NavbarHover = ({ path, name, icon }) => {
    const btnref = useRef()
    const [moueshandler, setMousehandler] = useState(false)
    const router = useRouter();
    return (
        <div
            style={{ width: moueshandler ? (btnref?.current?.scrollWidth) : "56px" }}

            onMouseEnter={() => setMousehandler(true)}
            onMouseLeave={() => setMousehandler(false)}
            className={`text-2xl  duration-300 min-w-[56px] h-14 shadow-xl shadow-gray-300 dark:shadow-gray-900  rounded-full flex overflow-hidden items-center justify-end 
         ${router.pathname === path || moueshandler ? "text-white bg-primary-yellow" : " text-primary-dark bg-primary-light dark:bg-primary-dark dark:text-primary-light text-end"}`}
        >
            <div ref={btnref} className=' flex px-4'>
                <div className={`tracking-wider text-base mr-4 `}>{name.toUpperCase()}</div>
                <div>{icon}</div>
            </div>
        </div>
    )
}

export default NavbarHover