import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";

import {
  RouterProvider,
 
} from "react-router";
import { router } from './Routes/Routes.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
      <Toaster position="top-right" />
  </StrictMode>,
);
