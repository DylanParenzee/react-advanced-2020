import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "aloha dude!",
  });
  const { name, age, message } = person;

  const changeMessage = () => {
    if (person.message === "aloha dude!") {
      setPerson({ ...person, message: "hello world" });
    } else setPerson({ ...person, message: "aloha dude!" });
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
