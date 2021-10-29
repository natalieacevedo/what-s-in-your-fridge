import React from 'react'
import { Container, Navbar, Nav, } from 'react-bootstrap'
import {Link} from 'react-router-dom'




const Navbar1 = () => {
    return (
<>
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to='/'>Logo</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link  as={Link} to='/ingredients/ingredientRoot'>Ingredients</Nav.Link>
      <Nav.Link  as={Link} to='/recipes'>Recipes</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

        </>
    )
}

export default Navbar1;
