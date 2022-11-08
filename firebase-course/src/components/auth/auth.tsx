import { FC } from "react";
import { GoogleAuth } from "./google-auth";
export const Auth: FC = () => {
  return (
    <div className="contentGrid">
      <div>
        <GoogleAuth />
      </div>
      <div>Mail Register</div>
      <div>Mail Login</div>
    </div>
  );
};
