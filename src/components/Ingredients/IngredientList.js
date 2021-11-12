/* eslint-disable no-unused-expressions */
import React from "react";
import { Accordion } from "react-bootstrap";

import "../../checkbox.scss";
import "../Home/homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ingredient.module.css";

const vegetables = [
  "onions",
  "spinash",
  "cucumbers",
  "alfalfa",
  "celery",
  "carrots",
  "split beans",
  "soy beans",
  "cabbage",
  "eggplant",
  "kale",
  "baby carrots",
  "soy sprout",
  "boychok",
  "green onion",
  "onions",
  "spinash",
  "cucumbers",
  "alfalfa",
  "celery",
];

const meats = [
  "chicken",
  "goat",
  "meat",
  "fish",
  "shrimp",
  "turkey",
  "bacon",
  "ham",
  "hot dogs",
  "Prosciutto",
  "salami",
  "sausages",
  "chorizo",
  "duck",
  "chicken",
  "goat",
  "meat",
  "fish",
  "shrimp",
  "turkey",
];

const fruits = [
  "apples",
  "pears",
  "citrus",
  "oranges",
  "grapefruits",
  "mandarin",
  "limes",
  "lemon",
  "stone fruit",
  "nectarines",
  "apricots",
  "peaches",
  "plums",
  "bananas",
  "mangoes",
  "strawberries",
  "raspberries",
  "blueberries",
  "kiwifruit",
  "passionfruit",
];

const grains = [
  "teff",
  "wheat",
  "oats",
  "rice",
  "corn",
  "barley",
  "sorghum",
  "rye",
  "millet",
  "triticale",
  "amaranth",
  "buckwheat",
  "quinoa",
  "arroz",
  "corn",
];

const seafood = [
  "halibut",
  "mahi",
  "monkfish",
  "mullet",
  "parrotfish",
  "seabass",
  " perch",
  "salmon",
  "sardine",
  "sturgeon",
  "shark",
  "tilapia",
  "halibut",
  "mahi",
  "monkfish",
];

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

  function acordion(arr) {
    return arr.map((el) => {
      const onClick = (e) => {
        e.preventDefault();
        selectIngredient(e.target.textContent);
      };
      return (
        <ul className={styles.wrapper}>
          <li className={styles.ingredientItem} onClick={onClick}>
            {el}
          </li>
        </ul>
      );
    });
  }

  return (
    <div>
      <h1>Choose Ingredients Please</h1>
      <ul>{items}</ul>

      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordionText">
            Vegetables
          </Accordion.Header>
          <Accordion.Body className="Accordion-body">
            {acordion(vegetables)}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Meat</Accordion.Header>
          <Accordion.Body>{acordion(meats)}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Fruits</Accordion.Header>
          <Accordion.Body>{acordion(fruits)}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Grains</Accordion.Header>
          <Accordion.Body>{acordion(grains)}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>SeaFood</Accordion.Header>
          <Accordion.Body>{acordion(seafood)}</Accordion.Body>
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

          <span className="checkbox-checkmark-box">
            <span className="checkbox-checkmark"> </span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default IngredientsList;
