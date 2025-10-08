import React, { useState } from 'react';

const QuestionM5 = () => {
  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow(prev => !prev); 
  };

  return (
    <div>
      {show ? <p>Hello React</p> :""}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default QuestionM5;
