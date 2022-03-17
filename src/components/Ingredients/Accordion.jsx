import  React from "react";
import { Accordion } from "react-bootstrap";
import styles from "./ingredient.module.css";
import "../../checkbox.scss";
import "../Home/homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ingredientsData from "./ingredientsTableData";
import "./ingredient.module.css";

function AccordionFunctionality({
  selectIngredient,
  removeIngredient,
  selectedIngredients,
}) {
  function accordionContent() {
    return ingredientsData.map((el, ind) => {
      return (
        <Accordion.Item
          eventKey={ind}
          className="accordion-item"
          style={{ backgroundColor: "aliceblue" }}
        >
          <Accordion.Header>{el.title}</Accordion.Header>
          <Accordion.Body
            className="Accordion-body"
            style={{ backgroundColor: "#ddefff" }}
          >
            <ul className="parent_list">
              {el.arr.map((ingredient) => {
                let isSelected = selectedIngredients.indexOf(ingredient) !== -1;

                const onClick = (e) => {
                  e.preventDefault();
                  if (isSelected) {
                    removeIngredient(e.target.textContent);
                  } else {
                    selectIngredient(e.target.textContent);
                  }
                };

                return (
                  <li
                    className={`${styles.ingredientItem} ${
                      isSelected ? styles.selected : styles.notSelected
                    }`}
                    onClick={onClick}
                  >
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      );
    });
  }

  return (
    <div>
      <Accordion flush>{accordionContent()}</Accordion>
    </div>
  );
}

export default AccordionFunctionality;
