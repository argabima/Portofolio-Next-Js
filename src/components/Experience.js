import React, { useRef } from 'react'
import { useScroll } from "framer-motion"
import  {motion} from "framer-motion"
import Lilcon from './Lilcon'

const Details = ({position, company, companyLink, time, address, work}) =>{
    
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <Lilcon reference ={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0, type:"spring"}} >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a href={companyLink}
            target="_blank"
            className='text-primary capitalize'
            > {company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
    )
}

const Experience = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        
        {
            target: ref,
            offset: ["start end", "center start"] 
        }
    )
  return (
    <div className='my-20'>
      <h2 className='font-bold text-6xl mb-32 w-full text-center
      lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8'>
        Experience
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>
        
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                
                position ="Fullstack Dev" 
                company="PT Baracipta Esa Engineering"
                time="Aug - Dec 2022 " 
                address="Sleman Yogyakarta"
                work="Develop a company profile web project using the Codeigniter 4 framework,
                 Create a database with tables and fields by design, up to the SQL module for accessing data,
                 Testing and Deployment Web with perform UAT testing and create the test document"

                />

                <Details 
                
                position ="Web Developer Program" 
                company="Hacktiv8"
                time="Feb - July 2022" 
                address="Bandung"
                work="Understand the Basics & Fundamentals of being a website programmer,
                Understand and be able to implement website interface development including Responsive View Interface,
                 Understand 1 cycle of Website development,
                 Can do online website deployment and development."

                />
            </ul>


      </div>
    </div>
  )
}

export default Experience
