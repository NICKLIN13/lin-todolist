import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>

		<details id="" class="todo-item">
			<summary >
				<p onClick={(e) => {e.preventDefault(); toggleComplete(todo.id)}} className={`${todo.completed ? "completed": ""}`}>{todo.title}</p>

				<div>
					<FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(todo.id, todo.title, todo.description)}/>
					<FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
				</div>

			</summary>

			<p class="todo-description">{todo.description}</p>
		</details>
		
    </div>
  )
}

export default Todo
