import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: '18rem',
    margin: '15px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s',
    borderRadius: '10px',
    overflow: 'hidden'
  };

  const imageStyle = {
    height: '250px',
    objectFit: 'cover'
  };

  const titleStyle = {
    color: '#2c3e50',
    fontWeight: 'bold'
  };

  const infoStyle = {
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #eaeaea'
  };

  return (
    <Card style={cardStyle} className="player-card">
      <Card.Img variant="top" src={imageUrl} style={imageStyle} />
      <Card.Body>
        <Card.Title style={titleStyle}>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
      </Card.Body>
      <div style={infoStyle}>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </div>
    </Card>
  );
};

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'No Team',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 25,
  imageUrl: 'https://via.placeholder.com/400x300?text=Player+Image'
};

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string
};

export default Player;