import { TodoPriority } from "./todo";

export interface PrioritySelectElement extends HTMLSelectElement {
    value: TodoPriority;
}