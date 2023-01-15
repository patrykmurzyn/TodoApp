import React, { FC } from 'react';
import {useForm} from "@mantine/form";
import {Box, Button, TextInput} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import { TodoFormType } from './todoForm.type';
import { createTodo } from './api';


interface TodoFormProps {}

export const TodoForm: FC<TodoFormProps> = ({}) => {
    const navigate = useNavigate();

    const form = useForm<TodoFormType>({
        initialValues: {
            title: ''
        }
    });

    const handleSubmit = (values: TodoFormType) => {
//        const showNotification = 'ShowNotification';

        createTodo(values).then(() => navigate('/todo') ).catch((error) => {
            console.error(error)

//           createTodo(values).then(() => navigate('/todo', {state: {showNotification}}) ).catch((error) => {
//              console.error(error)
        })
    }

  return (
    <Box sx={{maxWidth: 300}} mx='auto'>
        <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
          <TextInput required label="Title" {...form.getInputProps('title')}/>
          <br />
          <Button variant="outline" color="yellow" size="md" uppercase type="submit">Add</Button>
      </form>
    </Box>
      
  );
};
