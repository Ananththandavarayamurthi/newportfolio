import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Parti";
import Github from "../components/About/Github";
import Techstack from "../components/About/Techstack";
import laptopImg from "../Assets/profile2.svg";
import Toolstack from "../components/About/Toolstack";
import { DiPython} from "react-icons/di";
import {SiC,SiJavascript} from "react-icons/si"

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <h1  className="project-heading">
      <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "0px" ,width:"200px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <strong className="purple">Professional Skillset </strong>
          </h1>
      <Container>
      <Techstack />
        <Row style={{ justifyContent: "right", padding: "10px" }}>
        <Col style={{ justifyContent: "left", padding: "10px" }}>
          
          
          <h3 className="project-heading" style={{ size: "20px" }}>
        Languages
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
          <h3 style={{ size: "20px" }} >Python</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiC />
          <h3 style={{ size: "20px" }} >C</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript />
          <h3 style={{ size: "20px" }} >Javascript</h3>
        </Col>
       
      </Row>
          
      </Col>
          {/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> */}
        </Row>
        

        

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        
        <Github />
      </Container>
    </Container>
  )
}

export default Skills
