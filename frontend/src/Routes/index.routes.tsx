import { Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { EmploeePage } from "../pages/EmploeePage/EmploeePage";
import { MetricPage } from "../pages/MetricPage/MetricPage";
import { ChartPage } from "../pages/ChartPage/ChartPage";
import { AuthPage } from "../pages/AuthPage/AuthPage";
import { PasswordPage } from "../pages/PasswordPage/PasswordPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

export interface IRouter {
    path: string;
    element: JSX.Element;
}
export const getHrRoutes = (): IRouter[] => [
    { path: '/home', element: <HomePage /> },
    { path: '/statistic', element: <EmploeePage /> },
    { path: '/metric', element: <MetricPage /> },
    { path: '/charts', element: <ChartPage /> },
    { path: '*', element: <Navigate to={'/home'}/> },
];

export const getEmploeeRoutes = (): IRouter[] => [
    { path: '/home', element: <HomePage /> },
    { path: '/statistic', element: <EmploeePage /> },
    { path: '*', element: <Navigate to={'/home'}/> },
];

export const getNotLoginEmploee = (): IRouter[] => [
    { path: '/auth', element: <AuthPage /> },
    { path: '/verify/:linkId', element: <PasswordPage /> },
    {path: '*', element: <NotFoundPage/>},
];