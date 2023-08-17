import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import Contacts from '../pages/Contacts'
import AboutUs from '../pages/AboutUs'


const Navigation = () => {
  return (
    <Router>
        <ul>
            <li>
                <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/contacto">Contacto</NavLink>
            </li>
            <li>
                <NavLink to="/nosotros">Nosotros</NavLink>
            </li>
        </ul>
        <Routes>
            <Route path='/' element={<Home/>} / >
            <Route path='/contacto' element={<Contacts/>} / >
            <Route path='/nosotros' element={<AboutUs/>} / >
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    </Router>
  )
}

export default Navigation