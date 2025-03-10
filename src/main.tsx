import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Import our design system CSS
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)