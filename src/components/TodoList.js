import Todo from './Todo';
import './TodoList.css';

export default function TodoList({ todoList, onDelete }) {
  return (
    <div className='todo'>
      <ul className='todo-list'>
        {todoList.map((todo) => (
          <Todo key={todo.id} onDelete={onDelete} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
