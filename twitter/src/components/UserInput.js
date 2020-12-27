import React from "react";

function UserInput(props) {
  console.log(props)
  return (
    <form onSubmit={props.handleSubmit}>
      <input
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
