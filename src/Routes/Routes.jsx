import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails'

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {
          index: true,
           path:"/",
           element:<Home/>
        },
        {
          path:'/Apps',
          element:<Apps/>
        },
        {
          path:'/Installation',
          element:<Installation />
        },
         {
          path:'/AppDetails',
          element:<AppDetails />
        }
        
        
    ]
  },
]);