import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ name, percent }) => {
    const [percentsetter, setPerentsetter] = useState(1)
    useEffect(() => {
        setPerentsetter(percent)
    }, [])
    return (
        <div className=' w-36 col-span-6 md:col-span-3 flex flex-col items-center gap-3'>
            <CircularProgressbar
                styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'butt',
                    textSize: '16px',
                    pathTransitionDuration: 2,
                    pathColor: `#ffb400`,
                    textColor: '#666666',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}
                strokeWidth={8} value={percentsetter} maxValue={100} text={`${percentsetter}%`} />
            <div className=' font-medium text-primary-dark'>{name.toUpperCase()}</div>
        </div>
    )
}

export default ProgressBar