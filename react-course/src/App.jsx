import { HelloWorld } from "./components/hello-world";

export function App() {
  const person = { name: "Jhon", surname: "Doe" };
  return <HelloWorld person={person} />;
}
