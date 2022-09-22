import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo,toggleTodo, editTodo } from '../Redux/Action/TodoAction'


const Todo = ({todo}) => {

    const [input, setInput] =useState(todo)
    const dispatch =useDispatch()

    const handleToggle = ()=>{
        dispatch(toggleTodo(todo.id))
    }
    const handleEdit = ()=>{
        dispatch (editTodo(input))
    }
    const handleDelete =() => {
       dispatch (deleteTodo(todo.id))
    }
    
  return (
    <div>
        <hr></hr>
        <div>
            <input type="checkbox" onClik={handleToggle}/>
            {todo.description}
        </div>
        <div>
            <input value={input.description} onChange={(e)=> setInput({...input , description : e.target.value})}></input>
            <button onClick={handleEdit}>save</button>
            
        </div>
        <button onClick={handleDelete}>Delete</button>
        <br></br>

    </div>
  )
}

export default Todo