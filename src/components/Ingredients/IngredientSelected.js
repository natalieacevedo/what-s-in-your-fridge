import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./ingredient.module.css";

function IngredientSelected({ ingredients, removeIngredient }) {
  const history = useHistory();
  console.log(ingredients);

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
            className="text btn-search"
            id="button-text-color"
            onClick={() => history.push(`/recipes/${ingredients.join(",")}`)}
          >
            Get your delicious Recipes
          </span>
        </a>
      </div>
    </div>
  );
}

export default IngredientSelected;
