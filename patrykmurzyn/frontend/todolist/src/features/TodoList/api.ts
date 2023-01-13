import { Todo } from "../../types/todo";

export const getTodos = async (): Promise<Todo[]> => {
    const response = await fetch('http://localhost:9000/api/todo?title', {
        method: 'GET',
        credentials: 'include',
    });
    return await response.json();
}