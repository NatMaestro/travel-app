"use client";

import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    
  return (
    <nav className=' flexBetween max-container padding-container relative z-30 py-10 overflow-x-auto '>
        <Link href="/">
            <Image src="/camp.svg" alt='logo' width={74} height={29}/>
            <span className=' text-red-500 font-semibold'>Travel Diaries</span>
        </Link>
        
        
        <ul className={`${isOpen? " flex top-[60px] w-full p-10 left-0 gap-5 flex-row hover:text-white" : 'hidden'} flex-col md:flex-row h-full gap-12 lg:flex font-semibold`}>
            {[NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 trasition-all hover:font-bold'>
                    {link.label}
                </Link>
            ))]}
        </ul>

        <div className='lg:flexCenter hidden'>
            <Button 
                type = 'button'
                title= "Login"
                icon= "/user.svg"
                variant="btn_dark_green"
            />
        </div>
        <Image src="/menu.svg" alt='menu' width={32} height={32} className='inline-block cursor-pointer lg:hidden'
         onClick={() => {setIsOpen(!isOpen);}} />


    </nav>
  )
}

export default Navbar