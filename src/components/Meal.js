import React from 'react';
import PropTypes from 'prop-types';

const Meal = props => {
  const {
    Id,
    title,
    cat,
    picture,
  } = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
Meal.propTypes = {
  Id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Meal;
