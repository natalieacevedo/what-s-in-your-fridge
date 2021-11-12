import {React, useEffect, useState} from 'react'
import axios from 'axios';
import  { Card }  from 'react-bootstrap';
import RecipePop from './RecipePop';
import Footer from "../Footer";
import Navbar1 from '../Navbar';

const Recipes = (props) => {

  const [recipes, updateRecipes] = useState([]);

  let allIngredientsforTheRecipe = props.match.params.ingredients;
  
  function ListOfRecipes() {
    axios
      .get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${allIngredientsforTheRecipe}&number=5&apiKey=361ef8a3714d4e02a1d85d38a8bcca93`)
        .then((response) => {
            return response.data;
        })
      .then((data) => {
          console.log(data)
            updateRecipes(data);
        });

  };
  
  useEffect(ListOfRecipes, [allIngredientsforTheRecipe]);
  

  console.log(recipes);
  
  return (
<>
<Navbar1 />
      <h2>Recipes</h2>

      <Card style={{ width: '18rem' }}>
           {recipes.map(el => 
        <>
            <Card.Img variant="top" src={el.image} />
            <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <RecipePop />
            </Card.Body>
            </>
            )};
        </Card>
  
      <Footer />
  </>
  );
};

export default Recipes;
