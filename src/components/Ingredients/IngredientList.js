import React from 'react';
import AccordionFunctionality from './Accordion'


function IngredientsList({
  ingredients,
  selectedIngredients,
  selectIngredient,
  removeIngredient,
}) {

  
  const items = ingredients.map((el) => {
    let selected = selectedIngredients.indexOf(el.name) !== -1;
    const onClick = () => {
      if (selected) {
        return removeIngredient(el.name);
      } else {
        return selectIngredient(el.name);
      }
    };
    return (
      <IngredientListItem
        name={el.name}
        selected={selected}
        onClick={onClick}
      />
    );
  });

  return (
    <div>
      <h1>Choose Ingredients Please</h1>
      <ul>{items}</ul>
      <AccordionFunctionality selectIngredient={selectIngredient}/>
    </div>
  );
}

function IngredientListItem({ name, selected, onClick }) {
  return (
    <div id="container">
      <ul>
        <li key={name} onClick={onClick}>
          <label>{name}</label>
          <input
            className="checkbox-input"
            type="checkbox"
            checked={selected}
          />

          <span className="checkbox-checkmark-box">
            <span className="checkbox-checkmark"> </span>
          </span>
        </li>
      </ul>
    </div>
  );
}


export default IngredientsList;
