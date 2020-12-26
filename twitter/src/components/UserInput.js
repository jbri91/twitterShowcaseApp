import React from "react";

function UserInput(props) {
  return (
    <div>
      <input
        onChange={props.onChange}
        style={{
          justifyContent: "center",
          paddingTop: "20px",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
        type="text"
        placeholder="Search for User or Tweet"
      />
    </div>
  );
}

export default UserInput;
