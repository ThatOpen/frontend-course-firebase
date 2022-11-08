import { FC, FormEvent, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useUserContext } from "../../user-provider";

export const MailRegister: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useUserContext();
  const auth = getAuth();

  const onRegister = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    await createUserWithEmailAndPassword(auth, email, password).then(
      (response) => {
        const newUser = response.user;
        updateProfile(newUser, { displayName: name }).then(() => {
          setUser(auth.currentUser);
        });
      }
    );
  };

  return (
    <form onSubmit={onRegister} className="contentFlexVertical">
      <label className="coolLabel">
        Full Name
        <input
          className="coolField"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </label>

      <label className="coolLabel">
        Email address
        <input
          className="coolField"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>

      <label className="coolLabel">
        Password
        <input
          className="coolField"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <button className="coolButton orangeButton" type="submit">
        Register
      </button>
    </form>
  );
};
