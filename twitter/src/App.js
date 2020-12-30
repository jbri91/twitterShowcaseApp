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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let currentValue = this.state.value;
    fetch(`/api/tweetUser/${currentValue}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          value: data,
        })
      )
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    fetch("/api/tweets/Playstation")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          tweets: data,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.tweets)
    return (
      <BrowserRouter>
        <Navigationbar/>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/random"
            render={() => <Random tweets={this.state.tweets} />}
          />
          <Route
            path="/search"
            render={() => (
              <Search
                userSearch={this.state.value}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
