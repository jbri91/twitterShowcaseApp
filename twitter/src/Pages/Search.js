import React from "react";
import TwitterCard from "../components/TwitterCard";
import UserInput from "../components/UserInput";

function Search(props) {
  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "80px",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  };
  const tweetArray = [];
  for (let i = 0; i < props.tweetFinder.length; i++) {
    tweetArray.push(
      <TwitterCard
        name={props.tweetFinder[i].name}
        userName={props.tweetFinder[i].userName}
        tweet={props.tweetFinder[i].tweet}
        comments={props.tweetFinder[i].comments}
        retweets={props.tweetFinder[i].retweets}
        likes={props.tweetFinder[i].likes}
        image={props.tweetFinder[i].image}
      />
    );
  }

  return (
    <div className="search">
      <div style={cardStyle}>
        <div style={{ display: "flex" }}>
          <form onSubmit={props.handleSubmit}>
            <UserInput
              placeholder="Find User"
              name="findUser"
              handleChange={props.handleChange}
              handleSubmit={props.handleSubmit}
            />
          </form>
          <br />
          <form onSubmit={props.alternateSubmit}>
            <UserInput
              placeholder="Find Tweet"
              name="findTweet"
              handleChange={props.handleChange}
            />
          </form>
        </div>
        {props.userSearch.name ? (
          <TwitterCard
            name={props.userSearch.name}
            userName={props.userSearch.userName}
            tweet={props.userSearch.tweet}
            comments={props.userSearch.comments}
            retweets={props.userSearch.retweets}
            likes={props.userSearch.likes}
            image={props.userSearch.image}
          />
        ) : props.tweetFinder.length > 0 ? tweetArray : null}
      </div>
    </div>
  );
}

export default Search;
