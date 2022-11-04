import { useRandomUsers } from "../utils/hello-hook";
import "./styles.css";

export const HelloWorld = ({ name }) => {
  const randomUser = useRandomUsers();
  return (
    Boolean(randomUser?.length) && (
      <h1 className="helloWorld">Hello {randomUser[0].name.first}!</h1>
    )
  );
};
