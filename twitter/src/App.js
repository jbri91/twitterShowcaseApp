import React from "react";
import "./App.css";
import Navigationbar from "./components/NavigationBar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Random from "./Pages/Random";
import Search from "./Pages/Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      value: "",
      tweetFinder: [],
      random: Math.floor(Math.random() * 20),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.alternateSubmit = this.alternateSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let id = e.target.offsetParent.id;
    console.log(id);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let currentValue = this.state.value;
    fetch(`/api/${currentValue}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

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

  componentDidMount() {
    Promise.all([
      fetch("/api/elonmusk"),
      fetch("/api/timferris"),
      fetch("/api/tedtalks"),
      fetch("/api/nasa"),
      fetch("/api/gruber"),
    ])
      .then(function (responses) {
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then((data) =>
        this.setState({
          tweets: [
            data[0].statuses,
            data[1].statuses,
            data[2].statuses,
            data[3].statuses,
            data[4].statuses
          ]
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.tweets[0]);

    return (
      <BrowserRouter>
        <Navigationbar />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/random"
            render={() => (
              <Random
                handleClick={this.handleClick}
                random={this.state.random}
                tweets={this.state.tweets}
                randomCard1={this.state.tweets[0]}              



                // name={this.state.tweets[0].statuses[1].user.name}
                // userName={this.state.tweets[0].statuses[1].user.screen_name}
                // verified={this.state.tweets[0].statuses[1].user.verified}
                // image={
                //   this.state.tweets[0].statuses[1].user.profile_image_url_https
                // }
                // url={this.state.tweets[0].statuses[1].user.url}
                // id={this.state.tweets[0].statuses[1].user.id}
                // retweet={this.state.tweets[0].statuses[1].retweet_count}
                // tweet={this.state.tweets[0].statuses[1].text}
                // likes={this.state.tweets[0].statuses[1].favorite_count}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Search
                tweetFinder={this.state.tweetFinder}
                tweets={this.state.tweets}
                userSearch={this.state.value}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                alternateSubmit={this.alternateSubmit}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
