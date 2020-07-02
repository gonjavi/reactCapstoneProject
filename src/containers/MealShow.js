import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Meal from '../components/Meal';
import { getProductsError, getProducts, getProductsPending } from '../reducers/food';

const MealShow = props => {
  const {
    categories,
    match,
  } = props;
  const { params } = match;
  const { id } = params;
  const mealFiltered = categories.categories.filter(cate => cate.idCategory === id);
  const showMeal = mealFiltered.map(
    b => (
      <Meal
        key={b.idCategory}
        Id={b.idCategory}
        title={b.strCategory}
        cat={b.strCategory}
        picture={b.strCategoryThumb}
        description={b.strCategoryDescription}
      />
    ),
  );
  return (
    <div>
      <h2>{mealFiltered.strCategory}</h2>
      <NavLink to="/">Back</NavLink>
      {showMeal}
      <p>{mealFiltered.strCategoryDescription}</p>
    </div>
  );
};

MealShow.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  error: getProductsError(state),
  categories: getProducts(state),
  pending: getProductsPending(state),
  id: PropTypes.string.isRequired,
});

export default connect(mapStateToProps)(MealShow);
