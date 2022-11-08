import { FC } from "react";
import { Main } from "./components/main";
import "./App.css";
import { UserProvider } from "./user-provider";
export const App: FC = () => {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
};
