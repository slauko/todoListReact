import React from 'react'
import { useState } from 'react'
import Todo from './Todo'

export default function TodoList(props) {
  const [input, setInput] = useState("")
  const addTodo = (e) => {
    if(input.length){
      props.add(e, input); 
      setInput("");
    }
  }
  if (props.active>=0) {
    return (
      <div className='TodoList'>
        <p id='title'>{props.list[props.active].text}:</p>
        <div id='input'>
          <input onKeyDown={(e) => {if(e.key ==="Enter"){addTodo(e)}}} type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
          <button onClick={(e) => {addTodo(e)}}>ADD</button>
        </div>
        {props.list[props.active].todos.map((todo, index) => {
          return <Todo arrayIndex={index} done={todo.done} key={todo.id} id={todo.id} text={todo.text} delete={(e, id)=>props.del(e, id)} update={(e, target, args)=>props.update(e,target,args)}/>
        })}
      </div>
    )  
  }else{
    return(<></>)
  }
}