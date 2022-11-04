import React from "react";
import { HelloCheckbox } from "./components/hello-checkbox";
import { HelloWorld } from "./components/hello-world";

export function App() {
  return (
    <>
      <HelloWorld name="Jhon" />
      <HelloCheckbox />
    </>
  );
}
