import React, { useState, useRef } from 'react';

const CounterWithFocus = () => {
  const [count, setCount] = useState(0);  
  const inputRef = useRef(null);           

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleFocus = () => {
    inputRef.current.focus();              
  };

  return (
    <div >
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    
      <input ref={inputRef} type="text" placeholder="Click  to focus" />
      
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default CounterWithFocus;
