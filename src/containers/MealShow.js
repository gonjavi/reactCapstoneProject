import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Meal from '../components/Meal';
import { getProductsError, getProducts, getProductsPending } from '../reducers/index';

const MealShow = props => {  
  const {
    categories,
    match,
  } = props;
  const { params } = match;
  const { id } = params;
  

  const mealFiltered = categories.filter(cate => cate.idCategory === id);
  console.log(mealFiltered);
  const showMeal = mealFiltered.map(
    b => (
      <Meal
        key={b.idCategory}
        Id={b.idCategory}
        title={b.strCategory}
        cat={b.strCategory}
        picture={b.strCategoryThumb}
        onClick="location.href='/meal/'+b.idCategory';"
      />
    ),
  );
  return (
    <div>
      <h2>{id}</h2>
      {showMeal}
    </div>
  );
};

MealShow.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchProducts: PropTypes.func.isRequired,
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
