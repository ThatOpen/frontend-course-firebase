import { useState } from "react";

export const HelloCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={handleClick}>count</button>
    </>
  );
};
