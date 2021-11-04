/* eslint-disable no-unused-expressions */
import React from "react";

function IngredientsList({
  ingredients,
  selectedIngredients,
  selectIngredient,
}) {
  const items = ingredients.map((el) => {
    let selected = selectedIngredients.indexOf(el.name) !== -1;
    const onClick = () => selectIngredient(el.name);
    return (
      <IngredientListItem
        name={el.name}
        selected={selected}
        onClick={onClick}
      />
    );
  });
  console.log(selectedIngredients);
  return (
    <div>
      <h1>Choose Ingredients Please</h1>
      <ul>{items}</ul>
    </div>
  );
}

function IngredientListItem({ name, selected, onClick }) {
  return (
    <div id="container">
      <ul>
        <li key={name} onClick={onClick}>
          <label>{name}</label>
          <input id="circle-input" type="checkbox" checked={selected} />
          <label for="circle-input" id="circle-cont">
            <div id="circle"></div>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default IngredientsList;
