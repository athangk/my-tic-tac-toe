
import { render, screen, fireEvent } from '@testing-library/react';
import {BoardCell} from '../components/board/BoardCell'



test('cell value O player', () => {
	const handleClick = jest.fn()

  const { container } = render(<BoardCell handleClick={handleClick} cellValue={'O'} num={1}/>)
  const clicker=container.querySelectorAll('.cell__inner')[0];



  fireEvent.click(clicker)

  expect(handleClick).toHaveBeenCalledTimes(1)

});

test('cell value X player', () => {
	const handleClick = jest.fn()

  const { container } = render(<BoardCell handleClick={handleClick} cellValue={'X'} num={1}/>)
  const clicker=container.getElementsByClassName('cell__inner')[0];



  fireEvent.click(clicker)

  expect(handleClick).toHaveBeenCalledTimes(1)

});
