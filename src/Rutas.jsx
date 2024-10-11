import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Principal } from './components/Principal.jsx';
import { Login } from './components/Login.jsx';
import { Admin } from './components/Admin.jsx';
import { Alumnos } from './components/Alumnos.jsx';
import { Escuelas } from './components/escuelas/Escuelas.jsx';
import { Reportes } from './components/Reportes.jsx';
import { Usuarios } from './components/Usuarios.jsx';


export const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Principal />} />
        <Route path='login' element={<Login />} />
        <Route path='admin' element={<Admin />} />y
        <Route path='alumnos' element={<Alumnos />} />
        <Route path='escuelas' element={<Escuelas />} />
        <Route path='reportes' element={<Reportes />} />
        <Route path='usuarios' element={<Usuarios />} />
      </Routes>
    </Router>
  );
};