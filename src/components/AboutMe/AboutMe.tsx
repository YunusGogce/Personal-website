import React from "react";
import "./AboutMe.css";
import Portrait from "./portrait.svg";
import { Container, Row, Col } from "react-bootstrap";
const Fade = require("react-reveal/Fade");

function AboutMe() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="aboutme-bg">
        <h2 className="h1 mb-5 hr">{"<AboutMe />"}</h2>
        <Container className="d-flex">
          <Row className="justify-content-center align-self-center">
            <Col md={12} lg={6} className="mb-4 mb-lg-0">
              <Fade>
                <img src={Portrait} alt="Portrait" className="portrait" />
              </Fade>
            </Col>
            <Col md={12} lg={6} className="text-end my-auto">
              <Fade bottom cascade>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                cursus nec mauris eu ornare. Mauris placerat fermentum leo, quis
                venenatis quam pharetra sit amet. Nam massa ex, pretium id ipsum
                at, luctus dictum lorem. In vestibulum, ligula vel imperdiet
                viverra, enim odio accumsan leo, non gravida nunc diam ultrices
                purus. Vivamus et nisl elementum risus placerat tincidunt.
                Suspendisse vitae sapien dui. Quisque pretium massa a ligula
                luctus, at ornare leo imperdiet. Integer pellentesque tellus eu
                eros porta pulvinar. Nulla feugiat, purus ut congue venenatis,
                nisl erat pulvinar tortor, sit amet mattis nisl sapien at
                sapien. Aliquam a elit at turpis porttitor iaculis. Vivamus non
                malesuada orci, at placerat leo. Donec et ligula pellentesque
                ante pharetra vulputate. Integer aliquet quis orci bibendum
                viverra. Sed malesuada quam a urna mollis, et tincidunt lacus
                viverra. Proin semper ligula et interdum posuere.
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutMe;
