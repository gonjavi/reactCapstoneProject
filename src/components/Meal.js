import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Meal = props => {
  const {
    title,
    description,
    picture,
  } = props;
  return (
    <Row>
      <Col xs={6}>
        <h3 className="meal-title">{title}</h3>
        <img src={picture} alt={picture} className="img" />
        <p>{description}</p>
      </Col>
    </Row>
  );
};
Meal.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Meal;
