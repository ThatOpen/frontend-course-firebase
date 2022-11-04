export const HelloButton = ({ name }) => {
  const clickHandler = () => {
    alert(`Hello ${name}!`);
  };

  return <button onClick={clickHandler}>Say Hello!</button>;
};
