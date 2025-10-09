import React, { useState } from 'react';

const Student = ({ students, handleChange }) => {
  return (
    <div>
      {students.map((student, index) => {
        console.log(index);
        return <p key={index}>{student}</p>;
      })}
    </div>
  );
};

const Medium01 = () => {
  const [students, setStudents] = useState([
    'kohli',
    'virat',
    'sachin',
    'messi',
    'ronaldo',
  ]);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const addStudent = () => {
    if(name.trim(''))   
    setStudents([...students, name]);
    setName('');
  };

  return (
    <div>
      {/* check how can we do it using form  */}
      <Student students={students} handleChange={handleChange} />
      <input
        onChange={handleChange}
        value={name}
        type="text"
        placeholder="Enter student name"
      />
      <button onClick={addStudent}>Add student in List</button>
    </div>
  );
};

export default Medium01;
