import React, { useRef } from 'react'
import { useScroll } from "framer-motion"
import  {motion} from "framer-motion"
import Lilcon from './Lilcon'

const Details = ({type, time, place, info}) =>{
    
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <Lilcon reference ={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0, type:"spring"}} >
            <h3 className='capitalize font-bold text-2xl'>
                {type} </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>
    )
}

const Education = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        
        {
            target: ref,
            offset: ["start end", "center start"] 
        }
    )
  return (
    <div className='my-40'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center
      lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8'>
        Education
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>
        
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                
                type ="Bachelor Of Information Technology in Informatics" 
                time="2019-2023"
                place="Telkom University" 
                info="The S1 Information Technology Study Program is a leading study program at Telkom University focusing on the realm of Internet of Things (IoT) and Cyber Security."
                />
            </ul>


      </div>
    </div>
  )
}

export default Education
