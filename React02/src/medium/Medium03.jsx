import React, { useEffect } from 'react'

const Medium03 = () => {
 
    useEffect(()=>{

       console.log("component mounted");
       
           return ()=>{
            console.log("component unmounted")
           }
    },[])

  return (
    <div>
    component

    </div>
  )
}

export default Medium03