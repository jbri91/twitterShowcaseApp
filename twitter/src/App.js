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
    e.preventDefault()
    this.setState({
      random: this.state.random
    })
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
      .then((data) =>
       console.log(data)
      )
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
      fetch("/api/dalailama"),
      fetch("/api/adamgrant"),
      fetch("/api/neilpatel"),
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
          tweets: data,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.tweets);
    return (
      <BrowserRouter>
        <Navigationbar />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/random"
            render={() => (
              <Random handleClick={this.handleClick} 
              random={this.state.random}
              tweets={this.state.tweets} />
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
