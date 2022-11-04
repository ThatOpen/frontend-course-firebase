import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("action not available");
  }
};

export const HelloReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onIncrementClick = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrementClick = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <div>Total count: {state.count}</div>
      <div>
        <button onClick={onIncrementClick}>Increment</button>
        <button onClick={onDecrementClick}>Decrement</button>
      </div>
    </>
  );
};
