import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import Nav from './components/Nav'
import Home from './components/Home'
import Card from './components/RedirectCard'

export default function App() {
 return (
    <div className="wrapper">
        <Nav />
        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes>
    </div>
  )
}


