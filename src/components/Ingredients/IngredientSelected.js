import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function IngredientSelected({ ingredients, removeIngredient }) {
  const history = useHistory();
  console.log(ingredients);

  return (
    <div>
      <h3>Selected ingredients:</h3>
      <ul>
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
      <div className="centerButtonsMiddle">
        <a className="btn-Search">
          <span className="wave"></span>
          <span
            className="text btn-Search"
            id="buttonTextColor"
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
