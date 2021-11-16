import React from "react";
import { useState } from "react";
import "../Home/homePage.css";

function IngredientSearch({ searchIngredients }) {
  const [userInput, changeUserInput] = useState("");

  return (
    <div className="search-div">
      <img
        src="https://trello.com/1/cards/617a98dfc2dddb4c0a5d8a02/attachments/618d3ad4f50ad68463d3b5b7/download/newtestlogo.png"
        width="50%"
        height="50%"
        alt="so...what's in your fridge ?"
      />
      <input
        placeholder="Please type your ingredients"
        className="search-input"
        type="text"
        onChange={(e) => changeUserInput(e.target.value)}
      />

      <div className="center-buttons-middle">
        <a className="btn-search" href="#">
          <span className="wave"></span>
          <span
            className="text btn-search"
            id="button-text-color"
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
