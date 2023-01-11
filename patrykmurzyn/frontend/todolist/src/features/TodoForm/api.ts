import { TodoFormType } from "./todoForm.type";

export const createTodo = async (form: TodoFormType) => {
    const response = await fetch ('http://localhost:9000/api/todo', {
        method: 'POST',
        body: JSON.stringify(form),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if(response.status !== 201) throw new Error('Create Todo Failed');
    return await response.json();
}