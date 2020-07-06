import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MealList from './MealList';
import MealShow from './MealShow';
import { fetchProducts } from '../actions/index';
import { getProductsError, getProducts } from '../reducers/food';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  render() {
    const { categories, error } = this.props;
    if (!this.shouldComponentRender()) return <div>Loading</div>;
    return (
      <div className="App">
        {error && <span className="error">{error}</span>}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <MealList Meals={categories} />} />
            <Route path="/meal/:id" component={MealShow} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
App.defaultProps = {
  error: '',
  pending: true,
};
App.propTypes = {
  categories: PropTypes.objectOf(PropTypes.any).isRequired,
  error: PropTypes.string,
  fetchProducts: PropTypes.func.isRequired,
  pending: PropTypes.bool,
};

const mapStateToProps = state => ({
  error: getProductsError(state),
  categories: getProducts(state),
  pending: state.pending,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
