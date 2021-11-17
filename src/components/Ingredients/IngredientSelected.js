import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {toast} from 'react-toastify'


toast.configure()
function IngredientSelected({ ingredients, removeIngredient }) {
  const history = useHistory();
  console.log(ingredients);
  const notify = () => {
   toast.error('Please choose some ingredients',{position: toast.POSITION.TOP_CENTER})
  }
  
  return (
    <div>
      <h3>Selected ingredients:</h3>
      <ul className="selected-container">
        {ingredients.map((el) => (
          <li
            className="selected-ingredients"
            onClick={(e) => {
              console.log(e.target.textContent);
              removeIngredient(e.target.textContent);
            }}
          >
            {el}
          </li>
        ))}
      </ul>
      <div className="center-buttons-middle">
        <a className="btn-search">
          <span className="wave"></span>
          <span
            className="text btn-search btn"
            id="button-text-color"
            onClick={() =>(ingredients.length<=0) ? notify() :history.push(`/recipes/${ingredients.join(",")}`)}
          >
            Get your delicious Recipes
          </span>
        </a>
      </div>
    </div>
  );
}

export default IngredientSelected;
