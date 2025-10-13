import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const { type, name, value, placeholder, onChange } = props;

  return (
    <div className='form-group' >
      <label className="form-label">{placeholder}</label>

      <input
        type={type}
        name={name}
        value={value } 
        onChange={onChange} 
        placeholder={placeholder}
        ref={ref} 
        className='input-class'
      />
    </div>
  );
});

export default Input;
