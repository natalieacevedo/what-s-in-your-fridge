/* eslint-disable no-unused-expressions */
import React from "react";
import { Accordion } from "react-bootstrap";

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

      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Vegetables</Accordion.Header>
          <Accordion.Body>
            <ul>{items}</ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Meat</Accordion.Header>
          <Accordion.Body>
            <ul>{items}</ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Fruits</Accordion.Header>
          <Accordion.Body>
            <ul>{items}</ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Grains</Accordion.Header>
          <Accordion.Body>
            <ul>{items}</ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>SeaFood</Accordion.Header>
          <Accordion.Body>
            <ul>{items}</ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
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

          <span class="checkbox-checkmark-box">
            <span class="checkbox-checkmark"> </span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default IngredientsList;
