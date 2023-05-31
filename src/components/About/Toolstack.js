import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiFigma,
  SiNetlify,
  SiHeroku,
  SiGithub,
  SiPostman,
  SiRender
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode />
      <h3 style={{ size: "20px" }} >Visual studio</h3>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiGithub />
      <h3 style={{ size: "20px" }} >GitHub</h3>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiPostman />
      <h3 style={{ size: "20px" }} >Postman</h3>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiFigma />
      <h3 style={{ size: "20px" }} >Figma</h3>
    </Col>
    
    <Col xs={4} md={2} className="tech-icons">
      <SiNetlify />
      <h3 style={{ size: "20px" }} >Netlify</h3>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiRender />
      <h3 style={{ size: "20px" }} >Render</h3>
    </Col>
    
    
    <Col xs={4} md={2} className="tech-icons">
      <SiHeroku />
      <h3 style={{ size: "20px" }} >Heroku</h3>
    </Col>
    
  </Row>
    
  );
}

export default Toolstack;
