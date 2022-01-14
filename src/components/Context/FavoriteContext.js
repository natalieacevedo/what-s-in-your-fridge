import React, {createContext, useState} from 'react'


const FavoriteContext = createContext({});

export default FavoriteContext;

export const FavoriteContextProvider = ({ children }) => {
    const key = '9a80ca7559ae40028969f263ebab42a0';

    const [favorites, setFavorites] = useState({});
  

    //this function shows if the recipe id is a key of the state, we initiallized the state as an object
    const isFavorite = (recipeId) => favorites.hasOwnProperty(recipeId);



    function addFavorite(recipeId, recipe) {
        setFavorites((prev) => {
            let newstate = { ...prev };
            newstate[recipeId] = recipe;
            return newstate;
        });
    }

    function removeFavorite(recipeId) {
        setFavorites((prev) => {
            let newstate = { ...prev };
            delete newstate[recipeId];
            return newstate;
        })
    }

    return (

        <FavoriteContext.Provider
            value={{ favorites, isFavorite, addFavorite, removeFavorite,key }}>
            {children}
        </FavoriteContext.Provider>
   
    );
}