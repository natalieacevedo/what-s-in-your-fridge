import React from 'react';
import { useState} from 'react';

function IngredientSearch({searchIngredients}) {
    
    const [userInput, changeUserInput] = useState('');
   
    return (
        <div>
            <h1>so?....whats in your fridge?</h1>
            <input
                type="text"
                onChange={(e) => changeUserInput(e.target.value)}
            />
            <button onClick={() => searchIngredients(userInput)}>Search Ingredients</button>
            
        </div>
    )
}
    
export default IngredientSearch;