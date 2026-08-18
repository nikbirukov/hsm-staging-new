import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BookDemoApp from './BookDemoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookDemoApp />
  </StrictMode>,
)
