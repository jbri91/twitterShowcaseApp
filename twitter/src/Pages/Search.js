import React from "react";
import TwitterCard from "../components/TwitterCard";

function Search(props) {
  console.log(props.userSearch)
  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "80px",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  };
  
  const searchCard = () => {
    if(props.userSearch) {
      
    }
  }

  return (
    <div className="search">
      <div style={cardStyle}>
        {props.userSearch ? <TwitterCard
        name={props.userSearch.name}
        userName={props.userSearch.userName}
        tweet={props.userSearch.tweet}
        comments={props.userSearch.comments}
        retweets={props.userSearch.retweets}
        likes={props.userSearch.likes}
        image={props.userSearch.image} /> : null}
      </div>
    </div>
  );
}

export default Search;
