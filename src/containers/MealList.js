import React from 'react';
import PropTypes from 'prop-types';
import Meal from '../components/Meal';

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
    const { Meals } = this.props;
    console.log(Meals);
    let MealList;
    MealList = Meals.map(
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
    /* if (categories.filter === 'All') {
      MealList = categories.map(
        b => (
          <Meal
            key={b.id}
            Id={b.id}
            title={b.title}
            cat={b.category}
          />
        ),
      );
    } else {
      const mealsFiltered = categories.filter(book => book.category === categories.filter);
      MealList = mealsFiltered.map(
        b => (
          <Meal
            key={b.id}
            Id={b.id}
            title={b.title}
            cat={b.category}
            Click={() => this.handleRemove(b.id)}
          />
        ),
      );
    } */
   /*  const MealList = (
      <ul>
        {categories.map(cat => <li key={cat.idCategory}>{cat.strCategoryThumb}</li>)}
      </ul>
    ); */

    return (
      <div>
        {MealList}
      </div>
    );
  }
}

MealList.propTypes = {
  Meals: PropTypes.instanceOf(Array).isRequired,
  // changeFilter: PropTypes.func.isRequired,
};

export default MealList;
