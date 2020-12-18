import React from "react";
import TwitterCard from "../components/TwitterCard";

function Search() {
  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: '80px',
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  };
  return (
    <div className="search">
      <div style={cardStyle}>
        <TwitterCard />
        <TwitterCard />
        <TwitterCard />
        <TwitterCard />
        
      </div>
    </div>
  );
}

export default Search;
