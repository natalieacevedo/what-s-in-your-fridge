


function IngredientsList({ ingredients }){


    console.log(ingredients);

    return (
        <div>
            <h1>Choose Ingredients Please</h1>
            <ul>
                {ingredients.map(el => <li>{el.name}</li>)}
            </ul>
        </div>
        



)


};

export default IngredientsList;