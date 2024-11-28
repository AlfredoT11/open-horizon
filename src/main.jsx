import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Componentes from './pages/M5-IntroFrontend/Componentes.mdx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Componentes />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
