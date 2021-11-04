import React from "react";
import axios from 'axios';
import IngredientList from "./IngredientList";
import IngredientSearch from "./IngredientSearch";
import IngredientSelected from "./IngredientSelected";
import { useState } from 'react';
import Navbar1 from "../Navbar/Navbar";

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
        setSelectedIngredients(prevState => 
           prevState.filter(el => el !== name))
    };

    function searchIngredients(foodItem) {
        axios
            .get(`https://api.spoonacular.com/food/ingredients/search?apiKey=361ef8a3714d4e02a1d85d38a8bcca93&query=${foodItem}&number=10`)
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                setIngredientList(data.results);
            });

    };
    return (
        <div>
            <Navbar1 />
             <IngredientSearch searchIngredients={searchIngredients}/>
            <IngredientList
                ingredients={ingredientList}
                selectedIngredients={selectedIngredients}
                selectIngredient={selectIngredient}
                removeIngredient={removeIngredient}
            />
            <IngredientSelected ingredients={selectedIngredients}removeIngredient={removeIngredient}/>
        </div>

    )
}

export default IngredientRoot;

