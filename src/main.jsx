import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import Home from './pages/Home'
import Event from './pages/Event'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/events/:id",
    element: <Event />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
