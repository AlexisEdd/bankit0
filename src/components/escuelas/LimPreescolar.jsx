import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


export const LimPreescolar = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [preescolar, setPreescolar] = useState([]);
  const [campoAbono, setCampoAbono] = useState('');
  const [formAbono, setFormAbono] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;

    // Eliminar caracteres no numéricos excepto el punto
    value = value.replace(/[^0-9.]/g, '');

    // Dividir el valor en parte entera y decimal
    const partes = value.split('.');
    let entero = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Formatear parte entera
    const decimales = partes[1]?.slice(0, 2) || ''; // Limitar a dos decimales

    // Reconstruir el valor
    if (partes.length > 1) {
      value = `${entero}.${decimales}`;
    } else {
      value = entero;
    }

    // Actualizar el estado con el nuevo valor
    setCampoAbono(value);
  };


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
  const preescolarAlumnos = alumnos.filter((dato) => dato.escuela === 'LIMPRES');
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
                    onClick={() => setFormAbono(true)}
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

      {formAbono &&
        <div onClick={() => setFormAbono(false)} className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 overflow-y-auto'>
          <div onClick={(e) => e.stopPropagation()} className=' mx-auto max-w-md border mt-5 p-4 rounded-md shadow-md bg-white'>
            <h1 className=' text-center font-bold p-2'>ABONO PARA</h1>
            <h1 className='text-center'>Alexis Eduardo Vazquez Torres</h1>
            <form className='p-2 flex flex-col items-center' action="">
              <div className='flex items-center mb-4'>
                <label className='' htmlFor="">Cantidad:</label>
                <input onChange={handleChange} className='p-1 border outline-none rounded-md ml-1' value={campoAbono} type="text" placeholder='$' />
              </div>
              <div>
                <button onClick={() => setFormAbono(false)} className='mr-2 border-gray-300 border p-2 rounded-md text-gray-500 active:bg-gray-400'>Cancelar</button>
                <button className='border mt-2 p-2 rounded-md bg-green-500 text-white active:bg-green-800'>Aplicar abono</button>
              </div>
            </form>


          </div>

        </div>

      }


    </div >
  )
}
