import React from "react";
import { Card, Button } from "react-bootstrap";

function TwitterCard() {
  return (
    <div>
      <Card style={{ width: "18rem", margin: '35px' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Playstation</Card.Title>
          <Card.Text>
          Multiplayer maps & modes
          <ul>
          <li>Collision symbol Nuketown Holiday 24/7</li>
          <li>Collision symbol Prop Hunt</li> 
          <li>Collision symbol Much more</li>
          Jump into the #BlackOpsColdWar Free Access Week, starting on December 17:
          https://bit.ly/BOCWFreeTrial
          </ul>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TwitterCard;
