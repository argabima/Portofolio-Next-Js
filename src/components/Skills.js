import React from 'react'
import  {motion} from "framer-motion"

const Skill = ({name, x, y}) => {

  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer
    absolute'
    whileHover={{scale:1.05}}

    initial={{x:0,y:0}}
    animate={{x:x, y:y }}
    repeat={{}}
    transition={{duration: 1.5}}
    viewport={{once: true}}
  > 
  {name}
  </motion.div>

  )
}

const Skills = () => {
  return (
    <>
     <h2 className='font-bold text-8xl mt-20 w-full text-center lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8'>Skill</h2>
     <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight md:h-[67vh]'>

        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
          whileHover={{scale:1.05}}
        > WEB
        </motion.div>

        <Skill  name="CSS" x="0vw" y="-20vw" />

        <Skill name="HTML" x="-20vw" y="0vw" />

        <Skill name="CSS" x="20vw" y="0vw" />

        <Skill name="HTML" x="0vw" y="20vw" />
     </div>
    </>
  )
}
export default Skills
