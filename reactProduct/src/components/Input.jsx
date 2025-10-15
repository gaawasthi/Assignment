import React from 'react'
import "../style/input.css"
const Input = (props) => {
    const {name,value , placeholder , type ,onChange } = props 
  return (
    <div className='input-group' >
      <label placeholder='Input'>{placeholder}</label>
      <input type={type} 
       id={name} 
       name={name}
       placeholder={placeholder} 
       onChange={onChange}
       value={value} />
    </div>
  )
}

export default Input