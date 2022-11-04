import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext();

export const HelloContext = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <MyContext.Provider value={[isChecked, setIsChecked]}>
      {children}
    </MyContext.Provider>
  );
};
