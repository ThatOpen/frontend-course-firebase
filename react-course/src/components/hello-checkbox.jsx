import { useContext } from "react";
import { ApplicationContext } from "../App-context";

export const HelloCheckbox = () => {
  const [state, dispatch] = useContext(ApplicationContext);
  const changeHandler = (event) => {
    if (event.target.checked) {
      dispatch({ type: "CHECK" });
    } else {
      dispatch({ type: "UNCHECK" });
    }
  };

  return (
    <>
      <input type="checkbox" onChange={changeHandler} />
      {state.isChecked ? <div>The checkbox is checked!</div> : null}
    </>
  );
};
