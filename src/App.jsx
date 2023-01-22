import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import Nav from './components/Nav'
import Home from './components/Home'
import Webdesign from "./components/Webdesign"
import Appdesign from "./components/Appdesign"
import Graphic from "./components/Graphic"
import About from './components/About'
import Footer from './components/Footer'
import Location from './components/Location'
export default function App() {
 return (
    <>
        <Nav />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/webdesign' element={<Webdesign />} />
            <Route path='/appdesign' element={<Appdesign />} />
            <Route path='/graphicdesign' element={<Graphic/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/location' element={<Location/>} />
        </Routes>
        <Footer />
    </>
  )
}


