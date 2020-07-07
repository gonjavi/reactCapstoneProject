import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import photo from './picture.png';
import Meal from '../components/Meal';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders meal component', () => {
  act(() => {
    render(<Meal title="meat" description="good" picture={photo} />, container);
  });
  expect(container.textContent).toBe('meatgood');
});

it('renders meal component', () => {
  act(() => {
    render(<Meal title="" description="" picture="" />, container);
  });
  expect(container.textContent).toBe('');
});
