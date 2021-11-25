import { useRef, useEffect } from 'react';
import './Form.css';

export default function Form({ todo, setTodo, todoList, onAdd }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [todoList]);

  return (
    <div>
      <div className='form'>
        <h1 className='form__title'>To Do List</h1>
        <form>
          <label>
            <input
              class='form__input'
              ref={inputRef}
              type='text'
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              value={todo}
              placeholder='what do you want to do?'
              required
            />
          </label>
          <button className='form__add-btn' onClick={onAdd}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
