import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variant'
import { BsArrowUpRight } from 'react-icons/bs'
import stacks from '../assets/stacks.png'

const services = [
  {
    name: 'Laravel/PHP',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'Learn More'
  },
  {
    name: 'NodeJs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'Learn More'
  },
  {
    name: 'ReactJs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'Learn More'
  },
  {
    name: 'AWS & CICD',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'Learn More'
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex-1 bg-services lg:bg-bottom bg-no-repeat mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6 font-sans'>My Stacks</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I have Worked with and proficient with these stacks for 3 years +
            </h3>
            
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex-1'
          >
            {/* Services */}
            <div>
              {services.map((service, index) => {
                const {name, description, link} = service
                return <div className='border-b border-gray/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className='text-gradient text-sm'>{link}</a>
                  </div>
                </div>
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Services