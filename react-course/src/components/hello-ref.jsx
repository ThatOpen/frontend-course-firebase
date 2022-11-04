import { useRef } from "react";

export const HelloRef = () => {
  const inputRef = useRef();
  const customValueRef = useRef("");

  const changeHandler = (event) => {
    customValueRef.current = event.target.value;
  };

  const clickHandler = () => {
    inputRef.current.focus();
    alert(customValueRef.current);
  };

  return (
    <>
      <button onClick={clickHandler}>Focus the field!</button>
      <input onChange={changeHandler} ref={inputRef}></input>
    </>
  );
};
