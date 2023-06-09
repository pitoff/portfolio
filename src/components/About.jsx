import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion'
import { fadeIn } from '../variant'
import { BsArrowUpRight } from 'react-icons/bs'
import serviceImg from '../assets/services.png'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    <section className='section h-fit' id='about' ref={ref}>
      <div className="container mx-auto mb-32">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] bg-top'
          >
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex-1 text-xl p-1'
            style={{fontFamily:`Arial`}}
          >
            <h2 className='h2 text-accent text-gradient'>About me.</h2>
            <h3 className='h3 mb-4'>Certified Full Stack Developer</h3>
            <p>I love simple, user friendly and interactive designs.</p><hr></hr><br></br>
            <p>I love dealing with sophisticated database queries and well structured codes.</p><hr></hr><br></br>
            <p>I derive joy in problem solving, however I developed an application 
              for my sibling who is a make up artist visit <span><a href="#"> kween-cindy.com</a></span>
            </p><hr></hr><br></br>
            <p>
              My current toolset includes:
              <div className='pl-8'>
                <ul style={{listStyle:`circle`}}>
                  <li>HTML, CSS, BOOTSTRAP, TAILWIND</li>
                  <li>Javascript - ReactJs, VueJs and NodeJs</li>
                  <li>PHP and Laravel</li>
                  <li>Github, Docker, CICD and AWS</li>
                </ul>
              </div>
            </p><hr></hr><br></br>
            <p className='mb-6'>
            If you are looking for a talented software developer with good problem solving skills,
            search no more. I assure you, hiring me would be of great help to team...
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About