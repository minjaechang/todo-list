import './Todo.css';

export default function Todo({ onDelete, todo }) {
  return (
    <li className='todo-item'>
      <input type='checkbox' />
      <span className='todo__title'>{todo.name}</span>
      <button className='delete' onClick={() => onDelete(todo.id)}>
        X
      </button>
    </li>
  );
}
