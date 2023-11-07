import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';

import ErrorPage from './components/ErrorPage/ErrorPage';

import Login from './components/login/Login';
import Register from './components/login/Register';
import ServicesDetails from './components/Services/ServiceDetails';
import ServiceDetails from './components/Services/ServiceDetails';
import RequireAuth from './components/login/RequireAuth/RequireAuth';
import WorkDetails from './components/Works/WorkDetails';
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';
import Pages from './components/Pages/Pages';
import Works from './components/Works/Works';
import Profile from './components/Profile/Profile';
import { Blogs } from './components/Blogs/Blogs';
import Services from './components/Services/Services';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: '/about',
        element:<About></About>
      }, 
      {
        path: '/projects',
        element:<Projects></Projects>
      }, 
      {
        path: '/contact',
        element:<Contact></Contact>
      }, 
      {
        path: '/services',
        element:<Works></Works>
      }, 
      {
        path: '/profile',
        element:<Profile></Profile>
      }, 
      {
        path: '/pages',
        element:<Pages></Pages>
      }, 
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      }, 
      {
        path: '/services',
        element:<Works></Works>
      }, 
     
      

      {
        path: '/login', 
        element:<Login></Login>,
        // warning: only load the data you need. do not load all the data
      },
      {
        path: '/register', 
        element:<Register></Register>,
        // warning: only load the data you need. do not load all the data
      },
      
     
      
   

      {
        path: '/service/:id',
        element:<RequireAuth>
          <ServiceDetails></ServiceDetails>
        </RequireAuth>, 
        loader: () => fetch('/service.json') // do not load all data. load only what you need
      },

      {
        path: '/work/:id',
        element:<RequireAuth>
          <WorkDetails></WorkDetails>
        </RequireAuth>, 
        loader: () => fetch('/services.json') // do not load all data. load only what you need
      },
      {
        path: '*',
        element:<Error></Error> // do not load all data. load only what you need
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
