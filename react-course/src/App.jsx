import React from "react";
import { HelloList } from "./components/hello-list";
import { HelloWorld } from "./components/hello-world";
import "./global.css";

export function App() {
  return (
    <>
      <HelloWorld name="Jhon" />
      <HelloList />
    </>
  );
}
