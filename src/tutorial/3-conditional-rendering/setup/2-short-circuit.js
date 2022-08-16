import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const toggleState = () => {
    isError === true ? setIsError(false) : setIsError(true);
  };

  return (
    <>
      {isError && <h1>Error...</h1>}
      <button className="btn" onClick={toggleState}>
        Toggle error
      </button>
    </>
  );
};

export default ShortCircuit;
