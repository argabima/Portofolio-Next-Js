import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg
    '>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-3 z-10'>
        <span className='ml-[5%]'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <Link href="/"> Arga Bimantara </Link>
        <span className='mr-[5%]'> Kudus</span>
      </Layout>


    </footer>
  )
}

export default Footer
