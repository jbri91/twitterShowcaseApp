import React from "react";
import { Card, Button } from "react-bootstrap";
import CardImage from '../Images/TwitterCardImage.jpg'

function TwitterCard() {
  return (
    <div>
      <Card style={{ width: "18rem", margin: "35px" }}>
        <Card.Img variant="top" src={CardImage} />
        <Card.Body>
          <Card.Title>Playstation</Card.Title>
          <Card.Text>
            Multiplayer maps & modes
            
              Collision symbol Nuketown Holiday 24/7
              Collision symbol Prop Hunt
              Collision symbol Much more
            
              Jump into the #BlackOpsColdWar Free Access Week, starting on
              December 17: https://bit.ly/BOCWFreeTrial
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TwitterCard;
