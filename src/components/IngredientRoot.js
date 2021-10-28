import React from "react";
import IngredientList from "./IngredientList";
import IngredientSelected from "./IngredientSelected";
import { useState } from 'react';
import Navbar from "./Navbar";



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


function IngredientRoot() {
    //its gonna  change when we have the search, search its going get the ingredients from the api and call setIngredientList
    const [ingredientList, setIngredientList] = useState(allFood);
    //the ones are gonna be displayed after the list
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    function selectIngredient(name) {
        setSelectedIngredients(prevState =>
            prevState.indexOf(name) === -1 ? prevState.concat([name]) : prevState
        );
    }

    function removeIngredient(name) {
        console.log(name);
        setSelectedIngredients(prevState => 
           prevState.filter(el => el !== name))
    };

    return (
        <div>
            <Navbar />
            <IngredientList ingredients={ingredientList} selectedIngredients={selectedIngredients} selectIngredient={selectIngredient} />
            <IngredientSelected ingredients={selectedIngredients}removeIngredient={removeIngredient}/>
        </div>

    )
}

export default IngredientRoot;