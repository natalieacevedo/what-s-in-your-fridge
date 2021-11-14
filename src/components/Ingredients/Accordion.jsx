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

function AccordionFunctionality({selectIngredient, removeIngredient}) {

  const [isSelected, setIsSelected] = useState(false);
    
  function ChangeBackgrounSelected() {
    setIsSelected(!isSelected);
    
  };

  function acordionItems(arr) {
   
    return arr.map((el) => {
      
      const onClick = (e) => {
       
        ChangeBackgrounSelected();
        e.preventDefault();

        if (isSelected) {
          e.target.style.backgroundColor = "red";
          selectIngredient(e.target.textContent);
        } else {
          e.target.style.backgroundColor = '';
          removeIngredient(e.target.textContent);
        }
        

      };

      return (
        <ul className={styles.wrapper}>
          <li className={styles.ingredientItem}
          onClick={onClick}>{el}</li>
        </ul>
      )
     
    })
    
  };

  return (
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
)

};

export default AccordionFunctionality;