import React from 'react'
export const TodoItem = ({todo , onDelete}) => {
 

  return (
    <>
        <div className="conta"> 
        <h4>{todo.title}</h4>
       <p>{todo.desc}</p></div>
        <button className='btn btn-sm btn-danger mx-2' onClick={()=>{onDelete(todo)}}>Delete</button>
      
    </>
  )
}
export default TodoItem
