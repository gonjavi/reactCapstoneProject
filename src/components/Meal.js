import React from 'react';
import PropTypes from 'prop-types';

const Meal = props => {
  const {
    title,
    description,
    picture,
  } = props;
  return (
    <div className="text-center">
      <h3 className="meal-title text-center">{title}</h3>
      <img src={picture} alt={picture} className="img img-fluid" />
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
