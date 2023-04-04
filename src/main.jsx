import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import About from './components/About'

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
                element: <About></About>
            },
            {
                path: 'books',
                element: <Books></Books>
            },
        ]
    },
    
])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
