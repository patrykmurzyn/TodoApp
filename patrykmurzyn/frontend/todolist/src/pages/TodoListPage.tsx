import React, {FC} from 'react';
import { TodoList } from '../features/TodoList/TodoList';

interface TodoListPageProps {}

export const TodoListPage: FC<TodoListPageProps> = ({}) => {
    return (
        <TodoList />
    )
};