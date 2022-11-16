import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { firstName, email };
      setPeople((people) => {
        return [...people, person];
        console.log(people);
      });

      console.log(person);
    } else {
      console.log("empty form");
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input
            value={firstName}
            type="text"
            id="firstName"
            name="firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="Email">Email : </label>
          <input
            value={email}
            type="text"
            id="Email"
            name="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
    </>
  );
};

export default ControlledInputs;
