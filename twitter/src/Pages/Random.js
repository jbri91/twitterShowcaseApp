import React from "react";
import TwitterCard from "../components/TwitterCard";

function Random(props) {
  console.log(props);
  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "80px",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  };

  const randomCards = [];
  for (let i = 0; i < props.tweets.length; i++) {
    randomCards.push(
      <TwitterCard
        key={i}
        id={props.tweets[i].id}
        name={props.tweets[i].name}
        userName={props.tweets[i].userName}
        tweet={props.tweets[i].tweet}
        retweet={props.tweets[i].retweet}
        likes={props.tweets[i].likes}
        image={props.tweets[i].image}
        verified={props.tweets[i].verified}
        url={props.tweets[i].url}
      />
    );
  }
  // console.log(randomCards);
  return (
    <div onClick={props.handleClick} className="random" style={cardStyle}>
     {randomCards}
    </div>
  );
}

export default Random;
