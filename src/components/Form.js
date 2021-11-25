import { useRef, useEffect } from 'react';

export default function Form({ todo, setTodo, todoList, onAdd }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [todoList]);

  return (
    <div>
      <div className='form'>
        <h1>To Do List</h1>
        <form>
          <label>
            <input
              ref={inputRef}
              type='text'
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              value={todo}
              required
            />
          </label>
          <button onClick={onAdd}>Add</button>
        </form>
      </div>
    </div>
  );
}
