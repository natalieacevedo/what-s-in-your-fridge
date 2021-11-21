import {React, useEffect, useState,useContext} from 'react'
import axios from 'axios';
import  { Card, Container, Row }  from 'react-bootstrap';
import RecipePop from './RecipePop';
import Footer from "../Footer";
import Navbar1 from '../Navbar';
import "./Recipes-style.css";
import FavoriteContext from "../Context/FavoriteContext";

const Recipes = (props) => {

  const [recipes, updateRecipes] = useState([]);

  const { key } = useContext(FavoriteContext);


  let allIngredientsforTheRecipe = props.match.params.ingredients;

 
  function ListOfRecipes() {
    axios
      .get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${allIngredientsforTheRecipe}&number=10&apiKey=${key}`)

      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((data) => {
        updateRecipes(data);
      });

  };
  
  useEffect(ListOfRecipes, [allIngredientsforTheRecipe]);


  let arrayWithMissedIngredients = recipes.map(el => el.missedIngredients
  .map(el => el.original)).flat();
 
  
  return (
<>
<Navbar1 />
      <br></br>
      <br></br>
      <Container className="favourite-container">
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
                     <RecipePop missedIngredients={arrayWithMissedIngredients} recipe={el} recipeId={el.id}/>
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
