import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };

  return (
    <>
      {getUsers()}
      <h3>Github users</h3>
      <ul className="users"></ul>
    </>
  );
};

export default UseEffectFetchData;
