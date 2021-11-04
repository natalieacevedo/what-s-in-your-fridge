import React from 'react'
import { useParams } from 'react-router';
import Navbar1 from '../Navbar/Navbar';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';





const Recipes = (props) => {

  const [recipes, updateRecipes] = useState([]);

  let allIngredientsforTheRecipe = props.match.params.ingredients;
  
  function ListOfRecipes() {
    axios
      .get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${allIngredientsforTheRecipe}&number=15&apiKey=361ef8a3714d4e02a1d85d38a8bcca93`)
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
      {recipes.map(el => 
        <ul>
          <li>{el.title}</li>
          <li>{el.image}</li>
        </ul>
        
      )}
      
  </>
  );
};

export default Recipes;
