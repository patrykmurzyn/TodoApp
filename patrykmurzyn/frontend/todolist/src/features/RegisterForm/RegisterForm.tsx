import React, {FC} from 'react';
import { useForm } from '@mantine/form';
import { Box, Button, TextInput } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { LoginFormType } from '../LoginForm/LoginForm.type';
import { register } from './api';

interface RegisterFormProps {}

export const RegisterForm: FC<RegisterFormProps> = ({}) => {
    
    const navigate = useNavigate();

    const form = useForm<LoginFormType>({
        initialValues: {
            email: '',
            password: ''
        }
    })

    const handleSubmit = async(values: LoginFormType) => {
        try {
            await register(values);
            navigate('/login');
        } catch(error) {
            console.error(error);
        }
    }

    const handleGoBack = () => {
        navigate('/login');
    }

    return (
        <Box sx={{maxWidth: 300}} mx='auto'> 
            <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
                <TextInput label='Email' {...form.getInputProps('email')}></TextInput>
                <TextInput type='password' label='Password' {...form.getInputProps('password')}></TextInput>
                <Button type='submit'>Register</Button>
                <Button onClick={handleGoBack}>Go back</Button>
            </form>
        </Box>
    )
};