import React, {FC, useState} from 'react';
import { useForm } from '@mantine/form';
import { Box, Button, TextInput, Notification } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { LoginFormType } from '../LoginForm/LoginForm.type';
import { register } from './api';
import { login } from '../LoginForm/api';
import WrongIcon from '../../icons/wrong.svg';


interface RegisterFormProps {}

export const RegisterForm: FC<RegisterFormProps> = ({}) => {
    
    const navigate = useNavigate();

    const [wrongNotification, setWrongNotification] = useState(false);
    const [errorDescription, seterrorDescription] = useState('');

    const form = useForm<LoginFormType>({
        initialValues: {
            email: '',
            password: ''
        }
    })

    const handleSubmit = async(values: LoginFormType) => {
        try {
            await register(values);
            await login(values.email, values.password);
            navigate('/todo');
        } catch(error) {
            if(error) seterrorDescription(error.toString());
            setWrongNotification(true);
        }
    }

    const handleGoBack = () => {
        navigate('/login');
    }

    const handleCloseWrongNotification = () => {
        setWrongNotification(false);
      }

    return (
        <Box sx={{maxWidth: 300}} mx='auto'> 
            <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
                <TextInput required type='email' label='Email:' {...form.getInputProps('email')}></TextInput>
                <TextInput required type='password' label='Password:' {...form.getInputProps('password')}></TextInput>
                <br />
                <Button.Group orientation="vertical">
                    <Button variant="outline" color="yellow" size="md" uppercase type='submit'>Register</Button>
                    <Button className='goback-button' variant="outline" color="yellow" size="md" uppercase onClick={handleGoBack}>Go back</Button>
                </Button.Group>
            </form>
            <br />
            {wrongNotification && (
                <Notification className='notification' icon={<img src={WrongIcon} width="22" height="22" />} color="red" title="Registration failed" onClose={handleCloseWrongNotification}>
                    {errorDescription}
                </Notification>
            )}
        </Box>
    )
};