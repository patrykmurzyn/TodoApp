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

const handleSortPriority= () => {
  const newArray = [...todos];
  newArray.sort((a, b) => {
    if(newArray[0].priority === 'low' || newArray[0].priority === 'medium') {
      if (a.priority === 'high' && b.priority === 'high') {
        return 0;
      }
      if (a.priority === 'high') {
        return -1;
      }
      if (b.priority === 'high') {
        return 1;
      }
      if (a.priority === 'medium' && b.priority === 'medium') {
        return 0;
      }
      if (a.priority === 'medium') {
        return -1;
      }
      if (b.priority === 'medium') {
        return 1;
      }
    } else {
      if (a.priority === 'high' && b.priority === 'high') {
        return 0;
      }
      if (a.priority === 'high') {
        return 1;
      }
      if (b.priority === 'high') {
        return -1;
      }
      if (a.priority === 'medium' && b.priority === 'medium') {
        return 0;
      }
      if (a.priority === 'medium') {
        return 1;
      }
      if (b.priority === 'medium') {
        return -1;
      }
    }
    
    return 0;
  });
  setTodos(newArray);
}

const handleSortStatus = () => {
  const newArray = [...todos];
  if(newArray[0].isDone === false) {
    newArray.sort((a, b) => a.isDone ? -1 : 1);
  } else {
    newArray.sort((a, b) => a.isDone ? 1 : -1);
  }
  setTodos(newArray);
}

  return (
    <div className="App">
      <TodoList todos={todos} todo={todos[0]} onDelete={handleDelete} onChangeStatus={handleChangeStatus} onSortPriority={handleSortPriority} onSortStatus={handleSortStatus}></TodoList>
      <TodoForm onAdd={handleAdd}/>
    </div>
  );
}

export default App;
