import React from 'react'
import { useState } from 'react'

export default function Side(props) {
  return (
    <div style={{display: "flex", flexDirection: "row", marginTop: 10}}>
      <div style={{width: 170}}>
        <p style={{margin: 0}} onMouseDown={()=>{props.setActive(props.arrayIndex)}}>{props.text}</p>
      </div>
      <div>
        <button onClick={(e)=>props.delete(e, props.id)}>DEL</button>
      </div>
    </div>
  )
}
