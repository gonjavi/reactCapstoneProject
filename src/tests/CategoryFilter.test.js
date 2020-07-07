import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CategoryFilter from '../components/CategoryFilter';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders Category filter component', () => {
  act(() => {
    render(<CategoryFilter handleFilterChange={() => undefined} />, container);
  });
  expect(container.textContent).toBe('FiltermealAllBeefChickenDessertLambMiscellaneousPastaPorkSeafoodSideStarterVeganVegetarianBreakfastGoat');
});
