import React from 'react'
import Button from '../commen/Button'
import Header from '../commen/Header'
import about from "../data/about"
import DownloadIcon from "../../public/static/icons/download.svg"
import aboutcard from "../data/aboutcard"
import Card from '../commen/Card'
import ProgressBar from '../commen/ProgressBar'
import skills from '../data/skills'
import { education, experience } from "../data/experienceeducation"
import EducationCard from '../commen/EducationCard'

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
                    <span className=' font-normal text-gray-400 capitalize'>{key}</span> : <span className=' mx-2 text-primary-dark text-sm font-semibold'>{about[key]}</span>
                  </div>
                )
              })
            }
            <div className=' col-span-2 mt-6 '>
              <Button text="Download CV" icon={<DownloadIcon />} />
            </div>
          </div>

          <div className=' grid grid-cols-2 gap-5 col-span-5'>
            {
              aboutcard.map((data, index) => {
                return (
                  <Card key={index} {...data} />
                )
              })
            }
          </div>
        </div>

        <div className=' flex justify-center mt-20 py-8'>
          <Header title="MY SKILLS" />
        </div>
        <div className=' flex justify-center  '>
          <div className=' grid grid-cols-12  justify-center gap-24 py-10 '>
            {
              skills.map((data, index) => {
                return (
                  <ProgressBar key={index} {...data} />
                )
              })
            }
          </div>
        </div>


        <div className=' flex justify-center mt-20 mb-10'>
          <Header title="experience & education" />
        </div>
        <div className=' lg:grid grid-cols-2'>
          <div className=''>
            {
              experience.map((data, index) => {
                return (
                  <EducationCard {...data} key={index} />
                )
              })
            }
          </div>
          <div>
            {
              education.map((data, index) => {
                return (
                  <EducationCard {...data} key={index} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo