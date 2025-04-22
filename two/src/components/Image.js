import React from 'react';
import { Card } from 'react-bootstrap';
import { product } from '../Product';

export default function Image() {
  return <Card.Img variant="top" src={product.image} alt={product.name} />;
}
