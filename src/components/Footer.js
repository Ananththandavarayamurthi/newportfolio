import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Ananth</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AN</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ananth-t-471639260/" 
                rel="noreferrer"
                target="_blank"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/Ananththandavarayamurthi" 
                rel="noreferrer"
                target="_blank"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/ananth.raino" 
                rel="noreferrer"
                target="_blank"
                style={{ color: "white" }}
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ananth7246/" 
                rel="noreferrer"
                target="_blank"
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/AnanthT98155617"
                rel="noreferrer"
                target="_blank"
                style={{ color: "white" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Footer;