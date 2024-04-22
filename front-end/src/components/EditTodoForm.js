import React from 'react'
import { useState } from 'react'

const EditTodoForm = ({editTodo, todo}) => {
    const [title, setTitle] = useState(todo.title)

    const [description, setDescription] = useState(todo.description) // DO I NEED THIS?  YES, I DO.

    const handleSubmit = e => {

      e.preventDefault();
      

      // Ensure that the user hasn't updated to blank
      if(title.trim() === '') {
        editTodo(todo.id, todo.title, description);
      } else {
        editTodo(todo.id, title, description);
      }
      
      
    }
    
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='title-input' 
        value={title}
        placeholder='Update Task'
        onChange={(e) => setTitle(e.target.value)} />

        <button type='submit' className='update-btn'>Update</button>

        <textarea
        id="todo-description-input"
        placeholder="edit description"
        tabindex="2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ></textarea>

    </form>
    

  )
}

export default EditTodoForm
