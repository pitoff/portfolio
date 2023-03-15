import React from 'react'
import { UserIcon, HomeIcon, ClipboardIcon, BriefcaseIcon, InboxIcon } from "@heroicons/react/24/outline"
import { Link } from "react-scroll"

const NavBar = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div className="container mx-auto">
            <div className='w-full bg-black/20 h-[96px] 
            backdrop-blur-2xl rounded-t-xl max-w-[460px] 
            mx-auto px-5 flex justify-between text-2xl'
            >
                <Link 
                    to='home' 
                    className='cursor-pointer w-[60px] flex items-center justify-center'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    offset={-200}
                >
                    <HomeIcon className='h6 w-6'/>
                </Link>
                <Link 
                    to='about' 
                    className='cursor-pointer w-[60px] flex items-center justify-center'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                >
                    <UserIcon className='h-6 w-6'/>
                </Link>

                <Link 
                    to='services' 
                    className='cursor-pointer w-[60px] flex items-center justify-center'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                >
                    <ClipboardIcon className='h-6 w-6'/>
                </Link>

                <Link 
                    to='works' 
                    className='cursor-pointer w-[60px] flex items-center justify-center'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                >
                    <BriefcaseIcon className='h-6 w-6'/>
                </Link>

                <Link 
                    to='contact' 
                    className='cursor-pointer w-[60px] flex items-center justify-center'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                >
                    <InboxIcon className='h-6 w-6'/>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar