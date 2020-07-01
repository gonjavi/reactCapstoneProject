import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MealList from '../containers/MealList';
import fetchProducts from '../actions/index';
import { getProductsError, getProducts, getProductsPending } from '../reducers/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  shouldComponentRender() {
    if (this.pending === false) return false;
    return true;
  }

  render() {
    const { categories, error } = this.props;
    console.log(categories)
    if (!this.shouldComponentRender()) return <div>Loading</div>;
    return (
      <div className="wrapper">
        {error && <span className="error">{error}</span>}
        <h1>Meals</h1>
        <MealList Meals={categories} />
      </div>
    );
  }
}

App.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: getProductsError(state),
  categories: getProducts(state),
  pending: getProductsPending(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
