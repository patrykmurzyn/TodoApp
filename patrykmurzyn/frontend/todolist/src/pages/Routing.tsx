import React, {FC} from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { LoginPage } from './LoginPage';

interface RoutingProps {}

const publicRouting = [
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '*',
        element: <Navigate to='/login' replace/>
    }
]

export const Routing: FC<RoutingProps> = ({}) => {
    return useRoutes(publicRouting)
};