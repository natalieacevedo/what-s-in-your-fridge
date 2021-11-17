import {React ,useEffect, useState, useContext}  from 'react'
import { Modal, Button, Image, Container, Stack } from 'react-bootstrap'
import smiley from '../../images/facefood.png';
import axios from 'axios';
import FavoriteContext from "../Context/FavoriteContext";




function RecipePop({recipeId}) {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState([]);
  const [allInfo, setAllInfo] = useState([]);

  const { isFavorite, changeIsFavorite, favoriteContent, setFavoriteContent } = useContext(FavoriteContext);

  //favorite content es lo que necesito en el favorite component///

  // changeIsFavorite(true);
  console.log(isFavorite);

    console.log(recipeId);
  
 function recipeDetails(id) {
      axios
        .get(`http://localhost:5000/api/recipe/${id}`)
        .then((response) => {
         // console.log(response.data);
          let detailsWithNoTags = response.data.summary.replace(/<\/?[^>]+(>|$)/g, "");
          let indexOfInformationWeDontWant = detailsWithNoTags.indexOf( 'It is brought to you');
          let finalDetailsString = detailsWithNoTags.slice(0, indexOfInformationWeDontWant);
          
          setDetails(finalDetailsString);
          setAllInfo(response.data);
        })
  };

  function SmileyClick(e) {
    e.target.style.backgroundColor = 'yellow'
    changeIsFavorite(!isFavorite);
    if (isFavorite) {
      setFavoriteContent(allInfo)
   
    } else {
      setFavoriteContent('');
    }
  }

  console.log(favoriteContent);

  useEffect(() => recipeDetails(recipeId), [recipeId]);
 
    return (
      <>
        <Button variant="danger" onClick={() => setShow(true)}>
          Recipe
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title >
              {allInfo.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Image src={allInfo.image} fluid />
            <p>{details} </p>
            <p> {allInfo.serving}</p>
            <p><a href={allInfo.sourceUrl}>Let's make it!</a></p>
           
          </Modal.Body>
          <Container >

          <img src={smiley} alt="carita" onClick={SmileyClick}></img>
         
           <Stack direction="horizontal" gap={5} className="justify-content-center">
          <Button onClick={()=> window.open("https://www.auchan.pt/", "_blank")}>Auchan</Button>
          <Button  variant="danger" onClick={()=> window.open("https://www.continente.pt/", "_blank")}>Continente</Button>
          <Button  variant="success" onClick={()=> window.open("https://www.pingodoce.pt/", "_blank")}>Pingo Doce</Button>
            </Stack>
           
          </Container>
        </Modal>
      </>
    );
  }
  
  export default RecipePop