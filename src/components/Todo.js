export default function Todo({ onDelete, todo }) {
  return (
    <li className='todo-item'>
      <input type='checkbox' />
      <span>{todo.name}</span>
      <button className='delete' onClick={() => onDelete(todo.id)}>
        delete
      </button>
    </li>
  );
}
