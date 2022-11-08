import { FC } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const GoogleAuth: FC = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const onLoginClick = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <button className="coolButton orangeButton" onClick={onLoginClick}>
      Google Login
    </button>
  );
};
