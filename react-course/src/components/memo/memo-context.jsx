import React, { useEffect } from "react";
import { useContext } from "react";
import { CustomContext } from "./hello-memo";

export const MemoContext = React.memo(() => {
  const context = useContext(CustomContext);
  useEffect(() => {
    console.log("MemoContext rendered!");
  });
  return <></>;
});
