import React, { FC } from 'react';
import {Navigate, useRoutes} from "react-router-dom";
import {LoginPage} from "./LoginPage";
import {RootPage} from "./RootPage";
import useIsLogged from "../hooks/useIsLogged";
import { TodoListPage } from './TodoListPage';
import { TodoFormPage } from './TodoFormPage';

interface RoutingProps {}

const publicRoutes = [
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '*',
        element: <Navigate to="/login" replace/>
    }
];

const privateRoutes = [
    {
        path: '/',
        element: <RootPage/>,
        children: [
            {
                path: '/todo',
                element: <TodoListPage/>
            },
            {
                path: '/todo/new',
                element: <TodoFormPage/>
            },
            {
                path: '*',
                element: <Navigate to="/todo" replace />,
            },
        ]
    }
]

export const Routing: FC<RoutingProps> = ({}) => {
    const isLogged = useIsLogged();
    const routes = isLogged ? privateRoutes : publicRoutes;
    const routing = useRoutes(routes);

    return routing;
};
