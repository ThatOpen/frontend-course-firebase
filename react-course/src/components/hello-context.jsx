import { createContext } from "react";
import { HelloButton } from "./hello-button";

export const MyContext = createContext();

export const HelloContext = () => {
  return (
    <MyContext.Provider value="Jhon">
      <HelloButton />
    </MyContext.Provider>
  );
};
