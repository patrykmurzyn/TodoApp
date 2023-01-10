import React, {FC} from 'react';
import { LoginFormType } from './LoginForm.type';
import { useForm } from '@mantine/form';
import { Box, Button, TextInput } from '@mantine/core';

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = ({}) => {
    
    const form = useForm<LoginFormType>({
        initialValues: {
            email: '',
            password: ''
        }
    })

    const handleSubmit = (values: LoginFormType) => {
        console.log(values);
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