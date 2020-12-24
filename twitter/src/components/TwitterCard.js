import React from "react";
import { Card } from "react-bootstrap";
import CardImage from "../Images/TwitterCardImage.jpg";
import HeartImage from "../Images/Heart.png";
import Retweet from "../Images/Retweet.png";
import Comment from "../Images/Comment.png";
import Share from "../Images/Share.png";
import Settings from "../Images/Settings.png";
import BlueCheck from "../Images/BlueCheck.png";

function TwitterCard(props) {
  console.log(props);
  return (
    <div>
      <Card style={{ width: "35rem", margin: "35px" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "15px", fontWeight: "bolder" }}>
            {props.name} <img alt="blue check" variant="top" src={BlueCheck} />
            <img
              alt="setting"
              variant="top"
              src={Settings}
              style={{ marginLeft: "390px" }}
            />
            <p style={{ fontSize: "15px", color: "gray" }}>{props.userName}</p>
          </Card.Title>
          <Card.Text>{props.tweet}</Card.Text>
          <Card.Img
            variant="top"
            src={CardImage}
            style={{ borderRadius: "10%" }}
          />
          <div
            className="twitterIcons"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <p>
              <img alt="comment" variant="top" src={Comment} /> {props.comments}
            </p>
            <p>
              <img alt="retweet" variant="top" src={Retweet} /> {props.retweets}
            </p>
            <p>
              <img alt="heart" variant="top" src={HeartImage} /> {props.likes}
            </p>
            <p>
              <img alt="share" variant="top" src={Share} />
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TwitterCard;
