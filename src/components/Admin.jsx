import React, { useEffect, useState } from 'react'
import adminBankito from '../assets/bankitoAdmin.png'
import axios from 'axios';
import { Escuelas } from './escuelas/Escuelas';
import { Alumnos } from './alumnos/Alumnos';
import { Usuarios } from './Usuarios';
import { Reportes } from './Reportes';
import { ArrowRightCircle, ArrowRightLeft, CoinsIcon, UserPlus } from 'lucide-react';

export const Admin = () => {
    const [seccion, setSeccion] = useState('');
    const [selectedSchool, setSelectedSchool] = useState(null);
    const [panel, setPanel] = useState(false);
    const acciones = [
        { clave: 'mov', nombre: 'Movimientos', icono: ArrowRightLeft },
        { clave: 'ret', nombre: 'Retiros', icono: CoinsIcon },
        { clave: 'nalumno', nombre: 'Registrar nuevo Alumno', icono: UserPlus }
    ];
    const [inicio, setInicio] = useState(true);

    // Navegacion historial
    const Breadcrumb = () => (
        <nav className="text-sm text-gray-500 p-4">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <a href="#" onClick={() => {
                        setPanel(true);
                        setSeccion('');
                        setSelectedSchool(null)
                    }}
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Inicio
                    </a>
                </li>
                {seccion &&
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="#"
                                onClick={() => {
                                    setSelectedSchool(null);
                                    setSeccion('Escuelas');
                                }}
                                class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{seccion}</a>
                        </div>
                    </li>}
                {selectedSchool &&
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{selectedSchool}</span>
                        </div>
                    </li>}
            </ol>
        </nav >
    );
    

    // MOSTRAR SECCION INICIO

    useEffect(() => {
        if (seccion === '' || seccion === 'Principal') {
            setInicio(true); 
        } else{
            setInicio(false);
        }
    }, [seccion]);

    console.log(selectedSchool);


    return (
        <div className="flex h-screen">
            {/* Aside: Menú de navegación lateral */}
            <aside className="w-64 bg-red-700 text-white p-5 space-y-4">
                <h1 className="text-xl font-bold">Control Escolar</h1>
                <img src={adminBankito} alt="" />
                <nav className="flex flex-col space-y-2">
                    <a onClick={(e) => setSeccion('Principal')} className="hover:bg-gray-700 p-2 rounded">Inicio</a>
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

                <div className="bg-white rounded shadow-md mx-auto p-4">
                   
                    {inicio && (
                        <>
                            <h1 className='text-center p-5 mb-5 text-2xl font-bold'>Acciones rápidas</h1>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
                                {acciones.map((acciones) => (
                                    <button key={acciones.nombre}
                                        className=' border rounded-md flex flex-col py-6 items-center justify-center text-center transition-all hover:bg-black hover:text-white'>
                                        <acciones.icono className='w-12 h-12 mb-2' />
                                        <span className='text-lg font-medium'>{acciones.nombre}</span>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}

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
