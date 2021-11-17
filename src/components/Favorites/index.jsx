import { React, useState, useEffect, useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext";

function Favorite() {
    
    const { favoriteContent } = useContext(FavoriteContext);

    if (favoriteContent['title']) {
        
        console.log(favoriteContent['title']);
    }

    

    return (

        <>
            <h1>Hola favoritos</h1>
            {/* <img src="images/facefood.png" alt="smileyfood"></img> */}
            
        </>
    )



};

export default Favorite;