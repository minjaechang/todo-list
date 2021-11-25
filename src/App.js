import { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todo, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();
    addTodo(todo);
    setInput('');
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

  useEffect(() => {
    inputRef.current.focus();
  }, [todoList]);

  return (
    <div className='App'>
      {/* form */}
      <div className='form'>
        <h1>To Do List</h1>
        <form>
          <label>
            <input
              ref={inputRef}
              type='text'
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={todo}
              required
            />
          </label>
          <button onClick={handleAdd}>Add</button>
        </form>
      </div>

      <TodoList todoList={todoList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
