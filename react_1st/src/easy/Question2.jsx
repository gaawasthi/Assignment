import React from 'react'


const Welcome = ({name })=>{
  return (
    <div>
        <h2>hello, {name}</h2>
    </div>
  )
}


const Question2 = () => {
  return (
    <div>
        <Welcome name = "raj"  />
        <Welcome name = "raj1"  />
        <Welcome name = "raj2"  />
    </div>
  )
}

export default Question2