import React, {FC} from 'react';
import { useForm } from '@mantine/form';
import { Box, Button, TextInput } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { logout } from './api';

interface LogoutProps {}

export const Logout: FC<LogoutProps> = ({}) => {
    
    const navigate = useNavigate();

    const handleSubmit = async() => {
        try {
            await logout();
            navigate('/login');
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <Box sx={{maxWidth: 300}} mx='auto'> 
        <form onSubmit={handleSubmit}>
            <Button type='submit'>Logout</Button>
        </form>
            
        </Box>
    )
};