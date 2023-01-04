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
              imgPath={money}
              title="MONEY TRACKER"
              description="I try to create a platform where you can track your income and expences it helps you to save your money and monitoring your financial statistics."
              link1="https://github.com/Ananththandavarayamurthi/money-manager-front-end"
              link2="https://money-trackering.netlify.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={makeup}
              title="Shoping Makeup"
              description="I have created this project for the Makeup API. So basically this is a website which show the make up products and i add Search option in this web page."
              link1="https://github.com/Ananththandavarayamurthi/webkata"
              link2="https://fanciful-rabanadas-7838ca.netlify.app/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={School}
              title="School manager"
              description="I created this project for School management, this website note all the student and teachers details.and i used crud operation."
              link1="https://github.com/Ananththandavarayamurthi/student-teacher"
              link2="https://studentteacherlearn.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              title="Weather of all Countries"
              description="i created this web site for Weather condition off all countries, it shows current weather of all countries  ."
              link1="https://github.com/Ananththandavarayamurthi/openwethercountrys-task"
              link2="https://mellifluous-manatee-c01b93.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dog}
              title="Dog Image"
              description="I have created this website for to generate diff dog img. This website is created with basic HTML, CSS and JavaScript. This website helps to see diff breeds of dogs and dogs image."
              link1="https://github.com/Ananththandavarayamurthi/day21-task2"
              link2="https://golden-valkyrie-37973c.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              title="simple crud operation"
              description="I have created this website for to do simple crud operation. This website is created with basic React.js with hooks."
              link1="https://github.com/Ananththandavarayamurthi/task26-dash-board"
              link2="https://peppy-lokum-3ef1c2.netlify.app/dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
