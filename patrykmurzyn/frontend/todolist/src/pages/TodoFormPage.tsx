import React, {FC} from 'react';
import { TodoForm } from '../features/TodoForm/TodoForm';

interface TodoFormPageProps {}

export const TodoFormPage: FC<TodoFormPageProps> = ({}) => {
    return (
        <div>
            <TodoForm />
        </div>
    )
};