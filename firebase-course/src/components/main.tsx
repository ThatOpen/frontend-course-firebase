import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FC } from "react";
import { useUserContext } from "../user-provider";
import { Auth } from "./auth/auth";
import { User } from "./user/user";

export const Main: FC = () => {
  const auth = getAuth();
  const [user, setUser] = useUserContext();
  onAuthStateChanged(auth, (firebaseUser) => {
    if (!user && firebaseUser) {
      setUser({ ...firebaseUser });
    } else if (user && !firebaseUser) {
      setUser(null);
    }
  });
  return (
    <div className="centerContainer">{Boolean(user) ? <User /> : <Auth />}</div>
  );
};
