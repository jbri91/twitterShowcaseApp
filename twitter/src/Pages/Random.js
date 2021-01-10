import React from "react";
import TwitterCard from "../components/TwitterCard";

function Random(props) {
  console.log(props)
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
    <div  className="random" style={cardStyle}>
      <div onClick={props.handleClick}>
      <TwitterCard
      name={props.tweets[0].statuses[r].user.name}
      userName={props.tweets[0].statuses[r].user.screen_name}
      tweet={props.tweets[0].statuses[r].text}
      retweets={props.tweets[0].statuses[r].retweet_count}
      likes={props.tweets[0].statuses[r].favorite_count}
      image={props.tweets[0].statuses[r].user.profile_image_url_https}
      verified={props.tweets[0].statuses[r].user.verified}
      url={props.tweets[0].statuses[r].user.url}
      /> 
      </div>
       <TwitterCard 
      name={props.tweets[1].statuses[r].user.name}
      userName={props.tweets[1].statuses[r].user.screen_name}
      tweet={props.tweets[1].statuses[r].text}
      retweets={props.tweets[1].statuses[r].retweet_count}
      likes={props.tweets[1].statuses[r].favorite_count}
      image={props.tweets[1].statuses[r].user.profile_image_url_https}
      verified={props.tweets[1].statuses[r].user.verified}
      url={props.tweets[1].statuses[r].user.url}
      /> <TwitterCard 
      name={props.tweets[2].statuses[r].user.name}
      userName={props.tweets[2].statuses[r].user.screen_name}
      tweet={props.tweets[2].statuses[r].text}
      retweets={props.tweets[2].statuses[r].retweet_count}
      likes={props.tweets[2].statuses[r].favorite_count}
      image={props.tweets[2].statuses[r].user.profile_image_url_https}
      verified={props.tweets[2].statuses[r].user.verified}
      url={props.tweets[2].statuses[r].user.url}
      />
       <TwitterCard 
      name={props.tweets[3].statuses[r].user.name}
      userName={props.tweets[3].statuses[r].user.screen_name}
      tweet={props.tweets[3].statuses[r].text}
      retweets={props.tweets[3].statuses[r].retweet_count}
      likes={props.tweets[3].statuses[r].favorite_count}
      image={props.tweets[3].statuses[r].user.profile_image_url_https}
      verified={props.tweets[3].statuses[r].user.verified}
      url={props.tweets[3].statuses[r].user.url}
      />
       <TwitterCard 
      name={props.tweets[4].statuses[r].user.name}
      userName={props.tweets[4].statuses[r].user.screen_name}
      tweet={props.tweets[4].statuses[r].text}
      retweets={props.tweets[4].statuses[r].retweet_count}
      likes={props.tweets[4].statuses[r].favorite_count}
      image={props.tweets[4].statuses[r].user.profile_image_url_https}
      verified={props.tweets[4].statuses[r].user.verified}
      url={props.tweets[4].statuses[r].user.url}
      />
    </div>
  );
}

export default Random;
