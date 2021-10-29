import React from 'react';
import { useState} from 'react';

function IngredientSearch({filteringIngredients}) {
    
    const [userInput, changeUserInput] = useState('');
   
    return (
        <div>
            <h1>so?....whats in your fridge?</h1>
            <input
                type="text"
                onChange={(e) => changeUserInput(e.target.value)}
            />
            <button onClick={() => filteringIngredients(userInput)}>Get Recipes</button>
            
        </div>
    )
}

export default IngredientSearch;