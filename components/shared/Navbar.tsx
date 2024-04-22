import React from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// import DialogAlert from './DialogAlert';
// import { handleLogout } from '@/actions/logout';

import { NavbarProps} from '@/index';

const Navbar = ({user}: NavbarProps) => {
 // const handleLogoutSubmit = async () => {
   // await handleLogout();
//}

  return (
    
    <header className="navbar">
          <div>
              <Link className=" text-xl font-bold md:text-2xl" href="#">
                <Image 
                  src='/kairos-main.svg'
                  alt='Kairos'
                  width={50}
                  height={50}
                />
              </Link>
          </div>
          <nav className='hidden sm:block'>
                <ul className="flex space-evenly">
                    <li className='mr-9'>
                        <a href="#">Home</a>
                    </li>
                    <li className='mr-9'>
                        <a href="#">About</a>
                    </li>
                    <li className='mr-9'>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
          
          <div className='flex gap-4 flex-center'>
            <div className='flex flex-col justify-center items-center'>
              {user.name}
              <span>
                <Link 
                className='underline text-xs'
                href='/'
              >
                
                Cerrar sesion
              
              </Link>
              </span>
            </div>
            

            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            

            <div>

            </div>
            <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  
                </SheetTrigger>

                <SheetContent className='w-64'>
                    <SheetHeader>
                        <SheetTitle>Kairos</SheetTitle>
                    </SheetHeader>
                    <nav>
                        <ul className='header-nav_elements'>
                            <li className='header-nav_text'>
                                  <Image 
                                    src='/icons8-casa.svg'
                                    alt='Kairos'
                                    width={20}
                                    height={20}
                                  />
                                <Link href="/about">
                                    Home
                                </Link>
                            </li>
                            <li className='header-nav_text'>
                                  <Image 
                                    src='/lessons.svg'
                                    alt='Kairos'
                                    width={20}
                                    height={20}
                                  />
                                <Link href="/services">
                                    Apredizaje
                                </Link>
                            </li>
                            <li className='header-nav_text'>
                                  <Image 
                                    src='/tools-fill.svg'
                                    alt='Kairos'
                                    width={20}
                                    height={20}
                                  />
                                <Link href="/contact">
                                    Herramientas
                                </Link>
                            </li>
                            <li className='header-nav_text'>
                                  <Image 
                                    src='/data-on-chain.svg'
                                    alt='Kairos'
                                    width={20}
                                    height={20}
                                  />
                                <Link href="/contact">
                                    Data On Chain
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </SheetContent>

              </Sheet>
            </div>
              
                
          </div>
            
    
    </header>

  )
}

export default Navbar