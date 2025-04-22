import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  Card,
  Row,
  Col
} from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">Hello</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="text-center">Hello</h1>
        </Container>

        <Container className="mt-5">
          <Row className="g-4">
            {[1, 2, 3].map((idx) => (
              <Col key={idx} md={4}>
                <Card>
                  <Card.Img
                    height={100}
                    width={100}
                    variant="top"
                    src={"https://celebritate.com/wp-content/uploads/Biggest-Mistake-The-Naruto-Series-Ever-Made.jpg"}
                  />
                  <Card.Body>
                    <Card.Title>Card Title {idx}</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa porro iure accusantium suscipit modi dolorum nostrum sequi minus consequatur sint dolore, doloribus eum molestiae fugiat ipsa ea obcaecati odit voluptas!
                
                    </Card.Text>
                    <Card.Link href="#">Learn More</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
