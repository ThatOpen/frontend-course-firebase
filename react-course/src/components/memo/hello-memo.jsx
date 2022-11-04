import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { MemoChild } from "./memo-child";

export const CustomContext = createContext(false);

export const HelloMemo = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log("HelloMemo rendered!");
  });

  const changeHandler = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <CustomContext.Provider value={checked}>
      <input onChange={changeHandler} type="checkbox" />
      <MemoChild />
    </CustomContext.Provider>
  );
};
