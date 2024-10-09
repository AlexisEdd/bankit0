import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Rutas } from './Rutas'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Rutas />
  </StrictMode>,
)
