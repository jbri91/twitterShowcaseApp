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

  



  return (
    <div onClick={props.handleClick} className="random" style={cardStyle}>
     <TwitterCard
        name={props.name}
        userName={props.userName}
        verified={props.verified}
        image={props.image}
        url={props.url}
        id={props.id}
        retweet={props.retweet}
        tweet={props.tweet}
        likes={props.likes}
      />
    </div>
  );
}
export default Random;
