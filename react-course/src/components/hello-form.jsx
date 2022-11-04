import { useContext } from "react";
import { useState } from "react";
import { ApplicationContext } from "../App-context";

export const HelloForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [state] = useContext(ApplicationContext);

  const clickHandler = () => {
    alert(`Hello ${nameValue} ${surnameValue}`);
    setNameValue("");
    setSurnameValue("");
  };

  return (
    <>
      <form>
        <label>
          Name:{" "}
          <input
            value={nameValue}
            onChange={(event) => {
              setNameValue(event.target.value);
            }}
          />
        </label>
        <label>
          Surname:{" "}
          <input
            value={surnameValue}
            onChange={(event) => {
              setSurnameValue(event.target.value);
            }}
          />
        </label>
        <button disabled={state.isChecked} onClick={clickHandler}>
          Submit!
        </button>
      </form>
    </>
  );
};
