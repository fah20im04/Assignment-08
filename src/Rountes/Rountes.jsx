import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from '../Components/Pages/Home/Home';
import Root from '../Components/Pages/Root/Root';
import Installations from '../Components/Pages/Installations/Installations';
import AppsDetails from '../Components/Pages/AppsDetails/AppsDetails';
import ErrorPage from '../Components/Pages/ErroPage/ErrorPage';
import LoadingSpinner from '../Components/Pages/Loadingspiner/LoadingSpinner';

const Apps = lazy(() => import('../Components/Pages/Apps/Apps'));
const AllApps = lazy(() => import('../Components/Pages/AllApps/AllApps'));

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", Component: Home },
            {
                path: "/apps",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <Apps />
                    </React.Suspense>
                ),
            },
            {
                path: "/allApps",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <AllApps />
                    </React.Suspense>
                ),
            },
            {
                path: '/appsDetails/:id',
                loader: () => fetch('/apps30.json'),
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <AppsDetails />
                    </React.Suspense>
                ),

            },
            {
                path: "/installations",
                loader: () => fetch('/apps30.json'),
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <Installations />
                    </React.Suspense>
                ),
            },
            {
                path: '/loadingSpinner',
                element: <LoadingSpinner />
            },
        ]
    }
]);
