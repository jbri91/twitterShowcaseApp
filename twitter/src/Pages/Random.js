import React from "react";
import TwitterCard from "../components/TwitterCard";

function Random(props) {
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
      <TwitterCard 
      name={props.name}
      userName={props.userName}
      tweet={props.tweet}
      comments={props.comments}
      retweets={props.retweets}
      likes={props.likes}
      image={props.image}
      key={props.key} />
      <TwitterCard />
      <TwitterCard />
      <TwitterCard />
    </div>
  );
}

export default Random;
