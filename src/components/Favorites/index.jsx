import { React, useState, useEffect,useContext } from "react";
import  { Card, Container, Row }  from 'react-bootstrap';
import Footer from "../Footer";
import Navbar1 from '../Navbar';
import RecipePop from "../Recipes/RecipePop";
import "../Recipes/Recipes-style.css"
import FavoriteContext from "../Context/FavoriteContext";

function Favorite() {
    const { favorites } = useContext(FavoriteContext);
    console.log(favorites);
       
    return (

        <>
        <Navbar1 />
              <h2>Favourites</h2>
            <Container>
                {favorites ? (
                    <Row >
                        {Object.values(favorites).map(el =>
                            <>
                                <Card >
                                    <div className="new-overflow">
                                        <Card.Img className="custom-overflow" src={el.image} />
                                    </div>
                                    <Card.Body className="text-center">
                                        <Card.Title>{el.title}</Card.Title>
                                        <Card.Text>
                                            {el.description}
                                        </Card.Text>
                                        <RecipePop recipe={el} />
                                    </Card.Body>
                                </Card>
                            </>
                        )}
                    </Row>
                ) : (
                    <p>You don't have any favorites yet</p>       
                )
                }
              </Container>
              <Footer />
          </>
    )



};

export default Favorite;