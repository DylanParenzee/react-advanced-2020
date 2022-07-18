import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "aloha dude!",
  });
  const { name, age, message } = person;

  const changeMessage = () => {
    setPerson({ ...person, message: "hello world" });
  };
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message?
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
