import React from 'react';
import { Card } from 'react-bootstrap';
import { product } from '../Product';

export default function Name() {
  return <Card.Title as="h2">{product.name}</Card.Title>;
}
