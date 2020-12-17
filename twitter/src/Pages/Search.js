import React from "react";
import TwitterCard from "../components/TwitterCard";

function Search() {
  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "30px",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  };
  return (
    <div className="search">
      <input
        style={{ justifyContent: "center", paddingTop: "50px" }}
        type="text"
        placeholder="Search for User or Tweet"
      />
      <div style={cardStyle}>
        <TwitterCard />
        <TwitterCard />
        <TwitterCard />
        <TwitterCard />
        <TwitterCard />
      </div>
    </div>
  );
}

export default Search;
