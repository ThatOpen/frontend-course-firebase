import { useContext } from "react";
import { MyContext } from "./hello-context";

export const HelloCheckbox = () => {
  const [isChecked, setIsChecked] = useContext(MyContext);
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
