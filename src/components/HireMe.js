import React from 'react'
import thumbnail from "../../public/images/svgs/Logo.svg"
import Image from 'next/image'
import Link from 'next/link'

const LinkWA = ({WA}) => {
  return (
    <Link href={WA} className='flex items-center justify-center 
    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    bg-dark text-light shadow-md border border-solid border-dark
    w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
    md:w-12 md:h-12 md:text-[10px]'
    
    >
      Hire Me
    </Link>
  )
}

const HireMe = () => {
  return (
    <div className='fixed right-4 bottom-4 flex items-center z-5 justify-center overflow-hidden 
    md:right-8 md:left-auto md:top-2 md:bottom-auto md:absolute'>
      
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
      <Image src={thumbnail} alt="Sosmed" className='fill-dark animate-spin-slow hover:animate-spin'/>
      
      <LinkWA 
      WA="https://wa.me/6282216136926"
      />
      </div>
    </div>
  )
}

export default HireMe
