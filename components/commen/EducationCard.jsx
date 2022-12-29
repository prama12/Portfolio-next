
import React from 'react'
import JobIcon from "../../public/static/icons/job.svg"

const EducationCard = ({ description, uni, date, degree }) => {
    return (
        <div className=' border-l px-8  mb-10 relative'>
            <div className=' text-primary-dark font-semibold bg-gray-100 px-2 rounded-2xl w-fit text-sm mb-5'>{date}</div>
            <div className=' sm:flex  items-center mb-3'>
                <div className=' font-semibold text-lg text-primary-dark mr-2'>{degree.toUpperCase()}</div>
                <div className='hidden sm:block w-6 bg-primary-dark h-[2px]'></div>
                <div className=' ml-3 font-semibold text-gray-500'>{uni.toUpperCase()}</div>

            </div>
            <div className=' text-primary-dark text-sm'>
                {description}
            </div>
            <div className=' absolute -top-3 -left-6 text-white text-xl bg-primary-yellow p-3 rounded-full'>
                <JobIcon />
            </div>
        </div>
    )
}

export default EducationCard