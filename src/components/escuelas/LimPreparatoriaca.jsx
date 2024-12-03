import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


export const LimPreparatoriaca = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [preescolar, setPreescolar] = useState([]);

  //  Obtener alumnos de la bd
  const getAlumnos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Alumnos');
      setAlumnos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getSchool = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Escuelas');
      setPreescolar(response.data);
    } catch (error) {
      console.error(error);
    };
  };

  // Filtrar alumnos
  const preescolarAlumnos = alumnos.filter((dato) => dato.escuela === 'LIMPREPCA');
  console.log(preescolarAlumnos);

  // Obtener nombre de la escuela mediante la clave de escuela
  const getEscuela = (claveEscuela) => {
    const prees = preescolar.find((dato) => dato.clave === claveEscuela);
    return prees ? prees.nombre : 'No se encontro nombre de escuela';
  };

  useEffect(() => {
    getAlumnos();
    getSchool();
  }, []);


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Listado de alumnos LIM Preparatoria Costa Azul</h1>
      <div className=' overflow-x-auto shadow-md rounded-lg '>
        <table className=' min-w-full bg-white'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Matricula</th>
              <th className='px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider '>Nombre</th>
              <th className='px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider '>Grado</th>
              <th className='px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider '>Grupo</th>
              <th className='px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider '>Escuela</th>
              <th className='px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider '>Ahorro total</th>
              <th className='px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider '>Último ahorro</th>
              <th className='px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider '>Fecha</th>
              <th className='px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider '>Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">


            {preescolarAlumnos.map((dato, id) => (
              <tr key={id}>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dato.matricula}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{dato.nombre} {dato.apellidos}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{dato.grado}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{dato.grupo}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{getEscuela(dato.escuela)}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">empty</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">empty</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">empty</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Abonar
                  </button>
                  <button

                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Retirar
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div >
  )
}
