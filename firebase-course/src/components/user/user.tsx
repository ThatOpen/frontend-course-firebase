import { FC } from "react";
import { useUserContext } from "../../user-provider";

export const User: FC = () => {
  const [user] = useUserContext();
  return <>{user?.displayName}</>;
};
