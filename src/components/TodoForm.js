import React, { useState } from 'react';
import shortid from 'shortid'
import'./Todostyle.css'
const TodoForm = (props) => {

const [text, setText]= useState('')
const handelSubmit = (e)=>{
  e.preventDefault();

  props.onsubmit({
    id: shortid.generate(),
    text: text,
    complete: false,
  });
  setText("");

}

  return (
     <form onSubmit={handelSubmit}>
          <input className='input-field' value={text} type='text' onChange={(e)=> setText(e.target.value)}/>
          <button onSubmit={handelSubmit} className='btn'>add todo</button>
     </form>
  )
}

export default TodoForm