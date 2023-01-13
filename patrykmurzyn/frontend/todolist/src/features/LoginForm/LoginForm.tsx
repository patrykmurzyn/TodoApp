import React, {FC, useState} from 'react';
import { LoginFormType } from './LoginForm.type';
import { useForm } from '@mantine/form';
import { Box, Button, TextInput, Notification } from '@mantine/core';
import { login } from './api';
import { useNavigate } from 'react-router-dom';
import WrongIcon from '../../icons/wrong.svg';


interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = ({}) => {
    
    const navigate = useNavigate();
    const [wrongNotification, setWrongNotification] = useState(false);


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
            setWrongNotification(true);
        }
    }

    const handleRegister = () => {
        navigate('/register');
    }

    const handleCloseWrongNotification = () => {
        setWrongNotification(false);
      }

    return (
        <Box sx={{maxWidth: 300}} mx='auto'> 
            <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
                <TextInput label='Email' {...form.getInputProps('email')}></TextInput>
                <TextInput type='password' label='Password' {...form.getInputProps('password')}></TextInput>
                <Button type='submit'>Login</Button>
                <Button onClick={handleRegister}>Register</Button>
            </form>
            {wrongNotification && (
          <Notification className='notification' icon={<img src={WrongIcon} width="22" height="22" />} color="red" title="Notification" onClose={handleCloseWrongNotification}>
              Login failed
          </Notification>
        )}
        </Box>
    )
};