import React from "react";
import { Card } from "react-bootstrap";
import CardImage from "../Images/TwitterCardImage.jpg";
import HeartImage from "../Images/Heart.png";
import Retweet from "../Images/Retweet.png";
import Comment from "../Images/Comment.png";
import Share from '../Images/Share.png'
import Settings from '../Images/Settings.png'
import BlueCheck from '../Images/BlueCheck.png'


function TwitterCard() {
  return (
    <div>
      <Card style={{ width: "18rem", margin: "35px" }}>
        
        <Card.Body>
          <Card.Title style={{fontSize:'15px', fontWeight:'bolder'}}>Playstation <img alt="blue check" variant="top" src={BlueCheck}/><img alt="setting" variant="top" src={Settings} style={{marginLeft:'130px'}} /><p style={{fontSize:'15px', color:'gray'}}>@Playstation</p></Card.Title>
          <Card.Text>
            Multiplayer maps & modes Collision symbol Nuketown Holiday 24/7
            Collision symbol Prop Hunt Collision symbol Much more Jump into the
            #BlackOpsColdWar Free Access Week, starting on December 17:
            https://bit.ly/BOCWFreeTrial
          </Card.Text>
          <Card.Img variant="top" src={CardImage} style={{borderRadius: '10%'}} />
          <div
            className="twitterIcons"
            style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}
          >
            <img alt='comment' variant="top" src={Comment} />367
            <img alt='retweet' variant="top" src={Retweet} />3K
            <img alt='heart' variant="top" src={HeartImage} />12.1K
            <img alt="share" variant="top" src={Share} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TwitterCard;
