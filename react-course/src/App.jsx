import React from "react";
import "./global.css";
import { HelloContext } from "./components/hello-context";
import { HelloCheckbox } from "./components/hello-checkbox";
import { HelloForm } from "./components/hello-form";
export function App() {
  return (
    <HelloContext>
      <HelloCheckbox />
      <HelloForm />
    </HelloContext>
  );
}
