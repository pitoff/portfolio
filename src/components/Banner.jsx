import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from "../assets/porfolioImage.png"
import { fadeIn } from '../variant'
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

          <div className='flex-1 text-center font-secondary lg:text-left'>

            <motion.h1 
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                  type: "tween",
                  duration: "2",
                  delay: "0.5"
              }}
              className='myName text-[55px] font-bold leading-[0.8] lg:text-[70px]'
            >
              Peter <span>Offodile</span>
            </motion.h1>

            <motion.div 
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='mb-6 text-[36px] lg:text-[30px] font-secondary font-semibold leading-[1]'>
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'Fullstack Engineer',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p 
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
            Talented software developer, experienced in sophisticated backend development, proficient in consumption of API's, determined in building scalable applications 
            that aids in solving daily problems. 
            </motion.p>

            <motion.div 
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>Contact me</button>
              <a href="#" className='text-gradient btn-link'>
                My portfolio
              </a>
            </motion.div>

            <div>

            </div>
            
          </div>

          <motion.div 
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            className='hidden lg:flex max-w-[320px] lg:max-w-[482px]'
          >
            <img src={Image} className="h-[350px] rounded-full" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner