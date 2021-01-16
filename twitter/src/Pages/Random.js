import React from "react";
import TwitterCard from "../components/TwitterCard";

class Random extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elonTweet: null
  }
      
  }

componentDidMount() {

    fetch("/api/elonmusk").then(re => re.json()).then(data => console.log(data))
    .catch((error) => console.log(error));
}

render() {
  
  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "80px",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  };

  return (
    <div>
      Hello
    </div>
  );
}}
export default Random;
