import React, { useState } from 'react'



const Easy01 = () => {
      
      const [show , setShow] = useState('true')

      const fruits = ['Apple', 'Banana', 'Cherry'];

      const handleToggle=()=>{
        setShow(!show)
      }
  return (
    <div> 
        { show ? fruits.map((fruit , index)=>(
            <p key={index} > {fruit} </p>
        )) : null}

        <button onClick={handleToggle} > {show ?"hide" : "show" } </button> 
    </div>
  )
}

export default Easy01