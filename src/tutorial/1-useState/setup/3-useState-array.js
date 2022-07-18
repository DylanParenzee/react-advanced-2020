import React from "react";
import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(["this", "is", "crazy"]);
  return (
    <div>
      <h1>Use State Array</h1>
    </div>
  );
};

export default UseStateArray;
