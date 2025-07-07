import React from 'react'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import DoctorsSection from './components/DoctorsSection'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import Code from './components/Code'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Code/>
    <About/>
    <ServicesSection/>
    <DoctorsSection/>

    <Reviews/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App