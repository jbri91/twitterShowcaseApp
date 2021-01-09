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
  
  
  let r = Math.floor(Math.random() * props.tweets[0].statuses.length)


  return (
    
    <div className="random" style={cardStyle}>
      <TwitterCard 
      name={props.tweets[0].statuses[0].user.name}
      userName={props.tweets[0].statuses[0].user.screen_name}
      tweet={props.tweets[0].statuses[0].text}
      retweets={props.tweets[0].statuses[0].retweet_count}
      likes={props.tweets[0].statuses[0].favorite_count}
      image={props.tweets[0].statuses[0].user.profile_image_url_https}
      verified={props.tweets[0].statuses[0].user.verified}
      /> 
       <TwitterCard 
      name={props.tweets[1].statuses[0].user.name}
      userName={props.tweets[1].statuses[0].user.screen_name}
      tweet={props.tweets[1].statuses[0].text}
      retweets={props.tweets[1].statuses[0].retweet_count}
      likes={props.tweets[1].statuses[0].favorite_count}
      image={props.tweets[1].statuses[0].user.profile_image_url_https}
      verified={props.tweets[1].statuses[0].user.verified}
      /> <TwitterCard 
      name={props.tweets[2].statuses[0].user.name}
      userName={props.tweets[2].statuses[0].user.screen_name}
      tweet={props.tweets[2].statuses[0].text}
      retweets={props.tweets[2].statuses[0].retweet_count}
      likes={props.tweets[2].statuses[0].favorite_count}
      image={props.tweets[2].statuses[0].user.profile_image_url_https}
      verified={props.tweets[2].statuses[0].user.verified}
      />
       <TwitterCard 
      name={props.tweets[3].statuses[0].user.name}
      userName={props.tweets[3].statuses[0].user.screen_name}
      tweet={props.tweets[3].statuses[0].text}
      retweets={props.tweets[3].statuses[0].retweet_count}
      likes={props.tweets[3].statuses[0].favorite_count}
      image={props.tweets[3].statuses[0].user.profile_image_url_https}
      verified={props.tweets[3].statuses[0].user.verified}
      />
       <TwitterCard 
      name={props.tweets[4].statuses[0].user.name}
      userName={props.tweets[4].statuses[0].user.screen_name}
      tweet={props.tweets[4].statuses[0].text}
      retweets={props.tweets[4].statuses[0].retweet_count}
      likes={props.tweets[4].statuses[0].favorite_count}
      image={props.tweets[4].statuses[0].user.profile_image_url_https}
      verified={props.tweets[4].statuses[0].user.verified}
      />
    </div>
  );
}

export default Random;
