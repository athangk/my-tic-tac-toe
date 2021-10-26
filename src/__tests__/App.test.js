import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import {Board} from '../components/board/Board';
import { BoardCell } from '../components/board/BoardCell';
import { Player } from '../components/Player';

test('Winner is O', () => {


  const { container } = render(<App/>)

  const turn1=container.getElementsByClassName('cell__inner')[0];
  const turn2=container.getElementsByClassName('cell__inner')[3];
  const turn3=container.getElementsByClassName('cell__inner')[2];
  const turn4=container.getElementsByClassName('cell__inner')[4];
  const turn5=container.getElementsByClassName('cell__inner')[8];
  const turn6=container.getElementsByClassName('cell__inner')[5];
 
  fireEvent.click(turn1)
  fireEvent.click(turn2)
  fireEvent.click(turn3)
  fireEvent.click(turn4)
  fireEvent.click(turn5)
  fireEvent.click(turn6)

  const linkElement = screen.getByText(/Winner: O/i);
  expect(linkElement).toBeInTheDocument();
  screen.debug();


});

test('Winner is X', () => {


  const { container } = render(<App/>)

  const turn1=container.getElementsByClassName('cell__inner')[3];
  const turn2=container.getElementsByClassName('cell__inner')[0];
  const turn3=container.getElementsByClassName('cell__inner')[4];
  const turn4=container.getElementsByClassName('cell__inner')[2];
  const turn5=container.getElementsByClassName('cell__inner')[5];
  const turn6=container.getElementsByClassName('cell__inner')[8];
 
  fireEvent.click(turn1)
  fireEvent.click(turn2)
  fireEvent.click(turn3)
  fireEvent.click(turn4)
  fireEvent.click(turn5)
  fireEvent.click(turn6)

  const linkElement = screen.getByText(/Winner: X/i);
  expect(linkElement).toBeInTheDocument();
  screen.debug();


});
