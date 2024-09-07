import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Store from './components/Store.jsx'
import './index.css'

const router = createBrowserRouter([{
  path: "/supper-car-k/",
  element: <App/>,
  children: [
    {
      path: "/supper-car-k/",
      element: <Home/>
    },
    {
      path: "/supper-car-k/about",
      element: <About/>
    },
    {
      path: "/supper-car-k/contact",
      element: <Contact/>
    },
    {
      path: "/supper-car-k/store",
      element: <Store />
    }
  ]

}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router} />
  </StrictMode>,
)
