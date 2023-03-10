import { Todo } from "../../types/todo";

export const getTodos = async (title: string): Promise<Todo[]> => {
    const response = await fetch(`http://localhost:9000/api/todo?title=${title}`, {
        method: 'GET',
        credentials: 'include',
    });
    return await response.json();
}

export const deleteTodoById = async(id: number) => {
    const response = await fetch(`http://localhost:9000/api/todo/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    });
}