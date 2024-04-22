import React from 'react'
import AddTodoForm from './AddTodoForm'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import {
	getTodos,
	addTodo as add,
	deleteTodo as del,
	toggleComplete as toggle
} from '../utils/clients';



uuidv4();


const TodoWrapper = () => {

	const [todos, setTodos] = useState([])

	async function renderTodos() {
		const res = await getTodos();
		const todos_FE = res.data.map((todo_BE) => ({
			...todo_BE,
			id: todo_BE._id
		}));
		setTodos(todos_FE);
	}

	useEffect(() => {
		renderTodos();
	}, [])


	async function addTodo(todo, description) {

		await add(todo, description) // PUT AWAIT TO RENDER WITH ADDEDTODO IMMEDIATELY
		renderTodos()
		console.log(todos)
	}

	const toggleComplete = async (id) => {
		let title, description, completed;
		todos.forEach(todo => {
			if (todo.id === id) {
				console.log(todo);
				title = todo.title;
				description = todo.description
				completed = todo.completed;
			}
		});
		await toggle(id, title, description, !completed)
		renderTodos()
		console.log(todos)
	}

	// const deleteTodo = async (id) => {

	// 	await fetch(`api/todos/${id}`, {
	// 		method: "DELETE"
	// 	})

	// 	renderTodos()
	// 	console.log(todos)
	// }

	async function deleteTodo(id) {
		await del (id)
		renderTodos()
		console.log(todos)
	}

	async function editTodo(id, title, description) {
		let completed, isEditing;
		todos.forEach(todo => {
			if (todo.id === id) {
				console.log(todo);
				completed = todo.completed;
				isEditing = !todo.isEditing;
			}
		});
		await toggle(id, title, description, completed, isEditing)
		renderTodos();
		console.log(todos);
	}

	return (
		<div className='TodoWrapper'>
			<h1>Get Things Done!</h1>
			<AddTodoForm addTodo={addTodo} />

			{todos.map((todo, index,) => (
				todo.isEditing ? (
					<EditTodoForm editTodo={editTodo} todo={todo} />
				) : (
					<Todo
						todo={todo}
						toggleComplete={toggleComplete}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
					/>
				)
			))}

		</div>
	)
}

export default TodoWrapper

