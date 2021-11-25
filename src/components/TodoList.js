export default function TodoList({ todoList, onDelete }) {
  return (
    <div className='todo'>
      <ul className='todo-list'>
        {todoList.map((todo) => (
          <li key={todo.id} className='todo-item'>
            <input type='checkbox' />
            <span>{todo.name}</span>
            <button className='delete' onClick={() => onDelete(todo.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
