import { FC, FormEvent, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const MailLogin: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth();

  const onLogin = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <form onSubmit={onLogin} className="contentFlexVertical">
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
        Login
      </button>
    </form>
  );
};
