import React, {FC, useEffect, useState} from 'react';
import {deleteTodoById, getTodos} from "./api";
import {Todo} from "../../types/todo";
import {List, TextInput, Notification} from "@mantine/core";
import CheckIcon from '../../icons/check-icon.svg';
import '../../css/style.css'

export interface TodoListProps {
};

export const TodoList: FC<TodoListProps> = ({}) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState('');
  const [deleteNotification, setDeleteNotification] = useState(false);
  const [addNotification, setAddNotification] = useState(false);


  useEffect(() => {
    getTodos(title).then((data) => {
      setTodos(data);
    })
  }, [title])

  const handleDelete = (id: number) => {
    deleteTodoById(id);
    const updatedTodos = todos.filter(t => t.id !== id);
    setTodos(updatedTodos);
    setDeleteNotification(true);
  }

  const handleCloseDeleteNotification = () => {
    setDeleteNotification(false);
  }

  const handleCloseAddNotification = () => {
    setAddNotification(false);
  }

  return (
      <div>
        <TextInput label='Search:' onChange={(e) => setTitle(e.target.value)}></TextInput>
        <List>
          {todos.map(t => 
            <List.Item key={t.id}>
              {t.title}
              <span onClick={() => handleDelete(t.id)}> ❌</span>
            </List.Item>) }
        </List>
        {deleteNotification && (
          <Notification className='notification' icon={<img src={CheckIcon} width="22" height="22" />} color="teal" title="Notification" onClose={handleCloseDeleteNotification}>
              Todo deleted
          </Notification>
        )}
        {addNotification && (
          <Notification className='notification' icon={<img src={CheckIcon} width="22" height="22" />} color="teal" title="Notification" onClose={handleCloseAddNotification}>
              Added Todo
          </Notification>
        )}
      </div>
      
  );
};
