import './App.css';
import Navbar from './components/Navba';
import {Todo} from './components/Todo.js';
import React, { useState , useEffect} from 'react';
import {AddTodo} from './components/AddTodo';

function App() {
  let initodo;
  if ( localStorage.getItem("todo")===null) {
    initodo=[]
  }
  else{
    initodo = JSON.parse(localStorage.getItem("todo"))
  }
  const addTodo = (title , desc)=>{
    const myTodo = {
      title: title ,
      desc : desc,
    }
    setTodos([...todos , myTodo]);
    
  }
  const onDelete = (todo)=>{
  localStorage.setItem("todo" , JSON.stringify(todos));
  setTodos(todos.filter((e)=>{
    return e!==todo; 
  }))
  }
  
  const [todos, setTodos] = useState(initodo);
  useEffect(()=>{
    localStorage.setItem("todo" , JSON.stringify(todos));
  },[todos])
  return (
    <>
  <Navbar title = "Hello"/>
  <div className='container my-5'>
  <AddTodo addTodo = {addTodo}/>
  <Todo todo = {todos} onDelete = {onDelete}/>
</div>
  </>
  )
}

export default App;
