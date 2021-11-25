import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './Todo.css';

export default function Todo({ onDelete, todo }) {
  return (
    <li className='todo-item'>
      <input className='todo__checkbox' type='checkbox' />
      <span className='todo__title'>{todo.name}</span>
      <FontAwesomeIcon
        icon={faTrashAlt}
        className='todo__delete-btn'
        onClick={() => onDelete(todo.id)}
      />
    </li>
  );
}
