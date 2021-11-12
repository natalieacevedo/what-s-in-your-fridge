import {React, useEffect, useState} from 'react'
import axios from 'axios';
import  { Card, Container, Row }  from 'react-bootstrap';
import RecipePop from './RecipePop';
import Footer from "../Footer";
import Navbar1 from '../Navbar';
import "./Recipes-style.css"

const Recipes = (props) => {

  const [recipes, updateRecipes] = useState([]);

  const [details, setDetails] = useState([]);


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
  
//////////////////////////////////////////////////////////////////////////////////////////
  // function recipeDetails(id) {
  //   axios
  //     .get(`http://localhost:5000/api/recipe/${id}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setDetails(response.data)

  //     })
  // };

  

  // recipeDetails(648742);
 
 
  
  
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
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <RecipePop />
            </Card.Body>
        </Card>
            </>
            )};
         </Row>
      </Container>
      <Footer />
  </>
  );
};

export default Recipes;
