import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const Navbar1 = () => {
  return (
    <>
      <div class="centerButtonsMiddle">
        <a class="btnNav" href="#">
          <span class="wave2"></span>
          <span class="text">
            <Navbar variant="dark">
              <Container className="NavContainer">
                <Navbar.Brand as={Link} to="/" className="Logo">
                  <img
                    src="https://trello.com/1/cards/617a98dfc2dddb4c0a5d8a02/attachments/618d3ad4f50ad68463d3b5b7/download/newtestlogo.png"
                    width="70"
                    height="50"
                    className="d-inline-block align-top"
                    alt="what's in your fridge ?"
                  />
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
