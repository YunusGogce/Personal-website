import React from "react";
import "./AboutMe.css";
import Portrait from "./portrait.svg";
import { Container, Row, Col } from "react-bootstrap";
import { getAgeByDate } from "../../utils";
const Fade = require("react-reveal/Fade");

function AboutMe() {
  const age: number = getAgeByDate(new Date("07/01/1998"));
  return (
    <div className="aboutme" id="aboutme">
      <h2 className="h1 mb-5 hr mt-5 mt-md-0">{"<AboutMe />"}</h2>
      <Container className="d-flex">
        <Row className="justify-content-center align-self-center">
          <Col md={12} lg={6} className="mb-4 my-lg-auto">
            <Fade>
              <img src={Portrait} alt="Portrait" className="portrait" />
            </Fade>
          </Col>
          <Col md={12} lg={6} className="text-lg-end my-auto">
            <Fade right>
              {`I'm a ${age}-year-old Software Engineer, living in the Netherlands. My
              interest in IT started at a very young age, where I discovered
              that I could build my own website using HTML, CSS and JavaScript
              code. In 2014 I decided to start with the "Application
              Development" study at the vocational school. I finished this study
              successfully. Since I was still young at the time, I felt the need
              to continue studying to have more advanced knowledge. In 2017 I
              started with the Software Engineering bachelor study at The Hague
              University. This was the perfect study to challenge myself and
              broaden my knowledge about Software Development. During this
              study, I learned a lot about Frontend development, Backend
              development, Software Architecture, API, Testing, Databases and so
              on. Since I already had an IT-related diploma, I decided to work
              part-time during University. This allowed me to gain more
              experience and knowledge in the field. In 2021 I successfully
              finished the study and got my Bachelor of Science. Currently, I
              have knowledge about the full stack of Software development, but
              lean more towards Frontend development.`}
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
