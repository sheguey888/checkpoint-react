import './App.css';
import { Button, Card, Container } from 'react-bootstrap';
import Image from './components/Image';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';

function App() {
  const firstName = 'Cheikh';
  return (
    <Container className="py-5">
      <Card className="mx-auto shadow-lg product-card">
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        {firstName
          ? (
            <>
              <h3>Hello, {firstName}!</h3>
              <img
                src="https://vignette.wikia.nocookie.net/fanon/images/7/7c/SasukeGenin01.png/revision/latest?cb=20160619014057"
                alt="Waving hand"
                className="greeting-img mt-2"
              />
            </>
          )
          : <h3>Hello, there!</h3>
        }
      </div>
    </Container>
  );
}


export default App;
