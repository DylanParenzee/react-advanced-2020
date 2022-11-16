import React, { useState } from "react";

const useStateBasics = () => {
  const [text, setText] = useState("Hello");

  const handleClick = () => {
    if (text === "Hello") {
      setText("Good-Bye");
    } else {
      setText("Hello");
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button onClick={handleClick} className="btn">
        Change Text
      </button>
    </>
  );
};

export default useStateBasics;
