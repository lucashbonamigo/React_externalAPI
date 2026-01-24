import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './components/routes/AppRoutes.tsx'
import NavBar from './components/nav/NavBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <AppRoutes />
  </StrictMode>,
)
