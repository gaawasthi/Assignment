import React, { useState } from 'react';

const SemiHard = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const generateRandomKey = () => {
    return Math.floor(Math.random() * 9999);
  };

  const addTodo = () => {
    if (input.trim('')) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  function removeTodo(id) {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <input
        value={input}
        onChange={handleChange}
        type="text"
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      {todos.length > 0 ? (
        <div>
          <ul>
            {todos.map((todo, id) => (
              <li key={generateRandomKey()}>
                {todo}
                <button onClick={() => removeTodo(id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1>there is no todo</h1>
      )}
    </>
  );
};

export default SemiHard;
