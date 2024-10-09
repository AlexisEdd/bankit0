import React, { useEffect, useState } from 'react'
import adminBankito from '../assets/bankitoAdmin.png'
import axios from 'axios';

export const Admin = () => {
// const [nombre, setNombre] = useState([]);


// const getUsuarios = async () => {

//     try {
//         const response = await axios.get('http://localhost:3000/Usuarios');
//         setNombre(response.data);
//     } catch (error) {
//         console.error(error);
//     };
// };

// useEffect(() => {
//     getUsuarios();
// }, []);

// console.log(nombre);

    return (
        <div className="flex h-screen">
            {/* Aside: Menú de navegación lateral */}
            <aside className="w-64 bg-rose-400 text-white p-5 space-y-4">
                <h1 className="text-xl font-bold">Panel</h1>
                <img src={adminBankito} alt="" />
                <nav className="flex flex-col space-y-2">
                    <a href="#" className="hover:bg-gray-700 p-2 rounded">Escuelas</a>
                    <a href="#" className="hover:bg-gray-700 p-2 rounded">Movimientos</a>
                    <a href="#" className="hover:bg-gray-700 p-2 rounded">Reportes</a>
                    <a href="#" className="hover:bg-gray-700 p-2 rounded">Usuarios</a>
                    <a href="#" className="hover:bg-red-700 p-2 rounded">Salir</a>
                </nav>
            </aside>

            {/* Contenido Principal */}
            <main className="flex-grow p-10 bg-gray-100">
                <header className="bg-green-800 text-white p-4 rounded-md mb-5">
                    <h1>Bienvenid(a) a Bankito </h1>
                </header>
                {/* Aquí puedes agregar más contenido */}
                <div className="bg-white p-5 rounded shadow-md">
                    <h2 className="text-2xl font-bold">Panel de Control</h2>
                    <p>Aquí puedes agregar tu contenido principal</p>
                </div>
            </main>
        </div>
    )
}
