import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href='/' className='flex space-x-2 items-center'>
        <Image src='/public/logo.svg' alt='Logo' width={42} height={42}/>
        <span className='font-extrabold hidden text-3xl sm:inline-block text-gray-700'>
            EpicStore
        </span>
    </Link>
  )
}

export default Logo