import React from "react";
import TwitterCard from "../components/TwitterCard";
import TransparentBox from "./TransparentBox";

function Home() {
  const cardStyle = {
    padding: "250px",
    display: "flex",
    paddingTop: "30px",
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
