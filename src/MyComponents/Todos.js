import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos</h3>
      {props.todos.length==0? "No todos to display":
      props.todos.map((todo)=>{
        return <Todo todo={todo} key={todo.sln} onDelete={props.onDelete}></Todo>
      })}
    </div>
  )
}
