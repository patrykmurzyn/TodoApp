import React, {FC, useEffect, useState} from 'react';
import {getTodos} from "./api";
import {Todo} from "../../types/todo";
import {List} from "@mantine/core";

interface TodoListProps {}

export const TodoList: FC<TodoListProps> = ({}) => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data);
    })
  }, [])

  return (
      <List>
        {todos.map(t => <List.Item key={t.id}>{t.title}</List.Item>) }
      </List>
  );
};
