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

  for (let i = 0; i < props.tweets.length; i++) {
    randomUserCard.push(
      <TwitterCard
        key={props.tweets[i].id}
        name={props.tweets[i].name}
        userName={props.tweets[i].userName}
        tweet={props.tweets[i].tweet}
        comments={props.tweets[i].comments}
        retweets={props.tweets[i].retweets}
        likes={props.tweets[i].likes}
        image={props.tweets[i].image}
      />
    );
  }

  return (
    <div className="random" style={cardStyle}>
      {randomUserCard}
    </div>
  );
}

export default Random;
