import React from 'react'
import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("")

    const [description, setDescription] = useState("") // DO I NEED THIS?  YES, I DO.

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(title, description)
        setTitle("")
        setDescription("")
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>

        <input type='text' className='title-input' 
        value={title}
        placeholder='What is the task today?'
        onChange={(e) => setTitle(e.target.value)} />

        <button type='submit' className='todo-btn'  disabled={title.trim() === ''}>Add</button> <br/>
        
        <textarea
          id="todo-description-input"
          placeholder="description"
          tabindex="2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        

    </form>

  )
}

export default TodoForm
