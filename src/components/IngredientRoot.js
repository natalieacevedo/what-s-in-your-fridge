import React from "react";
import IngredientsList from "./IngredientList";

const allFood = [
    { name: 'tomato' },
    { name: 'garlic' },
    { name: 'cucumber' },
    { name: 'strawberries' },
    { name: 'chicken breast' },
    { name: 'meat' },
    { name: 'egg' },
    { name: 'onion' },
    { name: 'potato' },
    { name: 'beans' },
    { name: 'oatmeal' },
    { name: 'orange' },
    { name: 'lentil' },
    { name: 'letucce' },
    { name: 'broccoli' },
    { name: 'chocolate' },
    { name: 'flour' }
];


function IngredientRoot(props) {
    
    console.log(props);




    return (
        <div>
            <IngredientsList ingredients={allFood}/>
        </div>

    )
}

export default IngredientRoot;