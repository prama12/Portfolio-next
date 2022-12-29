import React, { useState } from 'react'
// import Image from 'next/image'

const ProjectCard = ({ category, githublink, link, description, title, imagelink }) => {
    const [imageMagnify, setImageMagnify] = useState(false)
    return (
        <div onMouseEnter={() => setImageMagnify(true)} onMouseLeave={() => setImageMagnify(false)} className=' col-span-12 sm:col-span-6 lg:col-span-4 w-full border overflow-hidden rounded-md shadow-2xl cursor-pointer'>
            <div className={` w-full ${imageMagnify && " scale-125"} duration-500`}>
                <img src={imagelink} alt="project-image" />
            </div>
            <div className=' p-4'>
                <div className=' text-xl font-Poppins mt-3 font-semibold capitalize'>{title}</div>
                <div className=' text-primary-dark font-Poppins text-sm mt-2 '>{description}</div>
                <div className=' flex justify-between my-4'>
                    <a href={link} target="_blank" rel="noreferrer">
                        <div>live preview</div>
                    </a>
                    <a href={githublink} target="_blank" rel="noreferrer">
                        <div>view code</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard