import React from "react";
import { useState } from "react";
import "../Home/homePage.css";

function IngredientSearch({ searchIngredients }) {
  const [userInput, changeUserInput] = useState("");

  return (
    <div className="searchDiv">
      <h1>so?....whats in your fridge?</h1>
      <input
        placeholder="please type your ingredients"
        className="searchInput"
        type="text"
        onChange={(e) => changeUserInput(e.target.value)}
      />

      <div class="centerButtonsMiddle">
        <a class="btn-Search" href="#">
          <span className="wave"></span>
          <span
            className="text btn-Search"
            id="buttonTextColor"
            onClick={() => searchIngredients(userInput)}
          >
            Search Ingredients
          </span>
        </a>
      </div>
    </div>
  );
}

export default IngredientSearch;
