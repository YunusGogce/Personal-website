import React from "react";
import "./Navigation.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navigation() {
  return (
    <>
      <Navbar variant="dark" className="navbar-fixed">
        <Container>
          <AnchorLink href="#intro">
            <Navbar.Brand>{"<Portfolio />"}</Navbar.Brand>
          </AnchorLink>
          <Nav className="justify-content-end">
            <AnchorLink href="#projects">
              <Nav.Item>Projects</Nav.Item>
            </AnchorLink>
            <AnchorLink href="#work">
              <Nav.Item>Work</Nav.Item>
            </AnchorLink>
            <AnchorLink href="#contact">
              <Nav.Item>Contact</Nav.Item>
            </AnchorLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
