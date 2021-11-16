import {React ,useEffect, useState}  from 'react'
import { Modal, Button, Image, Container, Stack } from 'react-bootstrap'
import axios from 'axios';

function RecipePop({recipeId}) {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState([]);

  console.log(recipeId);
  
 function recipeDetails(id) {
      axios
        .get(`http://localhost:5000/api/recipe/${id}`)
        .then((response) => {
         // console.log(response.data);
          setDetails(response.data)
  
        })
  };
  
  useEffect(() => recipeDetails(recipeId), [recipeId]);

  //recipeDetails(recipeId);
 console.log(details);

  
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
              {details.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Image src={details.image} fluid />
            <p>
              {details.summary}
              {details.serving}
              {details.sourceUrl}
            </p>
          </Modal.Body>
          <Container >
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