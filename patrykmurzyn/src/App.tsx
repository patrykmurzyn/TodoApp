import React, {useState} from 'react';
import {TodoList} from './features/components/TodoList';
import {Todo} from './features/types/todo';
import {TodoForm} from './features/components/TodoForm';

function App() {
const [todos, setTodos] = useState<Todo[]>([]);

const handleAdd = (todo: Todo) =>  {
  setTodos([...todos, todo]);
}

const handleDelete = (index: number) => {
  setTodos(todos.filter((_, i) => i !== index));
}

const handleChangeStatus = (index: number) => {
  const newArray = [...todos];
  newArray[index].isDone = !newArray[index].isDone;
  setTodos(newArray);
}

  return (
    <div className="App">
      <TodoList todos={todos} todo={todos[0]} onDelete={handleDelete} onChangeStatus={handleChangeStatus}></TodoList>
      <TodoForm onAdd={handleAdd}/>
    </div>
  );
}

export default App;
