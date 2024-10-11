import React, { useEffect, useState } from 'react'
import bankitoImagen from "../assets/Bankito.jpg";
import limLogo from "../assets/logo.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [credenciales, setCredenciales] = useState([]);
  const navigate = useNavigate();

  // Obtener datos del bakcend 
  const getCredenciales = async () => {
    try {
      const response = await axios.get('http://localhost:3000/login');
      setCredenciales(response.data);
    } catch (error) {
      console.error(error);
    };
  };

  useEffect(() => {
    getCredenciales();
  }, []);
  console.log(credenciales);
  console.log(password);
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario = credenciales.find(
        (credencial) => credencial.user === user && credencial.password === password);

      if (usuario) {
        const response = await axios.post('http://localhost:3000/login', { user, password });
        localStorage.setItem('token', response.data.token);
        navigate('/Admin');
      } else {
        alert('Error al iniciar sesion');
      }
    } catch (error) {
      console.error('Error de token o sesion', error);
      alert('Error en el incio de sesión');
    }
  };

  return (
    <div className='bg-yellow-400 w-auto h-screen'>
      <div>
        <header className='flex items-center flex-col'>
          <img src={bankitoImagen} alt="Bankito" className=' max-w-full h-auto' />
          <h1 className='text-green-900 font-bold mt-4 mb-5 text-2xl'>Bienvenido a Bankito</h1>
        </header>
      </div>
      <div>

        <div>
          <div className=' border bg-green-600 rounded-md border-b-4 border-green-700 max-w-xs m-auto p-10'>
            <div>
              <header>
                <h1 className=' text-center text-white mb-3 ce font-semibold'>INICIA SESIÓN</h1>
                <img className=' w-20 mx-auto mb- ' src={limLogo} alt="" />
              </header>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label className='block mb-2 text-white'>Usuario</label>
                <input name='user' value={user} onChange={(e) => setUser(e.target.value)} className='w-full p-2 mb-6 text-indigo-700 border-b-2 border-green-700 outline-none focus:bg-gray-300' type="text" />

                <label className='block mb-2 text-white '>Contraseña</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-2 text-indigo-700 border-b-2 border-green-700 outline-none' type="password" />
              </div>
              <div>
                <input className='w-full mt-5 rounded-sm bg-yellow-500 hover:bg-pink-900 p-1 font-semibold text-white' type="submit" value='INGRESAR' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
