import React, { useState } from 'react'

const Question5 = () => {
   const [data , setData] = useState('')
  const task = ()=>{
    console.log(data);
    
  }

  return (
    <div>
  <input type={'text'} onChange={(e)=>{
    setData(e.target.value)
  }}  placeholder={'type here....'}   />
  <button onClick={task}  >
    click to log
  </button>

    </div>
  )
}

export default Question5