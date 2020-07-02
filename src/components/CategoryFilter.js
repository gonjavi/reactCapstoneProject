import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const CategoryFilter = props => {
  const [category, setCategory] = useState('All');

  function handleChange(e) {
    const { target: { value, name } } = e;
    setCategory({
      [name]: value,
    });
    const { handleFilterChange } = props;
    handleFilterChange(value);
  }
  return (
    <div>
      <Form>
        <Form.Group className="categories" controlId="Form.ControlSelect1">
          <Form.Label className="categ-title">Categories</Form.Label>
          <Form.Control name="category" value={category} onChange={handleChange} as="select">
            <option value="All">All</option>
            <option value="Beef">Beef</option>
            <option value="Chicken">Chicken</option>
            <option value="Dessert">Dessert</option>
            <option value="Lamb">Lamb</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Pasta">Pasta</option>
            <option value="Pork">Pork</option>
            <option value="Seafood">Seafood</option>
            <option value="Side">Side</option>
            <option value="Starter">Starter</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Goat">Goat</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
