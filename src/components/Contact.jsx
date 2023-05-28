import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variant'
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendContactMsg = (e) => {
    e.preventDefault()
    
    emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_PUBLIC_KEY}`)
      .then((result) => {
        toast.success("Contact message successfully sent")
        form.current.reset();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
        toast.error(error.text)
      });
  }

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>

        <div className='flex flex-col lg:flex-row'>

          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get In touch</h4>
              <h2 className='text-[45px] lg:text-[60px] leading-none mb-12'>Let's Build <br /> together</h2>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendContactMsg}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' action="">
            <input className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all'
              type="text"
              placeholder='Your Name'
              name="user_name"
            />
            <input className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all' 
              type="text"
              placeholder='Your email'
              name="user_email"
            />
            <textarea className='bg-transparent border-b py-12 outline-none w-full focus:border-accent transition-all resize-none mb-12'
              placeholder='Your Message'
              name="message"
            >

            </textarea>

            <button className='btn btn-lg' type='submit'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact