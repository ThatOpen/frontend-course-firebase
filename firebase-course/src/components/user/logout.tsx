import { FC } from "react";
import { getAuth, signOut } from "firebase/auth";

export const Logout: FC = () => {
  const auth = getAuth();
  const onLogoutClick = () => {
    signOut(auth);
  };
  return (
    <button className="coolButton redButton" onClick={onLogoutClick}>
      Logout
    </button>
  );
};
