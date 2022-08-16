import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())

      .then((data) => {
        const { login } = data;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading)
    return (
      <div>
        <h2>Loading...</h2>;
      </div>
    );
  if (isError)
    return (
      <div>
        <h1>Error...</h1>;
      </div>
    );

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
