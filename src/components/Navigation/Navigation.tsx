import React from "react";
import "./Navigation.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navigation() {
  return (
    <>
      <Navbar variant="dark" className="navbar-fixed">
        <Container>
          <Navbar.Brand href="/">{"<Portfolio />"}</Navbar.Brand>
          <Nav className="justify-content-end">
            <AnchorLink href="#projects">
              <Nav.Link>Projects</Nav.Link>
            </AnchorLink>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
