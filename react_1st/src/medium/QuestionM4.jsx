import React, { useState } from 'react'
import { useEffect } from 'react'

const QuestionM4 = () => {

    const [number , setNumber] = useState(0)

    const handleClick = () =>{
        setNumber(number + 1)
    }
    useEffect(()=>{
              console.log("number change");
              
    },[number])
  return (
    <div>
             <h2>{number}</h2>
             <button onClick={handleClick} >Change the state</button>

    </div>
  )
}

export default QuestionM4