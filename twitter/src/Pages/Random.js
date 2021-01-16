import React from "react";
import TwitterCard from "../components/TwitterCard";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: Math.floor(Math.random() * 20),
      elonTweet: null,
      ferrisTweets: null,
      tedTweets: null,
      nasaTweets: null,
      gruberTweets: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick(e) {
    e.preventDefault();
    let id = e.target.offsetParent.id

    console.log(id);
  }

  async componentDidMount() {
    await fetch("/api/elonmusk")
      .then((re) => re.json())
      .then((tweets) =>
        this.setState({
          elonTweet: tweets,
        })
      )
      .catch((error) => console.log(error));
    await fetch("/api/timferris")
      .then((res) => res.json())
      .then((tweets) =>
        this.setState({
          ferrisTweets: tweets,
        })
      )
      .catch((error) => console.log(error));
    await fetch("/api/tedtalks")
      .then((res) => res.json())
      .then((tweets) =>
        this.setState({
          tedTweets: tweets,
        })
      )
      .catch((error) => console.log(error));
    await fetch("/api/nasa")
      .then((res) => res.json())
      .then((tweets) =>
        this.setState({
          nasaTweets: tweets,
        })
      )
      .catch((error) => console.log(error));

      await fetch("/api/gruber")
      .then((res) => res.json())
      .then((tweets) =>
        this.setState({
          gruberTweets: tweets,
        })
      )
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
      <div onClick={this.handleClick} className="random">
        <div style={cardStyle}>
          {this.state.elonTweet !== null ? (
            <TwitterCard
              id='1'
              name={this.state.elonTweet.statuses[0].user.name}
              userName={this.state.elonTweet.statuses[0].user.screen_name}
              tweet={this.state.elonTweet.statuses[0].text}
              retweet={this.state.elonTweet.statuses[0].retweet_count}
              likes={this.state.elonTweet.statuses[0].favorite_count}
              image={
                this.state.elonTweet.statuses[0].user.profile_image_url_https
              }
            />
          ) : null}

          {this.state.ferrisTweets !== null ? (
            <TwitterCard
            id='2'
              name={this.state.ferrisTweets.statuses[0].user.name}
              userName={this.state.ferrisTweets.statuses[0].user.screen_name}
              tweet={this.state.ferrisTweets.statuses[0].text}
              retweet={this.state.ferrisTweets.statuses[0].retweet_count}
              likes={this.state.ferrisTweets.statuses[0].favorite_count}
              image={
                this.state.ferrisTweets.statuses[0].user.profile_image_url_https
              }
            />
          ) : null}

          {this.state.tedTweets !== null ? (
            <TwitterCard
            id='3'
              name={this.state.tedTweets.statuses[0].user.name}
              userName={this.state.tedTweets.statuses[0].user.screen_name}
              tweet={this.state.tedTweets.statuses[0].text}
              retweet={this.state.tedTweets.statuses[0].retweet_count}
              likes={this.state.tedTweets.statuses[0].favorite_count}
              image={
                this.state.tedTweets.statuses[0].user.profile_image_url_https
              }
            />
          ) : null}

          {this.state.nasaTweets !== null ? (
            <TwitterCard
            id='4'
              name={this.state.nasaTweets.statuses[0].user.name}
              userName={this.state.nasaTweets.statuses[0].user.screen_name}
              tweet={this.state.nasaTweets.statuses[0].text}
              retweet={this.state.nasaTweets.statuses[0].retweet_count}
              likes={this.state.nasaTweets.statuses[0].favorite_count}
              image={
                this.state.nasaTweets.statuses[0].user.profile_image_url_https
              }
            />
          ) : null}

{this.state.gruberTweets !== null ? (
            <TwitterCard
            id='5'
              name={this.state.gruberTweets.statuses[0].user.name}
              userName={this.state.gruberTweets.statuses[0].user.screen_name}
              tweet={this.state.gruberTweets.statuses[0].text}
              retweet={this.state.gruberTweets.statuses[0].retweet_count}
              likes={this.state.gruberTweets.statuses[0].favorite_count}
              image={
                this.state.gruberTweets.statuses[0].user.profile_image_url_https
              }
            />
          ) : null}
        </div>
      </div>
    );
  }
}
export default Random;
