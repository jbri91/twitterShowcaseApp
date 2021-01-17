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
    let tweetArray = [];
    if (this.state.value > "") {
      for (let i = 0; i < 5; i++) {
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
    // const tweetArray = [];
    // for (let i = 0; i < this.state.tweetFinder.length; i++) {
    //   tweetArray.push(
    //     <TwitterCard
    //       key={this.state.tweetFinder[i].id}
    //       name={this.state.tweetFinder[i].name}
    //       userName={this.state.tweetFinder[i].userName}
    //       tweet={this.state.tweetFinder[i].tweet}
    //       comments={this.state.tweetFinder[i].comments}
    //       retweets={this.state.tweetFinder[i].retweets}
    //       likes={this.state.tweetFinder[i].likes}
    //       image={this.state.tweetFinder[i].image}
    //     />
    //   );
    // }

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

    // console.log(this.state.tweets[0]);

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
          {this.state.tweets ? (
            searchTweet
          ) : null}
        </div>
      </div>
    );
  }
}

export default Search;
