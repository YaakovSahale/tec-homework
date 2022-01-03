import React from "react";

const Authenticated = ({ email }) => {
  return (
    <div>
      <h1>Authenticated PAGE</h1>
      <p>{email}</p>
    </div>
  );
};

export default Authenticated;
