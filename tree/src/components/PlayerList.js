import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import players from '../players';
import Player from './Player';

const PlayersList = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Football Players</h1>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col xs={12} sm={6} lg={3} key={index} className="d-flex justify-content-center">
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;