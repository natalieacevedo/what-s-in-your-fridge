import  React from "react";
import { Accordion } from "react-bootstrap";
import styles from "./ingredient.module.css";
import "../../checkbox.scss";
import "../Home/homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const vegetables = [
  "onions",
  "spinach",
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
  "saitan",
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
  "mamon",
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
  "flour",
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

function AccordionFunctionality({
  selectIngredient,
  removeIngredient,
  selectedIngredients,
}) {

  function acordionItems(arr) {
    return arr.map((el) => {
      let isSelected = selectedIngredients.indexOf(el) !== -1;

      const onClick = (e) => {
        e.preventDefault();

        if (isSelected) {
          removeIngredient(e.target.textContent);
        } else {
          selectIngredient(e.target.textContent);
        }
      };

      return (
        <ul className={styles.wrapper}>
          <li
            className={`${styles.ingredientItem} ${
              isSelected ? styles.selected : styles.notSelected
            }`}
            onClick={onClick}
          >
            {el}
          </li>
        </ul>
      );
    });
  }

  return (
    <div>
      <Accordion flush>
        <Accordion.Item
          eventKey="0"
          className="accordion-item"
          style={{ backgroundColor: "aliceblue" }}
        >
          <Accordion.Header>Vegetables</Accordion.Header>
          <Accordion.Body
            className="Accordion-body"
            style={{ backgroundColor: "#ddefff" }}
          >
            {acordionItems(vegetables)}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{ backgroundColor: "aliceblue" }}>
          <Accordion.Header>Meat</Accordion.Header>
          <Accordion.Body style={{ backgroundColor: "#ddefff" }}>{acordionItems(meats)}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" style={{ backgroundColor: "aliceblue" }}>
          <Accordion.Header>Fruits</Accordion.Header>
          <Accordion.Body style={{ backgroundColor: "#ddefff" }} >{acordionItems(fruits)}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" style={{ backgroundColor: "aliceblue" }}>
          <Accordion.Header>Grains</Accordion.Header>
          <Accordion.Body style={{ backgroundColor: "#ddefff" }} >{acordionItems(grains)}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" style={{ backgroundColor: "aliceblue" }}>
          <Accordion.Header>SeaFood</Accordion.Header>
          <Accordion.Body style={{ backgroundColor: "#ddefff" }} >{acordionItems(seafood)}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionFunctionality;
