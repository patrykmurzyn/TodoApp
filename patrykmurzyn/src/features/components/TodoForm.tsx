import React,  { FC, FormEvent, useRef} from 'react';
import {Todo} from '../types/todo';
import {nanoid} from 'nanoid';
import { PrioritySelectElement } from '../types/PrioritySelectElement';


interface TodoFormProps {
    onAdd: (todo: Todo) => void;
}

export const TodoForm: FC<TodoFormProps> = ({onAdd}) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const priorityRef = useRef<PrioritySelectElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const title = titleRef.current?.value ?? '';
        const priority = priorityRef.current?.value ?? 'low';
        onAdd({id: nanoid(), title, isDone: false, priority});
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input name='title' ref={titleRef} type='text' required />
            <select ref={priorityRef}>
                <option value='low'>low</option>
                <option value='medium'>medium</option>
                <option value='high'>high</option>
            </select>
            <button type='submit'>Dodaj</button>
        </form>
    );
};