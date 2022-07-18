import React from "react";
import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div>
      {people.map((person) => {
        let { name, id } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove Item</button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
