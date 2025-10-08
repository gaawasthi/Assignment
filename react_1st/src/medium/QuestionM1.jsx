import React from 'react';

const UserCard = ({ data }) => {
  return (
    <div>
      {data.map((d, key) => (
        <div key={key}>
          <h3>{d.name}</h3>
          <h2>{d.age}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
