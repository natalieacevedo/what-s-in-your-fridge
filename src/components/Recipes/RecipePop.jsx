import {React , useState}  from 'react'
import { Modal, Button, Image, Container, Stack } from 'react-bootstrap'


function RecipePop() {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Recipe
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Recipe
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-ramen-korea-justicon-flat-justicon.png" />
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
              commodi aspernatur enim, consectetur. Cumque deleniti temporibus
              ipsam atque a dolores quisquam quisquam adipisci possimus
              laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
              accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
              reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
              deleniti rem!
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