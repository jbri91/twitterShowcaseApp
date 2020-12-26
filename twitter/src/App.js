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
      tweeter: [],
    };
  }

  componentDidMount() {
    fetch("/api/tweets/Playstation")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          tweeter: data,
        }) 
      )
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <BrowserRouter>
        <Navigationbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/random"
            render={() => (
              <Random
               tweeter={this.state.tweeter}
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
