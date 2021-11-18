import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const Navbar1 = () => {
  return (
    <>
      {
        <div className="center-buttons-middle">
          <a className="btn-nav" href="#">
            <span className="wave2"></span>
            <span className="text">
              <Navbar variant="dark" expand="sm" >
                <Container fluid>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav  justify variant="pills" className="m-auto">
                      <Nav.Link
                        className="my-navbar"
                        as={NavLink}
                        activeClassName="active"
                        to="/ingredients/"
                      >
                        <h3>Ingredients</h3>
                      </Nav.Link>
                      <Nav.Link
                        as={NavLink}
                        activeClassName="active"
                        to="/recipes/"
                        disabled
                      >
                        <h3>Recipes</h3>
                      </Nav.Link>
                      <Nav.Link
                        as={NavLink}
                        activeClassName="active"
                        to="/favorites/"
                      >
                        <h3>Favorite</h3>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
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
