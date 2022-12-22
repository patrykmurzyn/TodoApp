import React,  { FC } from 'react';
import {Todo, TodoPriority} from "../types/todo";

interface TodoListProps {
    todos: Todo[];
}

interface TodoListItemProps {
    todo: Todo;
}

const priorityToColor: Record<TodoPriority, string> = {
    'low': '#FFF',
    'medium': '#FFA500',
    'high': '#F00'
}

const TodoListItem: FC<TodoListItemProps> = ({todo}) => {
    const isDone = todo.isDone ? '✅' : '❌';
    const color = priorityToColor[todo.priority];
    return <li style={{color}} key={todo.id}>{todo.title} {isDone}</li>
}

export const TodoList: FC<TodoListProps> = (props: TodoListProps) => {
    const todos = props.todos;

    return (
        <ul>

            {todos.map((t: Todo) => <TodoListItem key={t.id} todo = {t}></TodoListItem>)}

        </ul>

    );
};