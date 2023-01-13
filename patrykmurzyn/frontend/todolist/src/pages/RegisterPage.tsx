import React, {FC} from 'react';
import { LoginForm } from '../features/LoginForm/LoginForm';
import { RegisterForm } from '../features/RegisterForm/RegisterForm';

interface RegisterPageProps {}

export const RegisterPage: FC<RegisterPageProps> = ({}) => {
    return (
        <RegisterForm />
    )
};