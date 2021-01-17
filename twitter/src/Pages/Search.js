import React from "react";
import TwitterCard from "../components/TwitterCard";
import UserInput from "../components/UserInput";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tweetFinder: [],
      tweets: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.alternateSubmit = this.alternateSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  alternateSubmit = (e) => {
    e.preventDefault();
    let tweetArray = [];
    if (this.state.value > "") {
      for (let i = 0; i < this.state.tweets.length; i++) {
        if (
          this.state.tweets[i].tweet
            .toLowerCase()
            .includes(this.state.value.toLowerCase())
        ) {
          tweetArray.push(this.state.tweets[i]);
        }
        this.setState({
          tweetFinder: tweetArray,
        });
      }
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let currentValue = this.state.value;
    fetch(`/api/${currentValue}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  render() {
    const cardStyle = {
      display: "flex",
      flexWrap: "wrap",
      paddingTop: "80px",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
    };
    const tweetArray = [];
    for (let i = 0; i < this.state.tweetFinder.length; i++) {
      tweetArray.push(
        <TwitterCard
          key={this.state.tweetFinder[i].id}
          name={this.state.tweetFinder[i].name}
          userName={this.state.tweetFinder[i].userName}
          tweet={this.state.tweetFinder[i].tweet}
          comments={this.state.tweetFinder[i].comments}
          retweets={this.state.tweetFinder[i].retweets}
          likes={this.state.tweetFinder[i].likes}
          image={this.state.tweetFinder[i].image}
        />
      );
    }
    return (
      <div className="search">
        <div style={cardStyle}>
          <div style={{ display: "flex" }}>
            <form onSubmit={this.state.handleSubmit}>
              <UserInput
                placeholder="Find User"
                name="findUser"
                handleChange={this.state.handleChange}
                handleSubmit={this.state.handleSubmit}
              />
            </form>
            <br />
            <form onSubmit={this.state.alternateSubmit}>
              <UserInput
                placeholder="Find Tweet"
                name="findTweet"
                handleChange={this.state.handleChange}
              />
            </form>
          </div>
          {/* {this.state.userSearch.name ? (
            <TwitterCard
              name={this.state.userSearch.name}
              userName={this.state.userSearch.userName}
              tweet={this.state.userSearch.tweet}
              comments={this.state.userSearch.comments}
              retweets={this.state.userSearch.retweets}
              likes={this.state.userSearch.likes}
              image={this.state.userSearch.image}
            />
          ) : this.state.tweetFinder.length > 0 ? (
            tweetArray
          ) : null} */}
        </div>
      </div>
    );
  }
}

export default Search;
