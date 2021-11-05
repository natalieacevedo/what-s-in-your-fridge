import React from "react";
import { useState } from "react";

function IngredientSearch({ searchIngredients }) {
  const [userInput, changeUserInput] = useState("");

  return (
    <div className="searchDiv">
      <h1>so?....whats in your fridge?</h1>
      <input
        className="searchInput"
        type="text"
        onChange={(e) => changeUserInput(e.target.value)}
      />

      <div class="middle">
        <a class="btn" href="#">
          <span class="wave"></span>
          <span class="text">
            <button class="btn" onClick={() => searchIngredients(userInput)}>
              Search Ingredients
            </button>
          </span>
        </a>
      </div>
    </div>
  );
}
    
export default IngredientSearch;
