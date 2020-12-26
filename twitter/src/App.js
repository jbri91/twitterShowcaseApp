import React from "react";
import "./App.css";
import Navigationbar from "./components/NavigationBar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Random from "./Pages/Random";
import Search from "./Pages/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tweeter: "",
      id: Math.floor(Math.random() * 100) + 5,
    };
  }

  componentDidMount() {
    fetch("/user/Playstation")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          tweeter: data,
        }) 
      )
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <Navigationbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/random"
            render={() => (
              <Random
                name={this.state.tweeter.name}
                userName={this.state.tweeter.userName}
                tweet={this.state.tweeter.tweet}
                comments={this.state.tweeter.comments}
                retweets={this.state.tweeter.retweets}
                likes={this.state.tweeter.likes}
                image={this.state.tweeter.image}
                id={this.state.id}
              />
            )}
          />
          <Route path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
