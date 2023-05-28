import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variant'
import { BsArrowUpRight } from 'react-icons/bs'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Works = () => {
  return (
    <section className='section' id='works'>
      <div className='container mx-auto'>

        <div className='flex flex-row justify-center'>
          <h2 class="max-w-md text-4xl font-bold text-center md:text-left py-2 text-gradient">
            My Latest Projects
          </h2>
        </div>

        <div className='flex flex-col-reverse md:flex-row gap-x-10 bg-gray'>

          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='md:w-1/2'>
            <h3 class="max-w-md text-2xl font-bold text-center md:text-left">
              Make up booking application
            </h3>
            <p class="max-w-md text-center md:text-left">
              This is a web application that aid's clients to
              book a make up session and make payments when the booking is accepted.
              The make up artist can accept/decline booking, view booking reports et.c.
            </p>
            <p className='max-w-md text-center md:text-left'>
              <span className='text-gradient'>Version 1 Technology:</span> Laravel Framework
            </p>
            <p className='max-w-md text-center md:text-left'>
              <span className='text-gradient'>Url:</span> <a href=""> Kweencindy.com </a>
            </p>
            <p className='max-w-md text-center md:text-left'>
              <span className='text-gradient'>Version 2 Technology:</span> Mern Stack
            </p>
            <p className='max-w-md text-center md:text-left'>
              <span className='text-gradient'>Url:</span> <a href=""> Kweencindy-mern.com </a>
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='md:w-1/2 h-80'>
            <a href="">
              <img className='group-hover:scale-125 transition-all duration-500 rounded-t-lg' src={Img1} alt="" />
            </a>
          </motion.div>

        </div>

        <div className='flex flex-col-reverse md:flex-row gap-x-10 bg-gray mt-8 mb-4'>

          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='md:w-1/2'>
            <h3 className="max-w-md text-2xl font-bold text-center md:text-left">
              Landlord property Manager
            </h3>
            <p className="max-w-md text-center md:text-left">
              Web application that aid's property owners in managing their property,
              notify occupants of due rent, keep track of payment and occupants,
              pay rent online and issue reciepts, View history and reports.
            </p>
            <p className='max-w-md text-center md:text-left'>
              <span className='text-gradient'>Technology:</span> Back-end Api (Laravel), Front-end (ReactJs)
            </p>
            <p className='max-w-md text-center md:text-left'>
              <span className='text-gradient'>Url:</span> <a href="https://landlordpropertymanager.com"> landlordpropertymanager.com </a>
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='md:w-1/2 h-80 border-white/50'>
            <a href="">
              <img className='group-hover:scale-125 transition-all duration-500 rounded-b-lg' src={Img2} alt="" />
            </a>
          </motion.div>

        </div>



      </div>
    </section >
  )
}

export default Works