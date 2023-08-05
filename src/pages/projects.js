import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/swev1.png";
import project2 from "../../public/images/projects/musika.png";
import project3 from "../../public/images/projects/soluta.png";
import project4 from "../../public/images/projects/Ramalan.png";
import project5 from "../../public/images/projects/bri project.png";
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'


const FeaturedProjects =({type, title, summary, img, link, github,github1}) => {
    return (
        <articles className='w-full flex items-center justify-between rounded-3xl relative rounded-br-2xl
         border border-solid border-dark bg-light shadow-2xl p-12 
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl'>

        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
        <Link href={link} target="_blank"
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg
        lg:w-full'
        >
            <Image src={img} alt={title} className="w-full h-auto relative" 
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
            />
        </Link>

        <div className='w-1/2 flex flex-col item-start justify-between pl-6 lg:w-full lg:pl-2 lg:pt-5'>
            <span className='text-primary font-medium text-xl xs:text-base sm:text-sm'>{type}
            </span>
            <span target="_blank" className='hover:animate-none underline-offset-2 sm:text-sm'>
            <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
        </span>
        <p className='my-2 font-medium text-dark'>{summary}</p>
        <div className='mt-2 flex items-center'>

        <Link href={github} target="_blank" className='w-[10%]'> <GithubIcon /></Link>
        <Link href={github1} target="_blank" className='w-[10%]'> <GithubIcon /></Link>
        <Link href={link} target="_blank" className='ml-4 rounded-lg bg-black text-light hover:bg-light hover:text-dark hover:border border-solid border-dark py-2 px-6 font-semibold
        sm:px-3 sm:text-base'> Visit Project</Link>
        </div>
        </div>
        </articles>
    )
}

const Projects =({type, title, img, link, github}) => {
    return (
        <articles className='w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative'>
            
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl' />
            <Link href={link} target="_blank"
        className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
            <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className='w-full flex flex-col item-start justify-between mt-4'>
            <span className='text-primary font-medium text-xl sm:text-sm'>{type}
            </span>
            <span target="_blank" className='hover:animate-none underline-offset-2 sm:text-sm'>
            <h2 className='my-2 w-full text-left text-3xl font-bold sm:text-sm'>{title}</h2>
        </span>
        
        <div className='w-full mt-2 flex items-center justify-between'>

        <Link href={link} target="_blank" className='text-lg font-semibold underline '> Visit Project</Link>
        <Link href={github} target="_blank" className='w-[8%]'> <GithubIcon /></Link>
        
            </div>
        </div>
        </articles>
    )
}

const projects = () => {
  return (
    <>
    <Head>
        <title>Project Saya</title>
        <meta name='description' content='any-description'/>
    </Head>
    
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
        <AnimatedText text="Based on Real Projects" className='my-4 xl:!text-5xl lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8'/>

        <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-24 xs:gap-x-0'>
            <div className='col-span-12'>
                <FeaturedProjects 
                title="Dashboard Data Transaction"
                img={project5}
                summary="Project Team DBD Ceria Develop a Dashboard Data Transaction with Go and React JS"
                link="https://ddbceria-finpro.vercel.app/"
                github="https://github.com/vincenntod/finpro"
                github1="https://github.com/IchsanR/Final-Project-FE-DDB-Ceria"
                type="Internship Projects"
                
                />
            </div>
            <div className='col-span-6'>
                
            <Projects 
                title="Swevel Company Profile and Learning Platform Project"
                img={project1}
                link="http://swevel.wotle.org/"
                github="https://github.com/Sendibayu2210/swevel"
                type="Magang Projects"
                
                />

            </div>
            <div className='col-span-6'>
                
            <Projects 
                title="Musika Compro Web"
                img={project2}
                link="https://musika.id/"
                github="https://github.com/Sendibayu2210/swevel_clone"
                type="Magang Projects"
                
                />
            </div>
            <div className='col-span-6'>
            
            <Projects 
                title="Solusi Utama Compro Web"
                img={project3}
                link="https://solusiutama.co.id/"
                github="https://github.com/abdlazs/Solusi-Utama-Konsultan"
                type="Magang Projects"
                
                />

            </div>


            {/* <div className='col-span-12'>
                
            <FeaturedProjects 
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Projects"
                
                />

            </div> */}
            <div className='col-span-6'>
                
            <Projects 
                title="Ramalan Cuaca Web"
                img={project4}
                link="project-final-04-kelompok-1.vercel.app"
                github="https://github.com/argabima/PROJECT-FINAL-04-KELOMPOK-1"
                type="Studi Independen Projects"
                
                />

            </div>
            
        </div>

        </Layout>
        <HireMe />
    </main>
    </>
  )
}

export default projects
