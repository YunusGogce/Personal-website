import React, { useState } from "react";
import "./Navigation.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  function toggleMenu(): void {
    setExpanded(!expanded);
  }

  return (
    <>
      <Navbar
        collapseOnSelect={true}
        expanded={expanded}
        fixed="top"
        variant="dark"
        expand="md"
        className="navbar-bg"
      >
        <Container>
          <AnchorLink href="#intro" onClick={toggleMenu}>
            <Navbar.Brand>{"<Portfolio />"}</Navbar.Brand>
          </AnchorLink>
          <Navbar.Toggle
            onClick={toggleMenu}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <AnchorLink href="#aboutme" onClick={toggleMenu}>
                <Nav.Item>About me</Nav.Item>
              </AnchorLink>
              <AnchorLink href="#projects" onClick={toggleMenu}>
                <Nav.Item>Projects</Nav.Item>
              </AnchorLink>
              <AnchorLink href="#work" onClick={toggleMenu}>
                <Nav.Item>Work</Nav.Item>
              </AnchorLink>
              <AnchorLink href="#contact" onClick={toggleMenu}>
                <Nav.Item>Contact</Nav.Item>
              </AnchorLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
