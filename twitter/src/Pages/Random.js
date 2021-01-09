import React from "react";
import TwitterCard from "../components/TwitterCard";

function Random(props) {
  const randomUserCard = [];
  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "80px",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  };
  let r = Math.floor(Math.random() * props.tweets[0].statuses.length)

  return (
    <div className="random" style={cardStyle}>
      {randomUserCard}
      <TwitterCard 
      name={props.tweets[0].statuses[r].user.name}
      userName={props.tweets[0].statuses[r].user.screen_name}
      tweet={props.tweets[0].statuses[r].text}
      retweets={props.tweets[0].statuses[r].retweet_count}
      likes={props.tweets[0].statuses[r].favorite_count}
      />
    </div>
  );
}

export default Random;
