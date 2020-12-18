import React from "react";
import TwitterCard from "../components/TwitterCard";

function Random() {
  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "80px",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  };

  return (
    <div className="random" style={cardStyle}>
      <TwitterCard />
      <TwitterCard />
      <TwitterCard />
      <TwitterCard />
    </div>
  );
}

export default Random;
