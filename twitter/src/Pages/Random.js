import React from "react";
import TwitterCard from "../components/TwitterCard";

function Random(props) {
  const userCard = [];
  console.log(props)
  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "80px",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  };

  for(let i =0; i < props.tweeter.length; i++){
    userCard.push(
    <TwitterCard 
          name={props.tweeter[i].name}
          userName={props.tweeter[i].userName}
          tweet={props.tweeter[i].tweet}
          comments={props.tweeter[i].comments}
          retweets={props.tweeter[i].retweets}
          likes={props.tweeter[i].likes}
          image={props.tweeter[i].image}
       />)
  }


  return (
    <div className="random" style={cardStyle}>
      {userCard}
    </div>
  );
}

export default Random;
