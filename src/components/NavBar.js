import React, { useState } from 'react'
import Link from 'next/link'
import Logo from "./Logo"
import TwitterIcon from "./Icons"
import Image from 'next/image'
import profilePics from "../../public/images/profile/linkedin.svg"
import profilePics2 from "../../public/images/profile/github.svg"
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();

  return(
    <Link href={href} className={`${className} relative group`}>
    {title}

    <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
    ${router.asPath === href ? 'w-full': 'w-0'}
    `}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({href, title, className="", toogle}) => {
  const router = useRouter();

  const handleClick = () =>{
    toogle();
    router.push(href)
  }
  return(
    <button href={href} className={`${className} relative group text-light my-2`}
    onClick={handleClick} >
    {title}

    <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
    ${router.asPath === href ? 'w-full': 'w-0'}
    `}>&nbsp;</span>
    </button>
  )
}


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{
      setIsOpen(!isOpen)
  }

  return (
    <header
      className='w-full px-32 py-8 font-medium flex items-center justify-between
      relative z-10 lg:px-16 md:px-12 sm:px-8'
      >

      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'} `}></span>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>

      </button>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
        </div>

        <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href='/' title="Home" className='mr-4' />
          <CustomLink href='/about' title="About" className='mx-4' />
          <CustomLink href='/projects' title="Projects" className='mx-4'/>
        </nav>

        <nav className='flex'>
        <Link href='/' target={"_blank"}>
        <Image src={profilePics} alt="Sosmed" className='w-5 h-auto mx-3'/>
        </Link>
        <Link href='/' target={"_blank"}>
        <Image src={profilePics2} alt="Sosmed" className='w-5 h-auto mx-3'/>
        </Link>
        
        </nav>
        </div>

        {
          isOpen ?
          <motion.div
          initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
          animate={{scale:1, opacity:1}}


          className='min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark/50  rounded-lg backdrop-blur-md py-32'>
        <nav className='flex flex-col items-center justify-center mb-5'>
          <CustomMobileLink href='/' title="Home" className='mx-4' toogle={handleClick} />
          <CustomMobileLink href='/about' title="About" className='mx-4' toogle={handleClick} />
          <CustomMobileLink href='/projects' title="Projects" className='mx-4' toogle={handleClick}/>
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
        <Link href='/' target={"_blank"}>
        <Image src={profilePics} alt="Sosmed" className='w-6 h-auto mx-3 sm:mx-3'/>
        </Link>
        <Link href='/' target={"_blank"}>
        <Image src={profilePics2} alt="Sosmed" className='w-6 h-auto mx-3 sm:mx-3'/>
        </Link>
        
        </nav>
        </motion.div>

          : null
        }

    </header>
  )
}

export default NavBar
