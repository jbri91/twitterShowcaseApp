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
      tweeter: "",
    };
  }

  componentDidMount() {
    fetch("/user/Playstation")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          tweeter: data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <BrowserRouter>
        <Navigationbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/random" component={Random} />
          <Route
            path="/search"
            render={() => <Search name={this.state.tweeter.name}
            userName={this.state.tweeter.userName}
            tweet={this.state.tweeter.tweet}
            comments={this.state.tweeter.comments}
            retweets={this.state.tweeter.retweets}
            likes={this.state.tweeter.likes} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
