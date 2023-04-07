import React from 'react'
import Link from 'next/link'
import Logo from "./Logo"
import TwitterIcon from "./Icons"
import Image from 'next/image'
import profilePics from "../../public/images/profile/linkedin.svg"
import profilePics2 from "../../public/images/profile/github.svg"
import { useRouter } from 'next/router'

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

const NavBar = () => {
  return (
    <header
      className='w-full px-32 py-8 font-medium flex items-center justify-between'
      >
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
        </div>

        <nav>
          <CustomLink href='/' title="Home" className='mr-4' />
          <CustomLink href='/about' title="About" className='mx-4' />
          <CustomLink href='/projects' title="Projects" className='mx-4'/>
          <CustomLink href='/articles' title="Articles"className='ml-4' />
        </nav>

        <nav className='flex'>
        <Link href='/' target={"_blank"}>
        <Image src={profilePics} className='w-5 h-auto mx-3'/>
        </Link>
        <Link href='/' target={"_blank"}>
        <Image src={profilePics2} className='w-5 h-auto mx-3'/>
        </Link>
        
        </nav>

    </header>
  )
}

export default NavBar
