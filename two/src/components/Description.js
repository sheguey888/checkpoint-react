import React from 'react';
import { Card } from 'react-bootstrap';
import { product } from '../Product';

export default function Description() {
  return <Card.Text>{product.description}</Card.Text>;
}
