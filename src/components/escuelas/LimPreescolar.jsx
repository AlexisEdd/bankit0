import React from 'react'
import { Link } from 'react-router-dom'


export const LimPreescolar = () => {



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Listado de alumnos LIM Preescolar</h1>
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
            <tr>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">4</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">4</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">ahorroTotal €</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900"> €</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">rer</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                <button
                  onClick={() => openModal(alumno, 'Ahorro')}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Abonar
                </button>
                <button
                  onClick={() => openModal(alumno, 'Retiro')}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Retirar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div >
  )
}
