import React, {createContext, useState} from 'react'


const FavoriteContext = createContext({});

export default FavoriteContext;

export const FavoriteContextProvider = ({ children }) => {

    const [isFavorite, changeIsFavorite] = useState(false);
    const [favoriteContent, setFavoriteContent] = useState([]);
    


    return (

        <FavoriteContext.Provider
            value={{ isFavorite, changeIsFavorite, favoriteContent, setFavoriteContent }}>
      
            {children}
        </FavoriteContext.Provider>
   
    );
}