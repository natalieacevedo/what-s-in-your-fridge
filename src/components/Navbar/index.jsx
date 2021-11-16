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
              <Navbar variant="dark" >
                <Container >
                  <Nav className="me-auto " variant="pills" > 
                    <Nav.Link
                      className="my-navbar"
                      as={NavLink}
                      activeClassName="active"
                      to="/ingredients/"
                    >
                      <h3>Ingredients</h3>
                    </Nav.Link>
                    <Nav.Link as={NavLink}  activeClassName="active" to="/recipes/" disabled>
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
