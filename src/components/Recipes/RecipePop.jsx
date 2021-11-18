import { React, useEffect, useState, useContext } from "react";
import { Modal, Button, Image, Container, Stack } from "react-bootstrap";
import smiley from "../../images/facefood.png";
import smileyColor from "../../images/facefoodcolor.png";
import axios from "axios";
import "./Recipes-style.css";
import FavoriteContext from "../Context/FavoriteContext";
import continente from "../../images/continente.logo.png";
import auchan from "../../images/auchangelogo.png";
import pingodoce from "../../images/pingodocelogo.png";

function RecipePop({ recipe }) {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState([]);
  const [allInfo, setAllInfo] = useState([]);

  const { isFavorite, addFavorite, removeFavorite } =
    useContext(FavoriteContext);
  const currentlyFavorite = isFavorite(recipe.id);

  function recipeDetails(id) {
    axios.get(`http://localhost:5000/api/recipe/${id}`).then((response) => {
      let detailsWithNoTags = response.data.summary.replace(
        /<\/?[^>]+(>|$)/g,
        ""
      );
      let indexOfInformationWeDontWant = detailsWithNoTags.indexOf(
        "It is brought to you"
      );
      let finalDetailsString = detailsWithNoTags.slice(
        0,
        indexOfInformationWeDontWant
      );

      setDetails(finalDetailsString);
      setAllInfo(response.data);
    });
  }

  useEffect(() => recipeDetails(recipe.id), [recipe.id]);

  const SmileyClick = () => {
    console.log(currentlyFavorite);
    if (currentlyFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id, recipe);
    }
  };

  return (
    <>
      <Button variant="danger" onClick={() => setShow(true)}>
        Recipe
      </Button>

      <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{allInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="center-image">
            <Image src={allInfo.image} fluid />
          </div>
          <p>{details} </p>
          <p> {allInfo.serving}</p>
          <p>
            <a href={allInfo.sourceUrl}>Let's make it!</a>
          </p>
        </Modal.Body>
        <Container>
          <img
            height="60px"
            width="60px"
            src={currentlyFavorite ? smileyColor : smiley}
            alt="carita"
            onClick={SmileyClick}
          ></img>

          <Stack
            direction="horizontal"
            gap={5}
            className="justify-content-center"
          >
            <Button
              variant="white"
              onClick={() => window.open("https://www.auchan.pt/", "_blank")}
            >
              <img src={auchan} alt="Auchan" width="40%" />
            </Button>
            <Button
              variant="white"
              onClick={() =>
                window.open("https://www.continente.pt/", "_blank")
              }
            >
              <img src={continente} alt="Continente" width="40%" />
            </Button>
            <Button
              variant="white"
              onClick={() => window.open("https://www.pingodoce.pt/", "_blank")}
            >
              <img src={pingodoce} alt="Pingo Doce" width="80%" />
            </Button>
          </Stack>
        </Container>
      </Modal>
    </>
  );
}

export default RecipePop;
