import React, {FC, useState} from 'react';
import { LoginFormType } from './LoginForm.type';
import { useForm } from '@mantine/form';
import { Box, Button, TextInput, Notification } from '@mantine/core';
import { login } from './api';
import { useNavigate } from 'react-router-dom';
import WrongIcon from '../../icons/wrong.svg';
import '../../css/style.css'


interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = ({}) => {
    
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
            await login(values.email, values.password);
            navigate('/todo', {state: values});
        } catch(error) {
            if(error) seterrorDescription(error.toString());
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
                <TextInput required type='email' label='Email:' {...form.getInputProps('email')}></TextInput>
                <TextInput required type='password' label='Password:' {...form.getInputProps('password')}></TextInput>
                <br />
                <Button.Group orientation="vertical">
                    <Button variant="outline" color="yellow" size="md" uppercase type='submit'>Login</Button>
                    <Button className='register-button' variant="outline" color="yellow" size="md" uppercase onClick={handleRegister}>Register</Button>
                </Button.Group>
            </form>
            <br />
            {wrongNotification && (
          <Notification className='notification' icon={<img src={WrongIcon} width="22" height="22" />} color="red" title="Login failed" onClose={handleCloseWrongNotification}>
              {errorDescription}
          </Notification>
        )}
        </Box>
    )
};