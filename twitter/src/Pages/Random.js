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
  
  
  let r1 = Math.floor(Math.random() * props.tweets[0].statuses.length)
  let r2 = Math.floor(Math.random() * props.tweets[1].statuses.length)
  let r3 = Math.floor(Math.random() * props.tweets[2].statuses.length)
  let r4 = Math.floor(Math.random() * props.tweets[3].statuses.length)
  let r5 = Math.floor(Math.random() * props.tweets[4].statuses.length)
  
  return (
    
    <div className="random" style={cardStyle}>
      
      <TwitterCard
      name={props.tweets[0].statuses[r1].user.name}
      userName={props.tweets[0].statuses[r1].user.screen_name}
      tweet={props.tweets[0].statuses[r1].text}
      retweets={props.tweets[0].statuses[r1].retweet_count}
      likes={props.tweets[0].statuses[r1].favorite_count}
      image={props.tweets[0].statuses[r1].user.profile_image_url_https}
      verified={props.tweets[0].statuses[r1].user.verified}
      /> 
       <TwitterCard 
      name={props.tweets[1].statuses[r2].user.name}
      userName={props.tweets[1].statuses[r2].user.screen_name}
      tweet={props.tweets[1].statuses[r2].text}
      retweets={props.tweets[1].statuses[r2].retweet_count}
      likes={props.tweets[1].statuses[r2].favorite_count}
      image={props.tweets[1].statuses[r2].user.profile_image_url_https}
      verified={props.tweets[1].statuses[r2].user.verified}
      /> <TwitterCard 
      name={props.tweets[2].statuses[r3].user.name}
      userName={props.tweets[2].statuses[r3].user.screen_name}
      tweet={props.tweets[2].statuses[r3].text}
      retweets={props.tweets[2].statuses[r3].retweet_count}
      likes={props.tweets[2].statuses[r3].favorite_count}
      image={props.tweets[2].statuses[r3].user.profile_image_url_https}
      verified={props.tweets[2].statuses[r3].user.verified}
      />
       <TwitterCard 
      name={props.tweets[3].statuses[r4].user.name}
      userName={props.tweets[3].statuses[r4].user.screen_name}
      tweet={props.tweets[3].statuses[r4].text}
      retweets={props.tweets[3].statuses[r4].retweet_count}
      likes={props.tweets[3].statuses[r4].favorite_count}
      image={props.tweets[3].statuses[r4].user.profile_image_url_https}
      verified={props.tweets[3].statuses[r4].user.verified}
      />
       <TwitterCard 
      name={props.tweets[4].statuses[r5].user.name}
      userName={props.tweets[4].statuses[r5].user.screen_name}
      tweet={props.tweets[4].statuses[r5].text}
      retweets={props.tweets[4].statuses[r5].retweet_count}
      likes={props.tweets[4].statuses[r5].favorite_count}
      image={props.tweets[4].statuses[r5].user.profile_image_url_https}
      verified={props.tweets[4].statuses[r5].user.verified}
      />
    </div>
  );
}

export default Random;
