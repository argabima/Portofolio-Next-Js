import React from 'react'
import  {motion} from "framer-motion"

const Skill = ({name, x, y}) => {

  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-blue text-light py-3 px-6 shadow-dark cursor-pointer
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

const Skillup = ({name, x, y}) => {

  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-3 shadow-dark cursor-pointer
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

        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-3 shadow-dark cursor-pointer'
          whileHover={{scale:1.05}}
        > Pemrograman
        </motion.div>

        <Skill  name="Framework" x="0vw" y="-20vw" />
        <Skillup  name="Bootstrap 5" x="10vw" y="-23vw" />
        <Skillup  name="Next JS" x="-10vw" y="-23vw" />
        <Skillup  name="Codeigniter 4" x="-14vw" y="-15vw" />
        <Skillup  name="Gin Go" x="-24vw" y="-25vw" />

        <Skill name="Back-End" x="-20vw" y="0vw" />
        <Skillup  name="Database MySQL" x="-27vw" y="7vw" />
        <Skillup  name="Java" x="-27vw" y="-7vw" />
        <Skillup  name="PHP" x="-30vw" y="-1vw" />
        <Skillup  name="Go" x="-40vw" y="-5vw" />

        <Skill name="IoT" x="23vw" y="0vw" />
        <Skillup  name="Arduino IDE" x="29vw" y="6vw" />


        <Skill name="Design" x="0vw" y="20vw" />
        <Skillup  name="Figma" x="10vw" y="23vw" />
        <Skillup  name="Fritzing" x="-10vw" y="23vw" />
     </div>
    </>
  )
}
export default Skills
