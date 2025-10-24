import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';

import Home from '../pages/Home/Home';

import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails'
import Appss from '../pages/Appss/Appss';
import ErrorPage from '../pages/Error/ErrorPage';
import AppNotFound from '../pages/Error/AppNotFound';
import MyInstallation from '../pages/Installation/MyInstallation';

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {
          index: true,
           path:"/",
           element:<Home/>,
        },
        {
          path:'/Apps',
          element:<Appss/>
        },
        {
          path:'/Installation/:id',
          element:<Installation />
        },
         {
          path:'/MyInstallation',
          element:<MyInstallation />
        },
         {
          path:'/AppDetails',
          element:<AppDetails />
        },
        {
     path: "/AppNotFound",
    element:<AppNotFound/>,
  }
      
        
    ]
  }
]);