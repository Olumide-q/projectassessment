import React from 'react'
import './App.css'
import NavBar from './layouts/NavBar'
import Home from './pages/Home'
import Instant from './pages/Instantly'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'
import Verify from './component/reusables/Verify'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/instant' element={<Instant />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/verify' element={<Verify />} />
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
