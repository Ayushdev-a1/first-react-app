import React from 'react'
import { TodoItem } from './TodoItem'

export const Todo = (props) => {
  return (
    <>
      <div className="mylist">
        {props.todo.length === 0 ? "no data to display" : props.todo.map((todo) => {
          return (
            <li className='routune'><TodoItem key={todo.sn} todo={todo} onDelete={props.onDelete} /></li>
          )
        })}


      </div>
    </>
  )
}

export default Todo