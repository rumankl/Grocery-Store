
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Product from './pages/Product'
import News from './pages/News'
import SignUp from './features/auth/SignUp'
import Login from './features/auth/Login'
import UserRoutes from './components/UserRoutes'
import ListCard from './Home/ListCard'


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        }, {
          path: 'item/:category',
          element: <ListCard />
        }, {
          path: 'about-page',
          element: <AboutPage />
        },
        {
          path: 'contact-page',
          element: <ContactPage />
        }, {
          path: 'product-page',
          element: <Product />
        }, {
          path: 'news',
          element: <News />
        },
        ///this is for when click the button log ins direct came to Home page. so, making  the UserRoutes under or children log and signup
        {
          element: <UserRoutes />,
          children: [
            {
              path: 'signup-page',
              element: <SignUp />
            }, {
              path: 'login-page',
              element: <Login />
            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App