import React, { useState } from 'react';
export const AddTodo = (props) => {
  const[title , setTitle] = useState("");
  const[desc , setDesc] = useState("");
 
  const sumbit = (e)=>{
     e.preventDefault();
     if (!title || !desc) {
        alert("Title and Desc cann't be empty")
     }
    else{
     props.addTodo(title , desc)
     setTitle("");
     setDesc("")}
  }
  return (
  <>
   <h2 className='my-2 text-center'>Here update your daily routine</h2>
      <form onSubmit={sumbit}>
        <div className="mb-3"><h4>Add title</h4>
        <input type="text" value={title} className="form-control" id='title' onChange={(e)=>setTitle(e.target.value)} /></div>
        <div className="mb-3"><h4>Add descpription</h4>
        <input type="text" value={desc} className="form-control" id='desc'  onChange={(e)=>setDesc(e.target.value)} /></div>
        <p className='text-center'><button className='btn btn-primary'>Update</button></p>
      </form>
  </>
  )
}

export default AddTodo
