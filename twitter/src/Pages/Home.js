import React from "react";
import { Card } from "react-bootstrap";
import HeartImage from "../Images/Heart.png";
import Retweet from "../Images/Retweet.png";
import Comment from "../Images/Comment.png";
import BlueCheck from "../Images/BlueCheck.png";
import Share from "../Images/Share.png";
import Settings from "../Images/Settings.png";
import CoverImage from '../Images/Sun.jpg'

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
            
            <Card.Body>
              <div style={{ justifyContent: "flex-start" }}>
                <Card.Title style={{ fontSize: "15px", fontWeight: "bolder" }}>
                  Johnny Briones{" "}
                  <img alt="blue check" variant="top" src={BlueCheck} />{" "}
                  <img
                    alt="setting"
                    variant="top"
                    src={Settings}
                    style={{ marginLeft: "95px" }}
                  />
                  <p style={{ fontSize: "15px", color: "gray" }}>@JBri91</p>
                </Card.Title>
              </div>
              <Card.Text style={{fontSize:'15px'}}>
                It is finally live right now! You can finally search for your favorite Twitter
                accounts by going to the Search page! You can even check out MY
                favorite Twitter accounts which will show you their random
                tweets! Give it a go! This was all made possible by Twitter's API!
              </Card.Text>
              <Card.Img variant="top" src={CoverImage} style={{borderRadius: '10%'}} />
              <div
                className="twitterIcons"
                style={{ display: "flex", justifyContent: "space-between", marginTop:'10px' }}
              >
                <img alt="comment" variant="top" src={Comment} />
                1.2K
                <img alt="retweet" variant="top" src={Retweet} />
                5K
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
