import React, { useEffect, useState } from 'react'
import axios from 'axios';


export const Alumnos = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [escuelas, setEscuelas] = useState([]);
    const [registro, setRegistro] = useState(false);
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        apellidos: "",
        matricula: "",
        escuela: "",
        seccion: "",
        grado: ""
    });

    // Traer datos de los alumnos
    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/Alumnos')
            setAlumnos(response.data);
        } catch (error) {
            console.error(error);
        };
    };
    // Traer datos de las Escuelas
    const getSchool = async () => {
        try {
            const response = await axios.get('http://localhost:3000/Escuelas')
            setEscuelas(response.data);
        } catch (error) {
            console.error(error);
        };
    };

    const getNameSchool = (claveEscuela) => {
        const escuela = escuelas.find((school) => school.clave === claveEscuela);
        return escuela ? escuela.nombre : 'No se encontró la escuela';
    };
    
    // Registrar datos del alumno
    const handleForm = (e) => {
        const { name, value } = e.target;
        setDatosForm({
            ...datosForm,
            [name]: value
        })
    };

    // enviar datos a bd
    const guardarAlumno = async () => {

        try {
            const idAlumno = {...datosForm, id: datosForm.matricula};

            const response = await axios.post('http://localhost:3000/Alumnos', idAlumno);
            alert('Alumno registrado con exito');
        } catch (error) {
            console.error(error);
            alert('error bro');
        }
    };

    console.log(datosForm);

    // Registrar alumnos

    useEffect(() => {
        getData();
        getSchool();
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
                                <td>{dato.matricula}</td>
                                <td>{getNameSchool(dato.escuela)}</td>
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
                        <form onSubmit={() => guardarAlumno()} className=' my-8 space-y-4' action="">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className='space-y-2'>
                                    <label className='block text-sm font-medium text-gray-700' htmlFor="">Nombre</label>
                                    <input onChange={handleForm} name='nombre' className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300' type="text" />
                                </div>
                                <div className='space-y-2'>
                                    <label className='block text-sm font-medium text-gray-700' htmlFor="">Apellidos</label>
                                    <input onChange={handleForm} name='apellidos' className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300' type="text" />
                                </div>
                                <div className='space-y-2'>
                                    <label className='block text-sm font-medium text-gray-700' htmlFor="">Matricula</label>
                                    <input onChange={handleForm} name='matricula' className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300' type="text" />
                                </div>
                            </div>
                            <div className='space-y-2 space-x-1'>
                                <label htmlFor="">Grado</label>
                                <input name='grado' onChange={handleForm} className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300' type="text" />
                            </div>
                            <div className='space-y-2 space-x-1'>
                                <label htmlFor="">Grupo</label>
                                <input name='grupo' onChange={handleForm} className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300' type="text" />
                            </div>
                            <div className='space-y-2 space-x-1'>
                                <label htmlFor="">Escuela</label>
                                <select onChange={handleForm} name="escuela" className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300' id="">
                                    <option value="">Selecciona una opcion</option>
                                    <option value="LIMPRES">Liceo Costa Azul Preescolar</option>
                                    <option value="LIMPRIMCA">Liceo Costa Azul Primaria</option>
                                    <option value="LIMSECCA">Liceo Costa Azul Secundaria</option>
                                    <option value="LIMPREPCA">Liceo Costa Azul Preparatoria</option>
                                </select>
                            </div>
                            <div className='space-y-2 space-x-1'>
                                <label htmlFor="">Seccion</label>
                                <select name='seccion' onChange={handleForm} className='w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:border-blue-300'>
                                    <option value="">Selecciona una opcion</option>
                                    <option value="Maternal">Maternal</option>
                                    <option value="Preescolar">Preescolar</option>
                                    <option value="Primaria">Primaria</option>
                                    <option value="Secundaria">Secundaria</option>
                                    <option value="Preparatoria">Preparatoria</option>
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