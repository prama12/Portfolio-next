
import React, { useEffect, useState } from 'react'
import Title from '../commen/Title'
import projectdata from "../data/projectdata"
import ProjectCard from './ProjectCard'

const Project = () => {

    const [animator, setAnimator] = useState(false)

    const [projectstate, setProjectstate] = useState(projectdata)
    const [filtercategory, setFiltercategory] = useState("all")
    const [categories, setCategories] = useState([])


    useEffect(() => {
        const categorydata = projectdata.map((category) => { return (category.category) })
        const categorywithnorepeat = [...new Set(categorydata)]
        setCategories(categorywithnorepeat)
    }, [])

    useEffect(() => {
        if (filtercategory === "all") {
            setProjectstate(projectdata)
        } else {
            const filtereddata = projectdata.filter((data) => {
                return (
                    data.category === filtercategory
                )
            })
            setProjectstate(filtereddata)
        }

    }, [filtercategory])

    useEffect(() => {
        setAnimator(true)
    }, [])

    return (
        <div className=" bg-gray-100 w-full h-screen">
            <div className={` relative bg-white w-full ${animator ? " h-screen " : "  h-0  "} ease-out duration-1000 transition-all `}>
                <div className={`${animator ? "opacity-100 mt-0" : "opacity-0 mt-20"} delay-700 duration-1000`}>

                    <div className=' max-w-6xl mx-auto mt-14 w-padding '>
                        <Title firstdata="my" seconddata="projects" backgroundtext="works" />

                        <div className=' flex justify-center gap-6 mt-12'>
                            <button onClick={() => setFiltercategory("all")} className={` ${filtercategory === "all" ? "text-primary-yellow" : "text-primary-dark"} duration-500 capitalize font-semibold text-primary-dark font-Poppins`}>
                                all
                            </button>
                            {
                                categories.map((category, index) => {
                                    return (
                                        <button onClick={() => setFiltercategory(category)} className={`capitalize font-semibold duration-500 text-primary-dark ${filtercategory === category ? "text-primary-yellow" : "text-primary-dark"}`} key={index}>
                                            {category}
                                        </button>
                                    )
                                })
                            }
                        </div>

                        <div className=' grid  grid-cols-12 gap-x-10 gap-y-16 my-12 '>
                            {projectstate.map((data, index) => {
                                return (
                                    <ProjectCard key={index} {...data} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project

