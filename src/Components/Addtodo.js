import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../Redux/Action/TodoAction'

const Addtodo = () => {
    const[newTodo, setnewTodo] = useState({description :""})
    const dispatch = useDispatch()

    const handleAdd = (e) => {
        e.preventDefault();
        if(newTodo.description.length !== 0) dispatch (addTodo(newTodo))
        setnewTodo({description:""})

    }
  return (
    <div>
        <input value={newTodo.description} onChange={(e)=> setnewTodo({description : e.target.value})}></input>
        <button onClick={handleAdd}>Add</button>
        <hr></hr>
    </div>
  )
}

export default Addtodo


