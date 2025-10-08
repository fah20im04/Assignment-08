import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../Components/Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Home
  }
]);
