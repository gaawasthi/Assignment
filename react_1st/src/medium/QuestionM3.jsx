import React, { useState } from 'react';

const ChildComponent = ({ updateParent }) => {
  function changeParentState() {
    updateParent('state change');
  }

  return <button onClick={changeParentState}>Update state</button>;
};

const ParentComponent = () => {
  const [message, setMessage] = useState('');

  return (
    <div>
      <h3>State: {message}</h3>
      <ChildComponent updateParent={setMessage} />
    </div>
  );
};

export default ParentComponent;
