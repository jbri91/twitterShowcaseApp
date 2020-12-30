import React from "react";
import TwitterCard from "../components/TwitterCard";
import UserInput from "../components/UserInput";

function Search(props) {
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
    <div className="search">
      <div style={cardStyle}>
        <div style={{ display: "flex" }}>
          <UserInput
            placeholder="Find User"
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
          />
          <br />
          <UserInput placeholder="Find Tweet" />
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
        ) : null}
      </div>
    </div>
  );
}

export default Search;
