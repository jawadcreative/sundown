import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LenisProvider from './lenis/LenisProvider.jsx'
import Loader from './components/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loader/>}>
      <LenisProvider>
        <App />
      </LenisProvider>
    </Suspense>
  </StrictMode>,
)
