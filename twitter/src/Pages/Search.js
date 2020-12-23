import React from "react";
import TwitterCard from "../components/TwitterCard";

function Search(props) {
  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "80px",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  };
  return (
    <div className="search">
      <div style={cardStyle}>
        <TwitterCard
        name={props.name}
        userName={props.userName}
        tweet={props.tweet}
        comments={props.comments}
        retweets={props.retweets}
        likes={props.likes}  />
        <TwitterCard />
        <TwitterCard />
        <TwitterCard />
      </div>
    </div>
  );
}

export default Search;
