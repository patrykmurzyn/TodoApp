import React, {useState} from 'react';
import {TodoList} from './features/components/TodoList';
import {Todo} from './features/types/todo';
import {TodoForm} from './features/components/TodoForm';

function App() {
const [todos, setTodos] = useState<Todo[]>([]);

const handleAdd = (todo: Todo) =>  {
  setTodos([...todos, todo]);

}

  return (
    <div className="App">
      <TodoList todos={todos}></TodoList>
      <TodoForm onAdd={handleAdd}/>
    </div>
  );
}

export default App;
