import React from 'react';
import PropTypes from 'prop-types';

const Meal = props => {
  const {
    title,
    description,
    picture,
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <img src={picture} alt={picture} className="img" />
      <p>{description}</p>
    </div>
  );
};
Meal.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Meal;
