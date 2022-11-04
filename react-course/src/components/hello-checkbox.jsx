export const HelloCheckbox = () => {
  const changeHandler = (event) => {
    alert(`The value of the checkbox is ${event.target.checked}`);
  };

  const styles = {
    accentColor: "red",
    height: 50,
    width: 50,
  };

  return <input type="checkbox" style={styles} onChange={changeHandler} />;
};
