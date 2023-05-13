import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Parti";
import weather from "../../Assets/Projects/weather.png"
import dog from "../../Assets/Projects/dog.png"
import makeup from "../../Assets/Projects/makeup.png"
import money from "../../Assets/Projects/money.png"
import School from "../../Assets/Projects/school.png"
import crud from "../../Assets/Projects/crud.png"
import chatty from "../../Assets/Projects/chatty.png"
import Ecomerse from "../../Assets/Projects/Ecomerse.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              title="capacity tool office"
              description="I have created this website for manage the employee capacity it used for office use ."
              link1="https://github.com/Ananththandavarayamurthi/capstone-front-end"
              linkbe="https://github.com/Ananththandavarayamurthi/capstone-back-end"
              link2="https://fluffy-naiad-0e3320.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatty}
              title="chatty"
              description="I try to create a chat application using socket.io and MERN stack ."
              link1="https://github.com/Ananththandavarayamurthi/chatty-frontend"
              linkbe="https://github.com/Ananththandavarayamurthi/chatappbackend"
              link2="https://chatty-connect-peoples.netlify.app/"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={money}
              title="MONEY TRACKER"
              description="I try to create a platform where you can track your income and expences it helps you to save your money and monitoring your financial statistics."
              link1="https://github.com/Ananththandavarayamurthi/money-manager-front-end"
              linkbe="https://github.com/Ananththandavarayamurthi/moneymanager-backend"
              link2="https://money-trackering.netlify.app/"
              
            />
          </Col>
      <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecomerse}
              title="BIGSHOPPER"
              description="I created this project for Ecommerce apllication, this website maintain and shop the products in online like amzon.."
              link1="https://github.com/Ananththandavarayamurthi/ecomese-frontend"
              linkbe="https://github.com/Ananththandavarayamurthi/ecommerce-back-end"
              link2="https://main--big-shopper.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
