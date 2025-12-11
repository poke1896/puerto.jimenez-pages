import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Tourism from './pages/Tourism.tsx'
import Services from './pages/Services.tsx'
import Culture from './pages/Culture.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'turismo',
        element: <Tourism />,
      },
      {
        path: 'servicios',
        element: <Services />,
      },
      {
        path: 'cultura',
        element: <Culture />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
