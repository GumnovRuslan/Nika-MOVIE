import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './routes/App.tsx'
import { Movies } from './routes/Movies.tsx';
import { Movie } from './routes/Move.tsx';

import './global.scss'
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import './index.scss'

const root = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(root!)



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/movies",
    element: <Movies/>, 
  },
  {
    path: '/movie',
    element: <Movie/>
  }
]);

reactRoot.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
