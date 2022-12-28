
import React from 'react'

const EducationCard = ({ description, uni, date, degree }) => {
    return (
        <div className=' border-l px-8  mb-10'>
            <div className=' text-primary-dark font-semibold bg-gray-100 px-2 rounded-2xl w-fit text-sm mb-5'>{date}</div>
            <div className=' flex items-center mb-3'>
                <div className=' font-semibold text-lg text-primary-dark mr-2'>{degree.toUpperCase()}</div>
                <div className=' w-6 bg-primary-dark h-[2px]'></div>
                <div className=' ml-3 font-semibold text-gray-500'>{uni.toUpperCase()}</div>

            </div>
            <div className=' text-primary-dark text-sm'>
                {description}
            </div>

        </div>
    )
}

export default EducationCard