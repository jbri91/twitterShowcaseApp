import React from "react";

function UserInput(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        onClick={props.onClick}
        style={{
          justifyContent: "center",
          paddingTop: "20px",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
        type="text"
        placeholder="Search for User or Tweet"
      />
    </form>
  );
}

export default UserInput;
