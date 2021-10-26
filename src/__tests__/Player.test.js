import React from 'react';
import { render, screen } from '@testing-library/react';
import {Player} from '../components/Player'

test('renders learn react link', () => {
  render(<Player user={'X'} winner={'X'}/>);
  const linkElement = screen.getByText(/Winner: X/i);
  expect(linkElement).toBeInTheDocument();

  screen.debug()
});


