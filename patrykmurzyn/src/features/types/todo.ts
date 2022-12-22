export type TodoPriority = 'low' | 'medium' | 'high';


export interface Todo {
    id: string;
    title: string;
    isDone: boolean;
    priority: TodoPriority;
}