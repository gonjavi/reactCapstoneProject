import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MealList from '../containers/MealList';
import MealShow from '../containers/MealShow';
import { fetchProducts } from '../actions/index';
import { getProductsError, getProducts, getProductsPending } from '../reducers/food';

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
    if (!this.shouldComponentRender()) return <div>Loading</div>;
    return (
      <div className="wrapper">
        {error && <span className="error">{error}</span>}
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={() => <MealList Meals={categories} />} />
              <Route path="/meal/:id" component={MealShow} />
            </Switch>
          </div>
        </BrowserRouter>
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
