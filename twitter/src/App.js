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
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit(e) {
    console.log(this.state.value);
    e.preventDefault();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      console.log("value has changed");
    }
  }

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
    return (
      <BrowserRouter>
        <form onSubmit={this.handleSubmit}>
          <Navigationbar onChange={this.onChange} />
        </form>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/random"
            render={() => <Random tweets={this.state.tweets} />}
          />
          <Route
            path="/search"
            render={() => <Search tweets={this.state.tweets} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
