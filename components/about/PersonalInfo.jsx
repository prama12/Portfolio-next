import React from 'react'
import Button from '../commen/Button'
import Header from '../commen/Header'
import about from "../data/about"
import DownloadIcon from "../"
const PersonalInfo = () => {
  const data = Object.keys(about)
  return (
    <div className=' max-w-6xl mx-auto'>
      <div className=' w-full '>
        <Header title="Personal Infos" />


        <div className=' lg:grid grid-cols-12'>
          <div className=' mt-6 md:grid grid-cols-2 gap-y-3 col-span-7'>
            {
              Object.keys(about).map((key, index) => {
                return (
                  <div className=' ' key={index}>
                    <span className=' font-extralight text-gray-400 capitalize'>{key}</span> : <span className=' mx-2 text-primary-dark text-sm font-semibold'>{about[key]}</span>
                  </div>
                )
              })
            }
            <div className=' col-span-2 '>
              <Button text="Download CV" icon= />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo