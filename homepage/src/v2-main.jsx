import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeV2App from './HomeV2App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeV2App />
  </StrictMode>,
)
