import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const { type, name, value, placeholder, onChange, className } = props;

  return (
    <div>
      <label className="label-class">{placeholder}</label>
      <input
        type={type}
        name={name}
        value={value } 
        onChange={onChange} 
        placeholder={placeholder}
        ref={ref} 
        className={className } 
      />
    </div>
  );
});

export default Input;
