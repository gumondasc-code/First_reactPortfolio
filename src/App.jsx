import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Links from './pages/Links.jsx'
import './App.css'

function App() {
  return (
    <>
    <Router>
      <div className="font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/links" element={<Links/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
