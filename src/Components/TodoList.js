import React from 'react'
import Todo from './Todo'

const TodoList = (todos) => {
  return (
    <div>
        {todos.map((elm,d)=><Todo todo={ elm } key={d}></Todo>)}
    </div>
  )
}

export default TodoList