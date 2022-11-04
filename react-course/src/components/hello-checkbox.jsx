export const HelloCheckbox = () => {
  const changeHandler = (event) => {
    alert(`The value of the checkbox is ${event.target.checked}`);
  };

  return <input type="checkbox" onChange={changeHandler} />;
};
