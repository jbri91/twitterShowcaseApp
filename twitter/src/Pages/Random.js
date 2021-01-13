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
        name={props.randomCard1[0].user.name}
        userName={props.randomCard1[0].user.screen_name}
        verified={props.randomCard1[0].user.verified}
        image={props.randomCard1[0].user.profile_image_url_https}
        url={props.randomCard1[0].user.url}
        id={props.randomCard1[0].user.id}
        retweet={props.randomCard1[0].retweet_count} 
        tweet={props.randomCard1[0].text}
        likes={props.randomCard1[0].user.favourites_count}
      />
    </div>
  );
}
export default Random;
