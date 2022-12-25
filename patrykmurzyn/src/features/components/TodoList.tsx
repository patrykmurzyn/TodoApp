import React,  { FC } from 'react';
import {Todo, TodoPriority} from "../types/todo";
import '../../css/todoForm.css';

interface TodoListProps {
    todos: Todo[];
    todo: Todo;
    onDelete: (index: number) => void;
    onChangeStatus: (index: number) => void;
    onSortPriority: () => void;
    onSortStatus: () => void;
}

const priorityToColor: Record<TodoPriority, string> = {
    'low': '#0F0',
    'medium': '#FFA500',
    'high': '#F00'
}

const TodoListItem: FC<TodoListProps> = ({todo, todos, onDelete, onChangeStatus}) => {
    const isDone = todo.isDone ? '✅' : '❌';
    const color = priorityToColor[todo.priority];

    const handleDelete = () => {
        onDelete(todos.findIndex(t => t.id === todo.id));
    }

    const handleChangeStatus = () => {
        onChangeStatus(todos.findIndex(t => t.id === todo.id));
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
        <th onClick={() => handleChangeStatus()}>
            {isDone}
        </th>
        <th onClick={() => handleDelete()}>
            🗑
        </th>
    </tr>
}

export const TodoList: FC<TodoListProps> = ({todos, onDelete, onChangeStatus, onSortPriority, onSortStatus}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th id='titleHeader'onClick={() => onSortPriority()}>Title</th>
                    <th>Description</th>
                    <th id='statusHeader'onClick={() => onSortStatus()}>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((t: Todo) => <TodoListItem key={t.id} todo = {t} todos={todos} onDelete={onDelete} onChangeStatus={onChangeStatus} onSortPriority={onSortPriority} onSortStatus={onSortStatus}></TodoListItem>)}
            </tbody>
        </table>
    );
};