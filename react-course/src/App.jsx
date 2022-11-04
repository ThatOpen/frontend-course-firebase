import React from "react";
import "./global.css";
import { HelloChildren } from "./components/hello-children";

export function App() {
  return (
    <HelloChildren>
      <span>I am a child!</span>
    </HelloChildren>
  );
}
