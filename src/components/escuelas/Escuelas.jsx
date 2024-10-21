import React, { useState } from 'react';
import { Backpack, BookOpen, GraduationCap, School } from 'lucide-react';
import { LimPreescolar } from './LimPreescolar';
import { LimPrimariaca } from './LimPrimariaca';
import { LimSecundariaca } from './LimSecundariaca';
import { LimPreparatoriaca } from './LimPreparatoriaca';

export const Escuelas = () => {
  const escuelas = [
    { clave: 'LIMPRES', nombre: 'LIM Preescolar', icono: Backpack },
    { clave: 'LIMPRIMCA', nombre: 'LIM Primaria Costa Azul', icono: BookOpen },
    { clave: 'LIMSECCA', nombre: 'LIM Secundaria Costa Azul', icono: School },
    { clave: 'LIMPREPCA', nombre: 'LIM Preparatoria Costa Azul', icono: GraduationCap },
  ];
  const [seleccion, setSeleccion] = useState('');
  const [mostrarEscuela, setMostrarEscuela] = useState(true)

  // Si la selecciones Una escuela, debemos abrir el listado de alumnos y sus Alumnos
  const handleSeleccion = (clave) => {
    setSeleccion(clave);
    setMostrarEscuela(false);
  }
  console.log(seleccion)


  return (
    <div className='container mx-auto p-4'>
      {mostrarEscuela && (
        <>
        <h1 className='text-center p-5 mb-5 text-2xl font-bold'>Menú de escuelas</h1><div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
          {escuelas.map((escuela) => (
            <button key={escuela.nombre}
              onClick={() => handleSeleccion(escuela.clave)}
              className=' border rounded-md flex flex-col py-6 items-center justify-center text-center transition-all hover:bg-black hover:text-white'>
              <escuela.icono className='w-12 h-12 mb-2' />
              <span className='text-lg font-medium'>{escuela.nombre}</span>
            </button>
          ))}
        </div>
        </>
    )}
      <div>
        {seleccion === 'LIMPRES' && <LimPreescolar />}
        {seleccion === 'LIMPRIMCA' && <LimPrimariaca />}
        {seleccion === 'LIMSECCA' && <LimSecundariaca />}
        {seleccion === 'LIMPREPCA' && <LimPreparatoriaca />}
      </div>

    </div>
  )
}
