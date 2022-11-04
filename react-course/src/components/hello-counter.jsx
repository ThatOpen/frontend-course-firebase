import { useContext } from "react";
import { ApplicationContext } from "../App-context";

export const HelloCounter = () => {
  const [state, dispatch] = useContext(ApplicationContext);
  const { count } = state;

  const handleClick = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={handleClick}>count</button>
    </>
  );
};
