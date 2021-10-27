import React from "react";

function IngredientSelected({ingredients}) {

    console.log(ingredients);


    return (
        <div>
            {ingredients.map(el => <span>{`${el} `}</span>)

            }
        </div>
    )
    
};







export default IngredientSelected;