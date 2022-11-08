import { FC } from "react";
import { getApp } from "firebase/app";
export const App: FC = () => {
  return <div>{JSON.stringify(getApp())}</div>;
};
