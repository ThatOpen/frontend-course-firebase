import { FC } from "react";
import { GoogleAuth } from "./google-auth";
import { MailLogin } from "./mail-login";
import { MailRegister } from "./mail-register";
export const Auth: FC = () => {
  return (
    <div className="contentGrid">
      <div>
        <GoogleAuth />
      </div>
      <div>
        <MailRegister />
      </div>
      <div>
        <MailLogin />
      </div>
    </div>
  );
};
