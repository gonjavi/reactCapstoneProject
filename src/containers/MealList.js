import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
          <NavLink to={`/meal/${b.idCategory}`} key={b.idCategory}>
            <Meal
              key={b.idCategory}
              Id={b.idCategory}
              title={b.strCategory}
              cat={b.strCategory}
              picture={b.strCategoryThumb}
            />
          </NavLink>
        ),
      );
    } else {
      const mealsFiltered = Meals.categories.filter(meal => meal.strCategory === filter);
      MealList = mealsFiltered.map(
        b => (
          <NavLink to={`/meal/${b.idCategory}`} key={b.idCategory}>
            <Meal
              key={b.idCategory}
              Id={b.idCategory}
              title={b.strCategory}
              cat={b.strCategory}
              picture={b.strCategoryThumb}
            />
          </NavLink>
        ),
      );
    }
    return (
      <div>
        <CategoryFilter handleFilterChange={this.handleFilterChange} />
        {MealList}
      </div>
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
