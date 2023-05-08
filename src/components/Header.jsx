import React from 'react'
import Logo from "../assets/portfolioLogo.png"
import { Link } from 'react-router-dom'

const Header = () => {

  const toggleNav = () =>
  {
    const btn = document.getElementById('menu-btn')
    const nav = document.getElementById('menu')
    
    btn.addEventListener('click', () => {
        btn.classList.toggle('open')
        nav.classList.toggle('flex')
        nav.classList.toggle('hidden')
    })
  }

  return (
    <div className='py-5'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <div>
            <a href="#">
              <img src={Logo} className="h-[60px]" alt="my logo..." />
            </a>
          </div>

          <div>
            <nav className="relative container mx-auto p-6">
              
              <div className="flex items-container justify-between">
               
                {/* <div className="pt-2">
                  <img src="img/logo.svg" alt=""></img>
                </div> */}
               
                <div className="hidden font-bold space-x-6 md:flex">
                  <a href="/" className="hover:text-darkGrayishBlue"> HOME </a>
                  <a href="/about" className="hover:text-darkGrayishBlue"> ABOUT </a>
                  <a href="/portfolio" className="hover:text-darkGrayishBlue"> PORTFOLIO </a>
                  <a href="/contact" className="hover:text-darkGrayishBlue"> CONTACT </a>
                </div>

                <button onClick={toggleNav} id="menu-btn" className="block hamburger md:hidden focu:outline-none">
                  <span className="hamburger-top"></span>
                  <span className="hamburger-middle"></span>
                  <span className="hamburger-bottom"></span>
                </button>
              </div>

              <div className="md:hidden">
                <div id="menu" className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                  <a href="/" className="hover:text-darkGrayishBlue"> HOME </a>
                  <a href="/about" className="hover:text-darkGrayishBlue"> ABOUT </a>
                  <a href="/portfolio" className="hover:text-darkGrayishBlue"> PORTFOLIO </a>
                  <a href="/contact" className="hover:text-darkGrayishBlue"> CONTACT </a>
                </div>
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