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
        name={props.tweets[i].statuses[props.random].user.name}
        userName={props.tweets[i].statuses[props.random].user.screen_name}
        tweet={props.tweets[i].statuses[props.random].text}
        retweets={props.tweets[i].statuses[props.random].retweet_count}
        likes={props.tweets[i].statuses[props.random].favorite_count}
        image={
          props.tweets[i].statuses[props.random].user.profile_image_url_https
        }
        verified={props.tweets[i].statuses[props.random].user.verified}
        url={props.tweets[i].statuses[props.random].user.url}
      />
    );
  }

  return (
    <div className="random" style={cardStyle}>
      {randomCards}
    </div>
  );
}

export default Random;
