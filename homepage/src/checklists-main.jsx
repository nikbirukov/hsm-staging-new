import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ChecklistsApp from './ChecklistsApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChecklistsApp />
  </StrictMode>,
)
