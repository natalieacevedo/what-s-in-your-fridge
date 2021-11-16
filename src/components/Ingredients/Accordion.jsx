import  {React, useState }from "react";
import { Accordion } from "react-bootstrap";
import styles from "./ingredient.module.css";
import "../../checkbox.scss";
import "../Home/homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

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
    "green onion"
    
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
    "duck"
   
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
    "flour",
    "sugar"
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

function AccordionFunctionality({selectIngredient, removeIngredient,selectedIngredients}) {

  console.log(selectedIngredients);
  
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

      //if (selectedIngredients.indexOf(el) === -1) { el.style.backgroundColor = '' };

     
      return (
        <ul className={styles.wrapper}>
          <li className={`${styles.ingredientItem} ${isSelected ? styles.selected : styles.notSelected}`}
            onClick={onClick}>
            {el}
          </li>
        </ul>
      )
     
    })
    
};
 
return (
  //< className={`post-wrapper ${this.state.loading ? 'post-wrapper--loading' : ''}`}>
    <div>
       <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordionText">
            Vegetables
          </Accordion.Header>
          <Accordion.Body className="Accordion-body">
            {acordionItems(vegetables)}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Meat</Accordion.Header>
          <Accordion.Body>{acordionItems(meats)}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Fruits</Accordion.Header>
          <Accordion.Body>{acordionItems(fruits)}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Grains</Accordion.Header>
          <Accordion.Body>{acordionItems(grains)}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>SeaFood</Accordion.Header>
          <Accordion.Body>{acordionItems(seafood)}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  
);

}

export default AccordionFunctionality;