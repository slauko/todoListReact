import React from 'react'
import { useState } from 'react'
import Side from "./Side"

export default function SideBar(props) {
  const [input, setInput] = useState("")
  const addSideItem = (e) =>{
    if (input.length) {
      props.add(e, input); 
      setInput("");  
    }
  }
  return (
    <div className='SideBar'>
      <p>Your Lists:</p>
      <input onKeyDown={(e) => {if(e.key ==="Enter"){addSideItem(e)}}} type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={(e) => {addSideItem(e)}}>ADD</button>
      {props.list.map((item, index) => {
        return <Side arrayIndex = {index} key={item.id} id={item.id} text={item.text} delete={(e, id)=>props.del(e, id)} setActive = {props.setActive}/>
      })}
    </div>
  )
}
