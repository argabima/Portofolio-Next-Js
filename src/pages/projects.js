import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import HireMe from '@/components/HireMe'


const FeaturedProjects =({type, title, summary, img, link, github}) => {
    return (
        <articles className='w-full flex items-center justify-between rounded-3xl relative rounded-br-2xl
         border border-solid border-dark bg-light shadow-2xl p-12 xs:rounded-2xl xs:rounded-br-3xl'>

        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
        <Link href={link} target="_blank"
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg
        lg:w-full'
        >
            <Image src={img} alt={title} className="w-full h-auto" 
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
            />
        </Link>

        <div className='w-1/2 flex flex-col item-start justify-between pl-6 lg:w-full lg:pl-2 lg:pt-5'>
            <span className='text-primary font-medium text-xl xs:text-base'>{type}
            </span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark'>{summary}</p>
        <div className='mt-2 flex items-center'>

        <Link href={github} target="_blank" className='w-[10%]'> <GithubIcon /></Link>
        <Link href={link} target="_blank" className='ml-4 rounded-lg bg-black text-light py-2 px-6 font-semibold
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
            <span className='text-primary font-medium text-xl'>{type}
            </span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        
        <div className='w-full mt-2 flex items-center justify-between'>

        <Link href={link} target="_blank" className='text-lg font-semibold underline'> Visit Project</Link>
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

    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
        <AnimatedText text="Imagination Trumps Knowledge!" className='my-4 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8'/>

        <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-16 md:gap-y-24 sm:gap-y-24 xs:gap-x-0'>
            <div className='col-span-12'>
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
            </div>
            <div className='col-span-6'>
                
            <Projects 
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Projects"
                
                />
            </div>
            <div className='col-span-6'>
            
            <Projects 
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Projects"
                
                />

            </div>


            <div className='col-span-12'>
                
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

            </div>
            <div className='col-span-6'>
                
            <Projects 
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Projects"
                
                />

            </div>
            <div className='col-span-6'>
                
            <Projects 
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Projects"
                
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
