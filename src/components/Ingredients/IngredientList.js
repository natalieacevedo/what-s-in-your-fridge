/* eslint-disable no-unused-expressions */
import React from "react";
import { Accordion } from "react-bootstrap";


const vegetables = ['onions', 'spinash', 'cucumbers','alfalfa,celery','carrots','split beans','soy beans','cabbage'];
const meats = ['chicken', 'goat', 'meat','fish','shrimp', 'turkey'];


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
  //onClick={onClick}

  function acordion(arr) {
  
    return arr.map((el) => {
      const onClick = (e) => {
        e.preventDefault();
        selectIngredient(e.target.textContent)
      };
      return (
        <ul>
          <li onClick={onClick}>{el}</li>
        </ul>
      )
    })
    
  };

  return (
    <div>
      <h1>Choose Ingredients Please</h1>
     <ul>{items}</ul>

      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Vegetables</Accordion.Header>
          <Accordion.Body>
           {acordion(vegetables)}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Meat</Accordion.Header>
          <Accordion.Body>
           {acordion(meats)}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Fruits</Accordion.Header>
          <Accordion.Body>
          {acordion(vegetables)}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Grains</Accordion.Header>
          <Accordion.Body>
          {acordion(meats)}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>SeaFood</Accordion.Header>
          <Accordion.Body>
           {acordion(vegetables)}
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
