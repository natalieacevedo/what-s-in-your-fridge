import React, { useState } from "react";


function IngredientSelected({ ingredients,removeIngredient}) {
    
    console.log(ingredients);



    return (
        <div>
            {/* {ingredients.map(el => <span>{`${el} `}</span>)} */}
            <h3>Selected ingredients:</h3>
            <ul>
            {
                    ingredients.map(el => <li onClick={(e) => {
                        console.log(e.target.textContent)
                        removeIngredient(e.target.textContent)
                    }}>{el}</li>)
            }
            </ul>
        </div>
    )
    
};







export default IngredientSelected;