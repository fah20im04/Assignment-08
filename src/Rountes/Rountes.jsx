import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../Components/Pages/Home/Home';
import Root from '../Components/Pages/Root/Root';
import Apps from '../Components/Pages/Apps/Apps';
import Installations from '../Components/Pages/Installations/Installations';
import AllApps from '../Components/Pages/AllApps/AllApps';
import AppsDetails from '../Components/Pages/AppsDetails/AppsDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: '/apps',

                Component: Apps

            },
            {
                path: '/allApps',
                Component: AllApps
            },
            {
                path: '/appsDetails',
                Component: AppsDetails
            },
            {
                path: "/installations",

                Component: Installations
            }
        ]
    }
]);
