import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter , Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Error from './pages/error'

import './index.css'
import './dist/output.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)
 