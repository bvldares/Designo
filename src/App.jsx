import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import Nav from './components/Nav'
import Home from './components/Home'
import Webdesign from "./components/Webdesign"
import Appdesign from "./components/Appdesign"
import Graphic from "./components/Graphic"
import Card from './components/RedirectCard'
import Footer from './components/Footer'
export default function App() {
 return (
    <div className="wrapper">
        <Nav />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/webdesign' element={<Webdesign />} />
            <Route path='/appdesign' element={<Appdesign />} />
            <Route path='/graphicdesign' element={<Graphic/>} />
        </Routes>
        <Footer />
    </div>
  )
}


