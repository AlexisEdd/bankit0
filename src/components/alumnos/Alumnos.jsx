import React, { useEffect, useState } from 'react'
import axios from 'axios';


export const Alumnos = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [registro, setRegistro] = useState(false);
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        apellidos: "",
        edad: "",
        matricula: "",
        escuela: "",
        nivel: "",
        grado: ""
    });

    // Traer datos de los alumnos
    const getData = async (e) => {
        try {
            const response = await axios.get('http://localhost:3000/Alumnos')
            setAlumnos(response.data);
        } catch (error) {
            console.error(error);
        };
    };

    // Registrar datos del alumno
    const handleForm = () => {
        const {name, value} = e.target;
        setDatosForm({
            ...datosForm,
            [name]: value
        })
    }
    
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
                <div className='flex space-x-10 end'>
                    <button onClick={() => setRegistro(true)} className='bg-gray-400 text-white p-1 mb-2 rounded font-thin active:bg-slate-800'>+ Crear Alumno</button>
                    <div>Filro de alumnos</div>
                </div>

                <table className='min-w-full p-4 bg-white border border-gray-200'>
                    <thead>
                        <tr className=' bg-slate-500 text-white border-b'>
                            <th className='p-3 text-left'>Nombre</th>
                            <th className='p-3 text-left'>Apellidos</th>
                            <th className='p-3 text-left'>Edad</th>
                            <th className='p-3 text-left'>Matricula</th>
                            <th className='p-3 text-left'>Escuela</th>
                            <th className='p-3 text-left'>Nivel</th>
                            <th className='p-3 text-left'>Grado</th>
                            <th className='p-3 text-left'>Grupo</th>
                        </tr>
                    </thead>
                    <tbody >
                        {alumnos.map((dato, id) => (
                            <tr key={id} className='border-b'>
                                <td className='p-3'>{dato.nombre}</td>
                                <td>{dato.apellidos}</td>
                                <td>{dato.edad}</td>
                                <td>{dato.matricula}</td>
                                <td>{dato.escuela}</td>
                                <td>{dato.seccion}</td>
                                <td>{dato.grado}</td>
                                <td>{dato.grupo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Creamos un formulario de reistro de Alumnos */}
            {registro &&
                <div onClick={() => setRegistro(false)} className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 overflow-y-auto'>
                    <div onClick={(e) => e.stopPropagation()} className='w-full max-w-md mx-auto border mt-5 p-4 rounded-md shadow-md bg-white'>
                        <h1 className=' font-bold text-2xl'>Registrar Alumno</h1>
                        <form className=' my-8 space-y-4' action="">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className='space-y-2'>
                                    <label className='block text-sm font-medium text-gray-700' htmlFor="">Nombre</label>
                                    <input className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300' type="text" />
                                </div>
                                <div className='space-y-2'>
                                    <label className='block text-sm font-medium text-gray-700' htmlFor="">Apellidos</label>
                                    <input className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300' type="text" />
                                </div>
                            </div>
                            <div className='space-y-2 space-x-1'>
                                <label htmlFor="">Grado</label>
                                <input name='grado' onChange={handleForm} className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300' type="text"/>
                            </div>
                            <div className='space-y-2 space-x-1'>
                                <label htmlFor="">Grupo</label>
                                <input name='grupo' onChange={handleForm} className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300' type="text" />
                            </div>
                            <div className='space-y-2 space-x-1'>
                                <label htmlFor="">Escuela</label>
                                <select name="escuela" className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300' name="" id="">
                                    <option value="">Selecciona una opcion</option>
                                    <option value="LIMPRES">Liceo Costa Azul Preescolar</option>
                                    <option value="LIMPRIMCA">Liceo Costa Azul Primaria</option>
                                    <option value="LIMSECCA">Liceo Costa Azul Secundaria</option>
                                    <option value="LIMPREPCA">Liceo Costa Azul Preparatoria</option>
                                </select>
                            </div>
                            <div className='space-y-2 space-x-1'>
                                <label htmlFor="">Seccion</label>
                                <select className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300' name="" id="">
                                    <option value="">Selecciona una opcion</option>
                                    <option value="maternal">Maternal</option>
                                    <option value="preescolar">Preescolar</option>
                                    <option value="primaria">Primaria</option>
                                    <option value="secundaria">Secundaria</option>
                                    <option value="preparatoria">Preparatoria</option>
                                    <option value="LIMPRES">Maternal</option>
                                </select>
                            </div>
                            <div className='flex mx-auto justify-center space-x-4'>
                                <div className="text-center">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">Registrar</button>
                                </div>
                                <div className="text-center">
                                    <button onClick={() => setRegistro(false)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200">Cancelar</button>
                                </div>
                            </div>
                        </form>
                    </div >
                </div>}

        </div >
    )
}