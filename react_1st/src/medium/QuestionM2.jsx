import React, { useState } from 'react';

const Child = ({ data }) => {
  return <div>{data}</div>;
};

export const Parent = () => {
  const [data, setData] = useState(0);

  return (
    <div>
      <Child data={data} />
      <button onClick={() => setData(data + 1)}>
        Change
      </button>
    </div>
  );
};

export default Parent;
