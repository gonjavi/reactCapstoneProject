import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Meal from '../components/Meal';
import { changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

class MealList extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(category) {
    const { changeFilter } = this.props;
    changeFilter(category);
  }

  render() {
    const { Meals, filter } = this.props;
    let MealList;
    if (filter === 'All') {
      MealList = Meals.categories.map(
        b => (
          <Col key={b.idCategory} className="col-meal" xs={6}>
            <NavLink to={`/meal/${b.idCategory}`} key={b.idCategory}>
              <Meal
                key={b.idCategory}
                Id={b.idCategory}
                title={b.strCategory}
                cat={b.strCategory}
                picture={b.strCategoryThumb}
              />
            </NavLink>
          </Col>
        ),
      );
    } else {
      const mealsFiltered = Meals.categories.filter(meal => meal.strCategory === filter);
      MealList = mealsFiltered.map(
        b => (
          <Col key={b.idCategory} xs={12} md={12} lg={{ span: 8, offset: 2 }}>
            <NavLink to={`/meal/${b.idCategory}`} key={b.idCategory}>
              <Meal
                className="text-center"
                key={b.idCategory}
                Id={b.idCategory}
                title={b.strCategory}
                cat={b.strCategory}
                picture={b.strCategoryThumb}
              />
            </NavLink>
          </Col>
        ),
      );
    }
    return (
      <Container>
        <Row className="text-center">
          <Col xs={12}>
            <h1 className="title">Meals</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={5} lg={4}>
            <CategoryFilter handleFilterChange={this.handleFilterChange} />
          </Col>
        </Row>
        <Row>
          {MealList}
        </Row>
      </Container>
    );
  }
}

MealList.propTypes = {
  Meals: PropTypes.instanceOf(Array).isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
