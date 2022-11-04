import { useReducer } from "react";
import { createContext } from "react";

const initialState = { count: 0, isChecked: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "CHECK":
      return { ...state, isChecked: true };
    case "UNCHECK":
      return { ...state, isChecked: false };
    default:
      throw new Error("action not available");
  }
};

export const ApplicationContext = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ApplicationContext.Provider value={[state, dispatch]}>
      {children}
    </ApplicationContext.Provider>
  );
};
