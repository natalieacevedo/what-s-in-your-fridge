import React, {createContext, useState} from 'react'


const FavoriteContext = createContext({});

export default FavoriteContext;

export const FavoriteContextProvider = ({ children }) => {
  const key = "9a80ca7559ae40028969f263ebab42a0";

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("objRecipe")) || {}
  );

  //this function shows if the recipe id is a key of the state, I initiallized the state as an object

  const isFavorite = (recipeId) => favorites.hasOwnProperty(recipeId);

  function addFavorite(recipeId, recipe) {
    setFavorites((prev) => {
      let newState = { ...prev };
      newState[recipeId] = recipe;
      localStorage.setItem("objRecipe", JSON.stringify(newState));
      return newState;
    });
  }

  function removeFavorite(recipeId) {
    setFavorites((prev) => {
      let newState = { ...prev };
      delete newState[recipeId];
      localStorage.setItem("objRecipe", JSON.stringify(newState));
      return newState;
    });
  }

  return (
    <FavoriteContext.Provider
      value={{ favorites, isFavorite, addFavorite, removeFavorite, key }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}