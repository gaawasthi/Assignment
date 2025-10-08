import React from 'react'


const Button =({text , clickHandler  })=>{
    return(
        <div>
            <button
             onClick={clickHandler} > {text}
                </button>
        </div>
    )
}

const QuestionSH3 = () => {
  return (
    <div>
       <Button text={"FirstButton"} clickHandler={
        ()=>console.log("first button clicked")}  />

    </div>
  )
}

export default QuestionSH3