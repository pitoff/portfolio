import React from 'react'
import Logo from "../assets/portfolioLogo.png"

const Header = () => {
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
              <button className='btn btn-sm'>
                Let's Build
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header