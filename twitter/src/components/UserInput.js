import React from "react";

function UserInput(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
      onChange={props.handleChange}
        style={{
          display: 'flex',
          marginTop: '-23px',
          justifyContent: "center",
          paddingTop: "10px",
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
