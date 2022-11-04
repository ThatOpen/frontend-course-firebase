export const HelloList = () => {
  const names = ["Jhon", "Mary", "Jane"];

  return (
    <ul>
      {names.map((name, index) => {
        const uniqueKey = `${name}${index}`;
        return <li key={uniqueKey}>{name}</li>;
      })}
    </ul>
  );
};
