import React from 'react'
// import Image from 'next/image'

const ProjectCard = ({ category, githublink, link, description, title, imagelink }) => {
    return (
        <div className=' col-span-12 sm:col-span-6 lg:col-span-4 w-full border overflow-hidden rounded-md shadow-2xl'>
            <div className=' w-full'>
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