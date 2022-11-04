export function HelloWorld({ person }) {
  const { name, surname } = person;
  return (
    <h1>
      Hello {name} {surname}!
    </h1>
  );
}
