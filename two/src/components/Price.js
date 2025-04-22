import React from 'react';
import { Card } from 'react-bootstrap';
import { product } from '../Product';

export default function Price() {
  return <Card.Subtitle className="mb-2 text-muted">${product.price.toFixed(2)}</Card.Subtitle>;
}
