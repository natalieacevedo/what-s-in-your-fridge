import { React, useState, useEffect, useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext";

function Favorite() {

    const arrayWithAllFavorite = []
    
    const { favoriteContent } = useContext(FavoriteContext);

    if (favoriteContent['title']) {
        
    arrayWithAllFavorite.push([favoriteContent['title'], favoriteContent['image'], favoriteContent['sourceUrl']]);
    
    };

    console.log(arrayWithAllFavorite);

    
    return (

        <>
            <h1>Hola favoritos</h1>
            {/* <img src="images/facefood.png" alt="smileyfood"></img> */}
            
        </>
    )



};

export default Favorite;