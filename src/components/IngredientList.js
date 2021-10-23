import React, { useState } from 'react';


function IngredientsList({ ingredients }) {
   
    const [checked, setChecked] = useState(false);

    console.log(ingredients);

    return (
        <div>
            <h1>Choose Ingredients Please</h1>
            <ul>
                {ingredients.map(el => <li>{el.name}<input type="checkbox" defaultChecked={checked}onChange={() => setChecked(!checked)}/></li>)}

            </ul>
        </div>
        



)


};

export default IngredientsList;