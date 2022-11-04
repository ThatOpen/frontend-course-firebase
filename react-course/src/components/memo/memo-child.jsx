import React, { useEffect, useContext, useMemo, useState } from "react";
import { CustomContext } from "./hello-memo";

export const MemoChild = React.memo(() => {
  const [fieldValue, setFieldValue] = useState();
  const context = useContext(CustomContext);
  const veryExpensiveValue = useMemo(() => {
    console.log("Performing very expensive calculation!");
  }, [fieldValue]);
  useEffect(() => {
    console.log("MemoChild rendered!");
  });
  return (
    <input
      onChange={(event) => {
        setFieldValue(event.target.value);
      }}
    ></input>
  );
});
