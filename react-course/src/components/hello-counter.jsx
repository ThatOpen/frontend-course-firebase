import { useEffect } from "react";
import { useState } from "react";

export const HelloCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const clickListener = () => {
      alert("This is not the button!");
    };
    document.body.addEventListener("click", clickListener);
    return () => {
      document.body.removeEventListener("click", clickListener);
    };
  }, []);

  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  }, [counter]);

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
