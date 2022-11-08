import { FC } from "react";
import { useUserContext } from "../../user-provider";
import { Logout } from "./logout";

export const User: FC = () => {
  const [user] = useUserContext();
  return (
    <div className="contentFlexVertical">
      <span>{user?.displayName}</span>
      <Logout />
    </div>
  );
};
