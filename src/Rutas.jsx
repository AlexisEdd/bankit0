import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Principal } from './components/Principal.jsx';
import { Login } from './components/Login.jsx';
import { Admin } from './components/Admin.jsx';
import { Alumnos } from './components/Alumnos.jsx';


export const Rutas = () => {
  return (
   <Router>
    <Routes>
    <Route path='' element={<Principal/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='admin' element={<Admin/>} />
    <Route path='alumnos' element={<Alumnos/>} />
    </Routes>
    </Router>
  );
};