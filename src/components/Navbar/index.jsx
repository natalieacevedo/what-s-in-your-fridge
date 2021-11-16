import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import "./Navbar.css";

const Navbar1 = () => {
  return (
    <>
      {
        <div className="center-buttons-middle">
          <a className="btn-nav" href="#">
            <span className="wave2"></span>
            <span className="text">
              <Navbar variant="dark">
                <Container>
                  <Nav className="me-auto">
                    <Nav.Link
                      className="my-navbar"
                      as={Link}
                      to="/ingredients/"
                      href="/ingredients"
                    >
                      <h3>Ingredients</h3>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/recipes/:ingredients">
                      <h3>Recipes</h3>
                    </Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </span>
          </a>
        </div>
      }
    </>
  );
};

export default Navbar1;
