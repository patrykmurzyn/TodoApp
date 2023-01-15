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
        } catch(error) {
            console.error(error);
        }
        navigate('/login');

    }

    return (
        <Box sx={{maxWidth: 300}} mx='auto'> 
        <form onSubmit={handleSubmit}>
            <h2>Are you sure? </h2>
            <Button variant="outline" color="yellow" size="md" uppercase type='submit'>Yes, Logout</Button>
        </form>
            
        </Box>
    )
};