import React from 'react'
import Navbar from './components/layout/Navbar'
import HeroSection from './pages/HeroSection'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <div className='bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-900 overflow-hidden'>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills />
      <Projects/>
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App