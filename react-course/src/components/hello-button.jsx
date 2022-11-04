import { MyContext } from "./hello-context";
import { useContext } from "react";

export const HelloButton = () => {
  const name = useContext(MyContext);

  const clickHandler = () => {
    alert(`Hello ${name}!`);
  };

  return <button onClick={clickHandler}>Say Hello!</button>;
};
