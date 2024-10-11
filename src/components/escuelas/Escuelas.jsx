import React, { useState } from 'react';
import { Backpack, BookOpen, GraduationCap, School } from 'lucide-react';
import { Alumnos } from '../Alumnos';

export const Escuelas = () => {
  const escuelas = [
    { nombre: 'LIM Preescolar', icono: Backpack },
    { nombre: 'LIM Primaria Costa Azul', icono: BookOpen },
    { nombre: 'LIM Secundaria Costa Azul', icono: School },
    { nombre: 'LIM Preparatoria Costa Azul', icono: GraduationCap },
  ];
  const [seleccion, setSeleccion] = useState('');

  // Si la selecciones Una escuela, debemos abrir el listado de alumnos y sus Alumnos
    


  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-center p-5 mb-5 text-2xl font-bold'>Menú de escuelas</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
        {escuelas.map((escuela) => (
          <button
            
            className=' border rounded-md flex flex-col py-6 items-center justify-center text-center transition-all hover:bg-black hover:text-white'>
            <escuela.icono className='w-12 h-12 mb-2' />
            <span className='text-lg font-medium'>{escuela.nombre}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
