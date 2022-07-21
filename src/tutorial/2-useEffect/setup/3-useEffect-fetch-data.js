import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          return <li key={user.id}>hello</li>;
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
