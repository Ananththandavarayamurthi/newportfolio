import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import laptopImg from "../../Assets/profile2.svg"
 import {
  DiReact,
  DiNodejs,
  DiPython,
  
  DiHtml5,
  DiBootstrap,
} from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiRedux,
  SiC,
  SiMui,
  SiAmazonaws,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  
} from "react-icons/si";
import {BsFiletypeSql} from "react-icons/bs";
import {TbSql} from "react-icons/tb"

function Techstack() {
  return (
    <Container>
      

      <h3 className="project-heading" style={{ size: "20px" }}>
        Full Stack Skills
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
          <h3 style={{ size: "20px" }} >HTML</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaCss3Alt />
          <h3 style={{ size: "20px" }} >CSS</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript />
          <h3 style={{ size: "20px" }} >Javascript</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <h3 style={{ size: "20px" }} >React js</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
          <h3 style={{ size: "20px" }} >Express js</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
          <h3 style={{ size: "20px" }} >Redux</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiBootstrap />
          <h3 style={{ size: "20px" }} >Bootstrap</h3>
        </Col><Col xs={4} md={2} className="tech-icons">
          <SiTailwindcss />
          <h3 style={{ size: "20px" }} >Tailwind</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMui />
          <h3 style={{ size: "20px" }} >Material UI</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
          <h3 style={{ size: "20px" }} >Node js</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMongodb />
          <h3 style={{ size: "20px" }} >Mongo DB</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbSql />
          <h3 style={{ size: "20px" }} >sql</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
          <h3 style={{ size: "20px" }} >AWS</h3>
        </Col>
        
        
      </Row>
      
    </Container>
  );
}

export default Techstack;
