import React from "react";
import { Card } from "react-bootstrap";
import HeartImage from "../Images/Heart.png";
import Retweet from "../Images/Retweet.png";
import Comment from "../Images/Comment.png";
import CardImage from "../Images/TwitterCardImage.jpg";
import BlueCheck from '../Images/BlueCheck.png'
import Share from '../Images/Share.png'
import Settings from '../Images/Settings.png'

function Home() {
  const cardStyle = {
    display: "flex",
    paddingTop: "200px",
    justifyContent: "center",
  };
  return (
    <div className="home">
      <div style={cardStyle}>
        <div>
          <Card style={{ width: "18rem", margin: "35px" }}>
            <Card.Img variant="top" src={CardImage} />
            <Card.Body>
              <div style={{ justifyContent:'flex-start'}}>
              <Card.Title style={{fontSize:'15px', fontWeight:'bolder'}}>Johnny Briones <img alt="blue check" variant="top" src={BlueCheck}/> <img alt="setting" variant="top" src={Settings} style={{marginLeft:'95px'}} /><p style={{fontSize:'15px', color:'gray'}}>@JBri91</p></Card.Title>
              </div>
              <Card.Text>
              </Card.Text>
              <div
                className="twitterIcons"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <img alt="comment" variant="top" src={Comment} />
                367
                <img alt="retweet" variant="top" src={Retweet} />
                3K
                <img alt="heart" variant="top" src={HeartImage} />
                12.1K
                <img alt="share" variant="top" src={Share} />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
