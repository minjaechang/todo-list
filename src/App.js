import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  const addTodo = (todo) => {
    if (todo === '') {
      return;
    }

    const newTodo = {
      id: Date.now(),
      name: todo,
    };

    setTodoList([newTodo, ...todoList]);
  };

  const handleDelete = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);

    setTodoList(updatedTodos);
  };

  return (
    <div className='App'>
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        onAdd={handleAdd}
      />
      <TodoList todoList={todoList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
