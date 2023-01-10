import React, {FC} from 'react';
import { LoginFormType } from './LoginForm.type';
import { useForm } from '@mantine/form';
import { Box, Button, TextInput } from '@mantine/core';
import { login } from './api';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = ({}) => {
    
    const navigate = useNavigate();

    const form = useForm<LoginFormType>({
        initialValues: {
            email: '',
            password: ''
        }
    })

    const handleSubmit = async(values: LoginFormType) => {
        try {
            await login(values.email, values.password);
            navigate('/todo');
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <Box sx={{maxWidth: 300}} mx='auto'> 
            <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
                <TextInput label='Email' {...form.getInputProps('email')}></TextInput>
                <TextInput type='password' label='Password' {...form.getInputProps('password')}></TextInput>
                <Button type='submit'>Login</Button>
            </form>
        </Box>
    )
};