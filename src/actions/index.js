export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
const CHANGE_FILTER = 'CHANGE_FILTER';

function fetchProductsPending() {
  return {
    type: FETCH_PRODUCTS_PENDING,
  };
}

function fetchProductsSuccess(categories) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    categories,
  };
}

function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error,
  };
}

function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchProductsSuccess(res.categories));
        return res.categories;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

const changeFilter = category => ({
  type: CHANGE_FILTER,
  category,
});

export { fetchProducts, changeFilter };
