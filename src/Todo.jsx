import React from 'react'
import { useState } from 'react'

export default function Todo(props) {
  const [text, setText] = useState(props.text);
  const [done, setDone] = useState(props.done);

  const handleDone = (e) =>{
    setDone(e.target.checked);
    props.update(e, props.arrayIndex, {done: e.target.checked});
  }

  const changeEditable = (e, state) =>{
    e.target.contentEditable = state;
    setText(e.target.textContent); 
    props.update(e, props.arrayIndex, {text: e.target.textContent});
  }

  return (
    <div className='Todo'>
      <input type="checkbox" id={props.id} checked={done} onChange={handleDone}/>
      <div style={{width: 150}}>
        <p style={{margin: 0, wordBreak: "break-all"}} onMouseDown={(e) => {changeEditable(e, true)}} onBlur={(e) => {changeEditable(e, false)}} onKeyDown={(e) => {if(e.key ==="Enter"){changeEditable(e, false)}}}>{text}</p>
      </div>
      <div>
        <button onClick={(e)=>props.delete(e, props.id)}>DEL</button>
      </div>
    </div>
  )
}
