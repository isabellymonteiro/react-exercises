import { useState } from "react";
import "./index.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const greet = () => {
    alert(`Hello ${firstName} ${lastName}!`);
  };

  return (
    <form onSubmit={greet} className="form">
      <input
        className="form__input"
        type="text"
        value={firstName}
        onChange={handleFirstNameChange}
        placeholder="First Name"
        required
      ></input>
      <input
        className="form__input"
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
        placeholder="Last Name"
        required
      ></input>
      <button className="form__button" type="submit">greet me</button>
    </form>
  );
};

export default Form;
