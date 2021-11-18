import { React, useState, useEffect,useContext } from "react";
import  { Card, Container, Row }  from 'react-bootstrap';
import Footer from "../Footer";
import Navbar1 from '../Navbar';
import RecipePop from "../Recipes/RecipePop";
import "../Recipes/Recipes-style.css"
import FavoriteContext from "../Context/FavoriteContext";

function Favorite() {

    const arrayWithAllFavorite = []
    
    const { favoriteContent} = useContext(FavoriteContext);

    if (favoriteContent['title']) {
        
    arrayWithAllFavorite.push([favoriteContent['title'], favoriteContent['image'], favoriteContent['sourceUrl']]);
    
    };

    console.log(arrayWithAllFavorite);

    
    return (

        <>
        <Navbar1 />
              <h2>Favourites</h2>
              <Container className="favourite-container">
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