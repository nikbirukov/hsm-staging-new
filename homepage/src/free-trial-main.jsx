import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FreeTrialApp from './FreeTrialApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FreeTrialApp />
  </StrictMode>,
)
