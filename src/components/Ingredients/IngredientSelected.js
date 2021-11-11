import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function IngredientSelected({ ingredients,removeIngredient}) {
    const history = useHistory();
    
    return (
        <div>
            <h3>Selected ingredients:</h3>
            <ul>
            {
                    ingredients.map(el => <li onClick={(e) => {
                        console.log(e.target.textContent)
                        removeIngredient(e.target.textContent)
                    }}>{el}</li>)
            }
            </ul>

            <button onClick={() => history.push(`/recipes/${ingredients.join(',')}`) } >Get your delicious Recipes</button>
        </div>
    )
    
};



export default IngredientSelected;