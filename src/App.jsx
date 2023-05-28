import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Services from './components/Services'
import Works from './components/Works'
import Footer from './components/Footer'

function App() {

  return (
    <div className='min-h-full'>
      <BrowserRouter>
        <Header />
        {/* <NavBar /> */}
        
        <Routes>
            <Route exact path='/' element={<Banner />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/portfolio' element={<Works />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  )
}

export default App
