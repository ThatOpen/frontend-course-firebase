import { useState } from "react";

export const HelloForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");

  const clickHandler = () => {
    alert(`Hello ${nameValue} ${surnameValue}`);
    setNameValue("");
    setSurnameValue("");
  };

  return (
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
      <button onClick={clickHandler}>Submit!</button>
    </form>
  );
};
