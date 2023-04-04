import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About2 from './components/About2'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About2></About2>
            },
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
    {
        path: '/about',
        element: <p>About page</p>
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
