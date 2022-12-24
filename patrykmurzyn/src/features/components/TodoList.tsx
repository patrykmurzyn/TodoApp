import React,  { FC } from 'react';
import {Todo, TodoPriority} from "../types/todo";
import '../../css/todoForm.css';

interface TodoListProps {
    todos: Todo[];
}

interface TodoListItemProps {
    todo: Todo;
}

const priorityToColor: Record<TodoPriority, string> = {
    'low': '#0F0',
    'medium': '#FFA500',
    'high': '#F00'
}

const TodoListItem: FC<TodoListItemProps> = ({todo}) => {
    const isDone = todo.isDone ? '✅' : '❌';
    const color = priorityToColor[todo.priority];

    const handleDelete = (id: string) => {
        
        console.log(id)
    }

    return <tr key={todo.id}>
        <th>
            <p style={{color}}>
                {todo.title}
            </p>
        </th>
        <th>
            <p>
                {todo.description}
            </p>
        </th>
        <th>
            {isDone}
        </th>
        <th onClick={() => handleDelete(todo.id)}>
            🗑
        </th>
    </tr>
}

export const TodoList: FC<TodoListProps> = (props: TodoListProps) => {
    const todos = props.todos;
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((t: Todo) => <TodoListItem key={t.id} todo = {t}></TodoListItem>)}
            </tbody>
        </table>
    );
};