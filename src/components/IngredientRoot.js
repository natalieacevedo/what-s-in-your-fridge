import React from "react";
import IngredientList from "./IngredientList";
import IngredientSelected from "./IngredientSelected";
import { useState } from 'react';



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
    { name: 'flour' },
    { name: 'cucumbers' },
    { name: 'rice' },
    { name: 'curry' },
    { name: 'cherries' },
    { name: 'pork' },
    { name: 'bread' },
    { name: 'eggs' },
    { name: 'onions' },
    { name: 'potatoes' },
    { name: 'beans aerica' },
    { name: 'peanuts' }
];


function IngredientRoot(props) {
    //its gonna  change when we have the search, search its going get the ingredients from the api and call setIngredientList
    const [ingredientList, setIngredientList] = useState(allFood);
    //the ones are gonna be displayed after the list
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    function selectIngredient(name) {
        setSelectedIngredients(prevState => prevState.concat([name]));
    }

    return (
        <div>
            <IngredientList ingredients={ingredientList} selectedIngredients={selectedIngredients} selectIngredient={selectIngredient} />
            <IngredientSelected ingredients={selectedIngredients}/>
        </div>

    )
}

export default IngredientRoot;