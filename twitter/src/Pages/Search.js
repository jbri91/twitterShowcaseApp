import React from "react";
import TwitterCard from "../components/TwitterCard";
import UserInput from "../components/UserInput";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tweetFinder: [],
      tweets: "",
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
    let currentValue = this.state.value;
    fetch(`/api/${currentValue}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          tweetFinder: data.statuses,
        })
      )
      .catch((error) => console.log(error));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let currentValue = this.state.value;
    fetch(`/api/${currentValue}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          tweets: data.statuses,
        })
      )
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
          key={this.state.tweetFinder[i].user.name}
          name={this.state.tweetFinder[i].user.name}
          userName={this.state.tweetFinder[i].user.screen_name}
          tweet={this.state.tweetFinder[i].text}
          retweet={this.state.tweetFinder[i].retweet_count}
          likes={this.state.tweetFinder[i].favorite_count}
          image={this.state.tweetFinder[i].user.profile_image_url_https}
          verified={this.state.tweetFinder[i].user.verified}
        />
      );
    }

    const searchTweet = [];
    for (let i = 0; i < this.state.tweets.length; i++) {
      searchTweet.push(
        <TwitterCard
          key={this.state.tweets[i].user.name}
          name={this.state.tweets[i].user.name}
          userName={this.state.tweets[i].user.screen_name}
          tweet={this.state.tweets[i].text}
          retweet={this.state.tweets[i].retweet_count}
          likes={this.state.tweets[i].favorite_count}
          image={this.state.tweets[i].user.profile_image_url_https}
          verified={this.state.tweets[i].user.verified}
        />
      );
    }

    return (
      <div className="search">
        <div style={cardStyle}>
          <div style={{ display: "flex" }}>
            <form onSubmit={this.handleSubmit}>
              <UserInput
                placeholder="Find User By Username"
                name="findUser"
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </form>
            <br />
            <form onSubmit={this.alternateSubmit}>
              <UserInput
                placeholder="Find Tweet"
                name="findTweet"
                handleChange={this.handleChange}
              />
            </form>
          </div>
          {this.state.tweets ? searchTweet : null}
          {this.state.tweetFinder ? tweetArray : null}
        </div>
      </div>
    );
  }
}

export default Search;
