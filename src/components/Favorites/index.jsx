import { React,useContext } from "react";
import  { Card, Container, Row }  from 'react-bootstrap';
import Footer from "../Footer";
import Navbar1 from '../Navbar';
import RecipePop from "../Recipes/RecipePop";
import "../Recipes/Recipes-style.css"
import FavoriteContext from "../Context/FavoriteContext";


function Favorite() {
    const { favorites } = useContext(FavoriteContext);
       
    return (

        <>
        <Navbar1 />
          <br></br>    
          <br></br>    
              <Container className="favourite-container">
                {Object.values(favorites).length > 0 ? (
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
                ) : 
                <h1>You don't have any favourites yet</h1> 
                
                }
              </Container>
              <Footer />
          </>
    )



};

export default Favorite;