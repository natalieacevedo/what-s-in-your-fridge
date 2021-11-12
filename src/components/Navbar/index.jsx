import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navbar1 = () => {
  return (
    <>
      <div class="middle">
        <a class="btn2" href="#">
          <span class="wave"></span>
          <span class="text">
            <Navbar variant="dark">
              <Container>
                <Navbar.Brand as={Link} to="/">
                  Logo
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/ingredients/ingredientRoot">
                    Ingredients
                  </Nav.Link>
                  <Nav.Link as={Link} to="/recipes/:ingredients" >
                    Recipes
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </span>
        </a>
      </div>
    </>
  );
};

export default Navbar1;
