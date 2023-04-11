import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePics from "../../public/images/profile/aku.png"
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import HireMe from '@/components/HireMe'

const about = () => {
  return (
    <>
    <Head>
        <title>Tentang Aku</title>
        <meta name='description' content='any-description'/>
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
        <AnimatedText text="Anything about me" className='mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8'/>
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start 
            lg:col-span-4 md:order-2 sm:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'> Biography</h2>
                <p className='font-medium'>Hi, I'm Arga Bimantara, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
and user-centered digital experiences. I am always looking for 
new and innovative ways to bring my clients' visions to life.</p>
                <p className='my-4 font-medium'>I believe that design is about more than just making things look pretty – it's about solving problems and 
creating intuitive, enjoyable experiences for users. </p>
                <p  className='font-medium'>
                Whether I'm working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light 
            p-8 lg:col-span-4 md:order-1 sm:col-span-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark' />

                    <Image src={profilePics} className="w-full h-auto rounded-2xl" 
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between 
        lg:col-span-8 lg:flex-row lg:items-center md:order-3'>

                    <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-4xl font-bold my-3 md:flex-row md:text-3xl sm:text-3xl xs:text-3xl'>
                        Fresh Graduated
                    </span>
                    <span className='inline-block text-4xl font-bold my-3 md:flex-row md:text-3xl sm:text-3xl xs:text-3xl'>
                        Several Project Web Developer
                    </span>
                    </div>
            </div>


        </div>

        <div className='w-full my-5 border-t-2 border-solid border-dark font-medium text-lg absolute left-4'></div>

        <Skills />

        <div className='w-full my-5 border-t-2 border-solid border-dark font-medium text-lg absolute left-4'></div>

        <Experience />

        <div className='w-full my-5 border-t-2 border-solid border-dark font-medium text-lg absolute left-4'></div>

        <Education />
        </Layout>
        <HireMe />
    </main>
    </>
  )
}

export default about
