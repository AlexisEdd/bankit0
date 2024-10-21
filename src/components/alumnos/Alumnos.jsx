import React, { useEffect, useState } from 'react'
import axios from 'axios';



export const Alumnos = () => {
    const [alumnos, setAlumnos] = useState([])


    // Traer datos de los alumnos

    const getData = async (e) => {
        try {
            const response = await axios.get('http://localhost:3000/Alumnos')
            setAlumnos(response.data);
        } catch (error) {
            console.error(error);
        };
    };

    // Registrar alumnos

    useEffect(() => {
        getData();
    }, []);
    console.log(alumnos);


    return (
        <div className='p-3'>
            <div className='flex flex-col items-center p-4'>
                <h1 className='text-center font-bold text-2xl'>Alumnos</h1>
            </div>

            {/* Muestra tabla de alumnos */}
            <div className=' overflow-x-auto'>
                <table className='min-w-full p-4 bg-white border border-gray-200'>
                    <thead>
                        <tr className=' bg-slate-500 text-white border-b'>
                            <th className='p-3 text-left'>Nombre</th>
                            <th className='p-3 text-left'>Apellidos</th>
                            <th className='p-3 text-left'>Edad</th>
                            <th className='p-3 text-left'>Matricula</th>
                            <th className='p-3 text-left'>Grado</th>
                            <th className='p-3 text-left'>Grupo</th>
                            <th className='p-3 text-left'>Nivel</th>
                        </tr>
                    </thead>
                    <tbody >
                        {alumnos.map((dato, id) => (
                            <tr key={id} className='border-b'>
                                <td className='p-3'>{dato.nombre}</td>
                                <td>{dato.apellidos}</td>
                                <td>{dato.edad}</td>
                                <td>{dato.matricula}</td>
                                <td>{dato.grado}</td>
                                <td>{dato.grupo}</td>
                                <td>{dato.nivel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Creamos un formulario de reistro de Alumnos */}
             <div>
                <form action="">
                    <label htmlFor=""></label>
                    <input type="text" />
                </form>
             </div>
        </div>
    )
}