import React, {createContext, useState} from 'react'


const FavoriteContext = createContext({});

export default FavoriteContext;

export const FavoriteContextProvider = ({ children }) => {

    const [favorites, setFavorites] = useState({});

    const isFavorite = (recipeId) => favorites.hasOwnProperty(recipeId);

    function addFavorite(recipeId, recipe) {
        setFavorites((prev) => {
            let newstate = { ...prev };
            newstate[recipeId] = recipe;
            return newstate;
        });
    }

    function removeFavorite(recipeId) {
        // FIXME: remove from prev immutably
        setFavorites((prev) => {
            let newstate = { ...prev };
            delete newstate[recipeId];
            return newstate;
        })
    }

    return (

        <FavoriteContext.Provider
            value={{ favorites, isFavorite, addFavorite, removeFavorite }}>
            {children}
        </FavoriteContext.Provider>
   
    );
}