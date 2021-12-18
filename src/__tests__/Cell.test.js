import { render, screen, fireEvent } from "@testing-library/react"
import { Cell } from "../feature/TicTacToe/board/Cell"
import styles from "../../src/feature/TicTacToe/board/Cell.module.scss"

test("cell value O player", () => {
  const handleClick = jest.fn()

  const { container } = render(<Cell handleClick={handleClick} cellValue={"O"} num={1} />)
  const clicker = container.querySelectorAll(`.${styles.cell_inner}`)[0]

  fireEvent.click(clicker)

  expect(handleClick).toHaveBeenCalledTimes(1)
})

test("cell value X player", () => {
  const handleClick = jest.fn()

  const { container } = render(<Cell handleClick={handleClick} cellValue={"X"} num={1} />)
  const clicker = container.querySelectorAll(`.${styles.cell_inner}`)[0]

  fireEvent.click(clicker)

  expect(handleClick).toHaveBeenCalledTimes(1)
})
