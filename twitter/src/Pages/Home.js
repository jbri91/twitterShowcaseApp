import React from "react";
import TwitterCard from "../components/TwitterCard";

function Home() {
  const cardStyle = {
    display: "flex",
    paddingTop: "200px",
    justifyContent: "center",
  };

  return (
    <div className="home">
      <div style={cardStyle}>
        <TwitterCard />
      </div>
    </div>
  );
}

export default Home;
