import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="button-group">
        <Button variant="primary" href={props.link1} target="_blank">
          <BiLinkExternal /> View github front-End
        </Button>
        <Button variant="primary" href={props.linkbe} target="_blank">
          <BiLinkExternal /> View github back-End
        </Button>
        <Button variant="primary" href={props.link2} target="_blank">
          <BiLinkExternal /> View deployment
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
