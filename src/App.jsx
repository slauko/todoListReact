import React from 'react'
import { useState, useEffect} from 'react'
import SideBar from './SideBar'
import TodoList from './TodoList'
import {v4 as uuidv4} from "uuid"
import "./App.css"

export default function App() {
  const [active, setActive] = useState(-1);

  const todosStored = JSON.parse(localStorage.getItem("todoLists"));
  const [todoLists, setTodoLists] = useState(todosStored ? todosStored : []);
  useEffect(() => {
    const safe = JSON.stringify(todoLists)
    localStorage.setItem("todoLists", safe);
  }, [todoLists])
  
  const delSide = (e, arg) =>{
    const updated = todoLists.filter((side) => {
      return side.id !== arg;
    });
    if (todoLists[active] && todoLists[active].id === arg) {
      setActive(-1);
    }
    setTodoLists(updated)
  }
  const addSide = (e, arg) =>{
    setTodoLists([...todoLists, {text: arg, todos: [], id: uuidv4()}])
  }
  const delTodo = (e, arg) =>{
    const current = todoLists[active].todos
    const updated = current.filter((todo) => {
      return todo.id !== arg;
    });
    const newList = [...todoLists];
    newList[active].todos = updated;

    setTodoLists(newList);
  }
  const addTodo = (e, arg) =>{
    const current = todoLists[active].todos;
    const updated = [...current, {done: false, text: arg, id: uuidv4()}];
    
    const newList = [...todoLists];
    newList[active].todos = updated;

    setTodoLists(newList);
  }
  const updateTodo = (e, targetIndex, args) =>{
    const current = todoLists[active].todos;
    const updated = [...current];
    if(args.text !== undefined){
      updated[targetIndex] = {...updated[targetIndex], text: args.text};
    }
    if(args.done !== undefined){
      updated[targetIndex] = {...updated[targetIndex], done: args.done};
    }

    const newList = [...todoLists];
    newList[active].todos = updated;

    setTodoLists(newList);
  }
  return (
    <div className='App'>
      <SideBar list={todoLists} add={addSide} del={delSide} setActive={setActive}/>
      <TodoList list={todoLists} active={active} add={addTodo} del={delTodo} update={updateTodo}/>      
    </div>
  )
}
