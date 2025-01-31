import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("");
    };
  });

  return (
    <>
      <h1>Window</h1>
      <h2>{size} pixels</h2>
    </>
  );
};

export default UseEffectCleanup;
