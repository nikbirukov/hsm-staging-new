import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PricingApp from './PricingApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PricingApp />
  </StrictMode>,
)
