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
// console.log(props.tweets.statuses)
  // for (let i = 0; i < props.tweets.statuses.length; i++) {
  //   randomUserCard.push(
  //     <TwitterCard
  //       key={props.tweets.statuses[i].id}
  //       name={props.tweets.statuses[i].user.name}
  //       userName={props.tweets.statuses[i].user.screen_name}
  //       tweet={props.tweets.statuses[i].text}
  //       // comments={props.tweets.statuses[i].comments}
  //       retweets={props.tweets.statuses[i].retweet_count}
  //       likes={props.tweets.statuses[i].favorite_count}
  //       // image={props.tweets[i].image}
  //     />
  //   );
  // }

  return (
    <div className="random" style={cardStyle}>
      {randomUserCard}
      <TwitterCard 
      name={props.tweets[0].statuses[0].user.name}
      userName={props.tweets[0].statuses[0].user.screen_name}
      tweet={props.tweets[0].statuses[0].text}
      retweets={props.tweets[0].statuses[0].retweet_count}
      likes={props.tweets[0].statuses[0].favorite_count}
      />
       <TwitterCard 
      name={props.tweets[1].statuses[0].user.name}
      userName={props.tweets[1].statuses[0].user.screen_name}
      tweet={props.tweets[1].statuses[0].text}
      retweets={props.tweets[1].statuses[0].retweet_count}
      likes={props.tweets[1].statuses[0].favorite_count}
      />
       <TwitterCard 
      name={props.tweets[2].statuses[0].user.name}
      userName={props.tweets[2].statuses[0].user.screen_name}
      tweet={props.tweets[2].statuses[0].text}
      retweets={props.tweets[2].statuses[0].retweet_count}
      likes={props.tweets[2].statuses[0].favorite_count}
      />
       <TwitterCard 
      name={props.tweets[3].statuses[0].user.name}
      userName={props.tweets[3].statuses[0].user.screen_name}
      tweet={props.tweets[3].statuses[0].text}
      retweets={props.tweets[3].statuses[0].retweet_count}
      likes={props.tweets[3].statuses[0].favorite_count}
      />
      
    </div>
  );
}

export default Random;
