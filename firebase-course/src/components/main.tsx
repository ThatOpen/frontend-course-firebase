import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FC, useEffect } from "react";
import { useUserContext } from "../user-provider";
import { Auth } from "./auth/auth";
import { User } from "./user/user";

export const Main: FC = () => {
  const auth = getAuth();
  const [user, setUser] = useUserContext();

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({ ...firebaseUser });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="centerContainer">{Boolean(user) ? <User /> : <Auth />}</div>
  );
};
