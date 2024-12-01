
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'
import CareersPage from './pages/CareersPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'


const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout />,
      children:[
        {
        index:true,
        element:<HomePage />
        },
        {
          path:'about-page',
          element:<AboutPage />
        },
         {
          path:'contact-page',
          element:<ContactPage />
        }, {
          path:'Project-page',
          element: <ProjectPage />
        }, {
          path:'Careers-page',
          element:<CareersPage />
        } 
      ]
  }
  ])
 
  return  <RouterProvider router={router}/>
}

export default App