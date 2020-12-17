import React from "react";

function UserInput() {
  return (
    <div>
      <input
        style={{
          justifyContent: "center",
          paddingTop: "50px",
          textAlign: 'center',
        }}
        type="text"
        placeholder="Search for User or Tweet"
      />
    </div>
  );
}

export default UserInput;
