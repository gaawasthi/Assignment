import React, { useRef, useState } from 'react'


const Counter = () => {
const [counter , setCounter] = useState(0)

const intervalRef = useRef(null)
const handleStart =()=>{
       if (!intervalRef.current)
       intervalRef.current=  setInterval(()=>{
           setCounter(prev => prev + 1)
    },1000)    
}

const handleStop = () =>{
 if(intervalRef.current)
    clearInterval(intervalRef.current)
     intervalRef.current = null
}

  return (
    <div> 
        <h3>{counter}</h3>
         <button onClick={handleStart} >
             start
         </button>
         <button onClick={handleStop} >
            stop
         </button>


    </div>
  )
}

export default Counter