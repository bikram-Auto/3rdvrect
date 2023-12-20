'user client'

import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/Layout.jsx';
import HomePage from './component/Home/Page.tsx';
import ConfigurationPage from './component/Configuration/Page.tsx';
import AuthorizationPage from './component/Authorization/Page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage/>
      },
      {
        path: "configuration",
        element: <ConfigurationPage/>
      },
      {
        path: "authorization",
        element: <AuthorizationPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);