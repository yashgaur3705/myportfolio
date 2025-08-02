import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import Footer from './Footer'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Education/>
    <Contact/>
    <Footer/>

    </div>
     

    </>
  )
}

export default App
