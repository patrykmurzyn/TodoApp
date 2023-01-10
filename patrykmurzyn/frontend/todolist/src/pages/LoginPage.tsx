import React, {FC} from 'react';
import { LoginForm } from '../features/LoginForm/LoginForm';

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = ({}) => {
    return (
        <LoginForm />
    )
};