import { React, useState, useEffect } from "react";
import  { Card, Container, Row }  from 'react-bootstrap';
import Footer from "../Footer";
import Navbar1 from '../Navbar';
import RecipePop from "../Recipes/RecipePop";
import "../Recipes/Recipes-style.css"

function Favorite() {
    



    
    {/* <img src="images/facefood.png" alt="smileyfood"></img> */}

    return (

        <>
        <Navbar1 />
              <h2>Favourites</h2>
              <Container>
                <Row >
                   
                     <>
                   <Card >
                     <div className="new-overflow">
                    <Card.Img className="custom-overflow "  />
                      </div>            
                    <Card.Body className="text-center">
                    <Card.Title>title favourite Recipe</Card.Title> 
                    <Card.Text>
                    text of the favourite Recipe
                    </Card.Text>
                    <RecipePop />
                    </Card.Body>
                </Card>
                    </>
                    
                 </Row>
              </Container>
              <Footer />
          </>
    )



};

export default Favorite;