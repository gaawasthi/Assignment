import React, { useState } from 'react'


const ChildCom = ({count , updater})=>{
    return (
        <div>
            <h3> Child Count : {count} </h3>
            <button onClick={updater} > update child count</button>
        </div>
    )

}


const ParentCom = () => {

 const [count , setCount] = useState(0)
 const [childCount ,setChildCount] = useState(0)
 function updater(){
    setCount(prev =>  prev +1 )
 }
 function updateChild(){
    setChildCount(prev => prev+1)
 }
  return (
    <div>
        <h2> Parent count :{count} </h2>
        <button onClick={updater}  >Update parent count</button>
         <ChildCom count= {childCount} updater={updateChild} />
    </div>
  )
}

export default ParentCom