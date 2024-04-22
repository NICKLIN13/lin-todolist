import axios from "axios";


const instance = axios.create({
	baseURL: "http://localhost:5001/api"
});



// EXPORT THESE FUNCTIONS TO ALLOW FRONTEND TO USE
export function getTodos() {
	return instance.get("/todos");
}

export function addTodo(title, description) {
	return instance.post("/todos", {title, description});
}

export function deleteTodo(id) {
	return instance.delete(`/todos/${id}`, {id})
}

export function toggleComplete(id, title, description, completed, isEditing ) {
	return instance.put(`/todos/${id}`, { title, description, completed, isEditing })
}