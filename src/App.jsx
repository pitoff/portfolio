import { useState } from 'react'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Services from './components/Services'
import Works from './components/Works'

function App() {

  return (
    <div>
      <Header />
      <Banner />
      <NavBar />
      <About />
      <Services />
      <Works />
      <Contact />
    </div>
  )
}

export default App
