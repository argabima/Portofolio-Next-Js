import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion";
import Image from 'next/image';
import sharingan from "../../public/images/profile/MKY.png"

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
        <MotionLink href="/" 
        className='w-14 h-14 bg-dark text-light flex items-center justify-center rounded-full animate-spin hover:animate-spin-slow text-2xl font-bold'
        animate={{
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition:{duration:1, repeat:Infinity}
        }}
        >    
        <Image src={sharingan} alt="Sosmed" className='w-15 h-15 fill-dark'/>
        </MotionLink>
    </div>
  )
}

export default Logo
