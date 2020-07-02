import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MealList from '../containers/MealList';
import MealShow from '../containers/MealShow';
import { fetchProducts } from '../actions/index';
import { getProductsError, getProducts, getProductsPending } from '../reducers/food';

const bgColors = {
  default: '#f40082',
  two: '#e4057a',
  three: '#e95388',
  five: '#9e5ae1',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: '#f40082',
    };
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
    this.interval = setInterval(() => {
      const randomColor = bgColors[
        Object.keys(bgColors)[
          Math.floor(Math.random()
          * Object.keys(bgColors).length)
        ]
      ];
      this.setState(() => ({ bgColor: randomColor }));
    }, 10000);
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
    const { bgColor } = this.state;
    return (
      <Container
        className="wrapper"
        style={{
          height: '100%',
          backgroundColor: bgColor,
        }}
      >
        {error && <span className="error">{error}</span>}
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={() => <MealList Meals={categories} />} />
              <Route path="/meal/:id" component={MealShow} />
            </Switch>
          </div>
        </BrowserRouter>
      </Container>
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
