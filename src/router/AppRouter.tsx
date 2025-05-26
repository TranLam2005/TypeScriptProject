import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "../routes";
import ErrorPage from "../error/ErrorPage";
import MainLayout from "../feature/layout/MainLayout";

export const AppRouter: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            errorElement: <ErrorPage />,
            element: <MainLayout />,
            children: publicRoutes
        }
    ])
    return <RouterProvider router={router} />
}