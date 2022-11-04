import { useRandomUsers } from "../utils/hello-hook";

export const HelloList = () => {
  const users = useRandomUsers(3);
  return (
    <ul>
      {Boolean(users.length) &&
        users.map((user, index) => {
          const uniqueKey = `${user.name.first}${user.name.last}${index}`;
          return (
            <li key={uniqueKey}>
              {user.name.first} {user.name.last}
            </li>
          );
        })}
    </ul>
  );
};
