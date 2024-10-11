import React, { useEffect, useState } from 'react'
import adminBankito from '../assets/bankitoAdmin.png'
import axios from 'axios';
import { Escuelas } from './escuelas/Escuelas';
import { Alumnos } from './Alumnos';
import { Usuarios } from './Usuarios';
import { Reportes } from './Reportes';

export const Admin = () => {
    const [seccion, setSeccion] = useState('');
    const [logout, setLogout] = useState()


    console.log(seccion)

    return (
        <div className="flex h-screen">
            {/* Aside: Menú de navegación lateral */}
            <aside className="w-64 bg-red-700 text-white p-5 space-y-4">
                <h1 className="text-xl font-bold">Panel</h1>
                <img src={adminBankito} alt="" />
                <nav className="flex flex-col space-y-2">
                    <a onClick={(e) => setSeccion('Escuelas')} className="hover:bg-gray-700 p-2 rounded">Escuelas</a>
                    <a onClick={(e) => setSeccion('Alumnos')} className="hover:bg-gray-700 p-2 rounded">Alumnos</a>
                    <a onClick={(e) => setSeccion('Movimientos')} className="hover:bg-gray-700 p-2 rounded">Movimientos</a>
                    <a onClick={(e) => setSeccion('Reportes')} className="hover:bg-gray-700 p-2 rounded">Reportes</a>
                    <a onClick={(e) => setSeccion('Usuarios')} className="hover:bg-gray-700 p-2 rounded">Usuarios</a>
                    <a onClick={(e) => setSeccion('Salir')} className="hover:bg-red-700 p-2 rounded">Salir</a>
                </nav>
            </aside>

            {/* Contenido Principal */}
            <main className="flex-grow p-10 bg-gray-100">
                <header className="bg-blue-800 text-white p-4 rounded-md mb-5">
                    <h1>Bienvenid(a) a Bankito </h1>
                </header>
                {/* Aquí puedes agregar más contenido */}
                <div className="bg-white p-5 rounded shadow-md">
                    <h2 className="text-2xl font-bold">Panel de Control</h2>


                    <div>
                        {seccion === 'Escuelas' && <Escuelas />}
                        {seccion === 'Alumnos' && <Alumnos />}
                        {seccion === 'Reportes' && <Reportes />}
                        {seccion === 'Usuarios' && <Usuarios />}
                    </div>


                </div>
            </main>
        </div>
    )
}
