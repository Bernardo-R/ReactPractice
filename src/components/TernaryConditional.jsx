import React, { useState } from "react";

const TernaryConditional = (props) => {
  const { employees } = props;
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h1>Welcome to the App</h1>

      {loggedIn ? (
        <h2>{`Hello ${employees}!`}</h2>
      ) : (
        <div>
          <h2>Please log in to continue</h2>
        </div>
      )}

      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default TernaryConditional;
