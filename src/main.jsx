import { App } from './App.jsx'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { seedProducts } from './features/products/services/products.service.js'

if (import.meta.env.DEV) {
  window.seedProducts = seedProducts;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)



