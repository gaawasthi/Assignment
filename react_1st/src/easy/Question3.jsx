import React from 'react'
import { useState } from 'react'

const Question3 = () => { 
const [count , setCount] = useState(0)

const inc = ()=>{
    setCount(count + 1)
}
const dec = ()=>{
    setCount(count  -1)
}

  return (
    <div  > <button onClick={inc}  > + </button> <span>
           

        {count}

        </span>   

       <button onClick={dec} >-</button> 
        </div>
  )
}

export default Question3