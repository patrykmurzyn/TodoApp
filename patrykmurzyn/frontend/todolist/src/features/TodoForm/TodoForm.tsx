import React, { FC } from 'react';
import {useForm} from "@mantine/form";
import {Button, TextInput} from "@mantine/core";
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
        createTodo(values).then(() => navigate('/todo') ).catch((error) => {
            console.error(error)
        })
    }

  return (
      <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
          <TextInput required label="Title" {...form.getInputProps('title')}/>
          <Button type="submit">Add</Button>
      </form>
  );
};
