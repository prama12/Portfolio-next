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
import { useRef, useEffect, useState } from 'react'

const PersonalInfo = () => {
  const skillref = useRef()
  const [myElementIsVisible, updateMyElementIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      updateMyElementIsVisible(entry.isIntersecting);
    });

    observer.observe(skillref.current);
  }, []);
  return (
    <div className=' max-w-6xl w-padding mx-auto'>
      <div className=' w-full '>
        <Header title="Personal Infos" />
        <div className=' lg:grid grid-cols-12'>
          <div className=' mt-6 grid grid-cols-2 gap-y-3 col-span-7'>
            {
              Object.keys(about).map((key, index) => {
                return (
                  <div className='  w-full overflow-auto flex flex-col md:flex-row ' key={index}>
                    <span className=' font-normal text-gray-400 capitalize'>{key}:</span>  <span className=' mx-0 md:mx-2 text-primary-dark dark:text-primary-light text-sm font-semibold 
                    '>{about[key]}</span>
                  </div>
                )
              })
            }
            <div className=' col-span-2 text-sm md:text-base my-6 '>
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

        {/* <div className=' flex justify-center  '> */}

        <div
          ref={skillref}
          className=' grid grid-cols-12 py-10 w-full '>
          {myElementIsVisible &&
            skills.map((data, index) => {
              return (
                <ProgressBar key={index} {...data} />
              )
            })
          }
        </div>
        {/* </div> */}


        <div className=' flex justify-center text-center mt-20 mb-20'>
          <Header title="experience & education" />
        </div>
        <div className=' md:flex mb-16 '>
          <div className='  '>
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