import React,  { FC, FormEvent, useRef} from 'react';
import {Todo} from '../types/todo';
import {nanoid} from 'nanoid';
import { PrioritySelectElement } from '../types/PrioritySelectElement';
import '../../css/todoForm.css';


interface TodoFormProps {
    onAdd: (todo: Todo) => void;
}

export const TodoForm: FC<TodoFormProps> = ({onAdd}) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const priorityRef = useRef<PrioritySelectElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const title = titleRef.current?.value ?? '';
        const priority = priorityRef.current?.value ?? 'low';
        const description = descriptionRef.current?.value ?? '';
        onAdd({id: nanoid(), title, isDone: false, priority, description});

        if (titleRef.current) {
            titleRef.current.value = '';
        }
        if (priorityRef.current) {
            priorityRef.current.value = 'low';
        }
        if (descriptionRef.current) {
            descriptionRef.current.value = '';
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input id='title' name='title' ref={titleRef} type='text' required />
                        </th>
                        <th>
                            <textarea id='comment' name="comment" ref={descriptionRef}></textarea>
                        </th>
                        <th>
                            <select size={3} id='priority' ref={priorityRef}>
                                <option value='low'>low</option>
                                <option value='medium'>medium</option>
                                <option value='high'>high</option>
                            </select>
                        </th>
                        <th>
                            <button id='button' type='submit'>Add</button>
                        </th>
                    </tr>
                </thead>
            </table>
        </form>
    );
};