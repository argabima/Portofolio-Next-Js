import Head from 'next/head'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Image from 'next/image'
import profilePics from "../../public/images/profile/aku.png"
import profilePics2 from "../../public/images/profile/bri.png"
import profilePics3 from "../../public/images/profile/Logo-BEE.png"
import profilePics4 from "../../public/images/profile/hacktiv8.png"
import Link from 'next/link'
import HireMe from '../components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (

    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>

      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen 2xl:'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/3 md:w-1/2.5'>
              <Image src={profilePics} alt="Foto" className='w-full h-auto lg:hidden md:inline-block md:w-full '
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Undergraduate Information Technology Student at Telkom University" className='!text-3xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl'
              />
              <p className='my-4 text-base font-medium md:text-md sm:text-sm'>
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start my-2 lg:self-center'>
                <Link href="/CV - Arga Bimantara1.pdf" target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparant 
                hover:border-dark md:p-2 md:px-4 md:text-base"
                > Resume </Link>
                <Link href="mailto:argabimantara8@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline
                md:text-base'> Contact </Link>
              </div>

              <div className='flex items-center self-center mt-5 sm:flex-col'>
                <h1 className='font-medium'>Experience Work : </h1>
                <Image src={profilePics2} alt="Foto" className='w-20 h-auto mx-3'/>
                <Image src={profilePics3} alt="Foto" className='w-20 h-auto mx-3'/>
                <Image src={profilePics4} alt="Foto" className='w-20 h-auto mx-3'/>
              </div>

            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  )
}
