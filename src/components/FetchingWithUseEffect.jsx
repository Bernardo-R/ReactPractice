import React, { useEffect, useState } from "react";

const FetchingWithUseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FetchingWithUseEffect;
