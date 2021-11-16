import {React, useEffect, useState} from 'react'
import axios from 'axios';
import  { Card, Container, Row }  from 'react-bootstrap';
import RecipePop from './RecipePop';
import Footer from "../Footer";
import Navbar1 from '../Navbar';
import "./Recipes-style.css"

const Recipes = (props) => {

  const [recipes, updateRecipes] = useState([]);

  //const [details, setDetails] = useState([]);


  let allIngredientsforTheRecipe = props.match.params.ingredients;
  
  function ListOfRecipes() {
    axios
      .get(`http://localhost:5000/api/listofrecipes/${allIngredientsforTheRecipe}`)

      .then((response) => {
        return response.data;
      })
      .then((data) => {
        updateRecipes(data);
      });

  };
  
  useEffect(ListOfRecipes, [allIngredientsforTheRecipe]);
 
 
  return (
<>
<Navbar1 />
      <h2>Recipes</h2>
      <Container>
        <Row >
             {recipes.map(el => 
             <>
           <Card >
             <div className="new-overflow">
            <Card.Img className="custom-overflow " src={el.image}/>
              </div>            
            <Card.Body className="text-center">
            <Card.Title>{el.title}</Card.Title> 
            <Card.Text>
            {`Discover how to cook ${el.title}, a meal all the family will love`}
            </Card.Text>
                     <RecipePop recipeId={el.id}/>
            </Card.Body>
        </Card>
            </>
            )}
         </Row>
      </Container>
      <Footer />
  </>
  );
};

export default Recipes;
