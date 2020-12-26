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
      tweeter: [[]],
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
    console.log(this.state.tweeter.length)

    return (
      <BrowserRouter>
        <Navigationbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/random"
            render={() => (
              <Random
                name={this.state.tweeter[0].name}
                userName={this.state.tweeter[0].userName}
                tweet={this.state.tweeter[0].tweet}
                comments={this.state.tweeter[0].comments}
                retweets={this.state.tweeter[0].retweets}
                likes={this.state.tweeter[0].likes}
                image={this.state.tweeter[0].image}
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
