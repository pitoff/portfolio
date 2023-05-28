import React, { useState } from 'react'
import Logo from "../assets/portfolioLogo.png"
import Logo2 from "../assets/portLogo.png"
import { Link } from 'react-router-dom'
import { fadeIn } from '../variant'
import { motion } from 'framer-motion';

const Header = () => {

  const [open, setOpen] = useState(false)
  const [flex, setFlex] = useState(false)
  const [hidden, setHidden] = useState(true)

  const toggleNav = () =>
  {
    setOpen(!open)
    setFlex(!flex)
    setHidden(!hidden)
  }

  return (
    <div className='py-5'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <div>
            <a href="#">
              <img src={Logo2} className="h-[60px]" alt="my logo..." />
            </a>
          </div>

          <div>
            <nav className="container mx-auto p-6">
              
              <div className="flex items-container justify-between">
               
                {/* <div className="pt-2">
                  <img src="img/logo.svg" alt=""></img>
                </div> */}
               
                <div className="hidden font-bold space-x-6 md:flex">
                  <a href="/" className="hover:text-gradient"> HOME </a>
                  <a href="/about" className="hover:text-gradient"> ABOUT </a>
                  <a href="/portfolio" className="hover:text-gradient"> PORTFOLIO </a>
                  <a href="/contact" className="hover:text-gradient"> CONTACT </a>
                </div>

                <button onClick={toggleNav} id="menu-btn" className={`block hamburger md:hidden focu:outline-none ${open ? 'open' : ''}`}>
                  <span className="hamburger-top"></span>
                  <span className="hamburger-middle"></span>
                  <span className="hamburger-bottom"></span>
                </button>
              </div>

              <div className="md:hidden">
                <motion.div 
                  variants={fadeIn('down', 0.4)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{once:false, amount:0.7}}
                  id="menu"
                  className={`${flex ? 'flex' : ''} ${hidden ? 'hidden' : ''} myNav text-white absolute flex-col items-center py-8 mt-4 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
                >
                  <a href="/" className="hover:text-gradient"> HOME </a>
                  <a href="/about" className="hover:text-gradient"> ABOUT </a>
                  <a href="/portfolio" className="hover:text-gradient"> PORTFOLIO </a>
                  <a href="/contact" className="hover:text-gradient"> CONTACT </a>
                </motion.div>
              </div>
            </nav>
            {/* <button className='btn btn-sm'>
                Let's Build
              </button> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header