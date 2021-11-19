import React from "react";
import { useState } from "react";
import "../Home/homePage.css";

function IngredientSearch({ searchIngredients }) {
  const [userInput, changeUserInput] = useState("");

  return (
    <div className="search-div">
      <img
        src="https://trello.com/1/cards/61969b6238caf307d4f81dad/attachments/61977224e8b35b6a6b128caa/download/finallogobig1newsize.pngg"
        width="50%"
        height="50%"
        alt="so...what's in your fridge ?"
        id="desktop-img"
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
