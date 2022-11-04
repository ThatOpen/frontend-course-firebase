import { useState } from "react";

export const HelloCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const changeHandler = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <input type="checkbox" onChange={changeHandler} />
      {isChecked ? <div>The checkbox is checked!</div> : null}
    </>
  );
};
