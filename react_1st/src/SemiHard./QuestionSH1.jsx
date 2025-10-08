import React, { useEffect, useRef, useState } from 'react';

const QuestionSH1 = () => {
  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterverl] = useState(true);

  const id = useRef(null);

  useEffect(() => {
    if (timeInterval) {
      id.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(id.current);
    };
  }, []);

  const startTimer = () => {
    id.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setTimeInterverl(false);
    clearInterval(id.current);
  };

  const resetTimer = () => {
    clearInterval(id.current);
    setTimer(0);
  };

  return (
    <div>
      <h1> {timer} </h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}> Stop </button>
      <button onClick={resetTimer}> Reset </button>{' '}
    </div>
  );
};

export default QuestionSH1;
