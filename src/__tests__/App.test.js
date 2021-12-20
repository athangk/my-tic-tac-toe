import { render, screen, fireEvent } from "@testing-library/react"
import App from "../App"
import styles from "../../src/feature/ticTacToe/board/Cell.module.scss"

test("Winner 1rst scenario", () => {
  const { container } = render(<App />)

  const turn1 = container.querySelectorAll(`.${styles.cell_inner}`)[0]
  const turn2 = container.querySelectorAll(`.${styles.cell_inner}`)[3]
  const turn3 = container.querySelectorAll(`.${styles.cell_inner}`)[2]
  const turn4 = container.querySelectorAll(`.${styles.cell_inner}`)[4]
  const turn5 = container.querySelectorAll(`.${styles.cell_inner}`)[8]
  const turn6 = container.querySelectorAll(`.${styles.cell_inner}`)[5]

  fireEvent.click(turn1)
  fireEvent.click(turn2)
  fireEvent.click(turn3)
  fireEvent.click(turn4)
  fireEvent.click(turn5)
  fireEvent.click(turn6)

  const linkElement = screen.getByText(/Winner/i)
  expect(linkElement).toBeInTheDocument()
})

test("Winner 2nd scenario", () => {
  const { container } = render(<App />)

  const turn1 = container.querySelectorAll(`.${styles.cell_inner}`)[3]
  const turn2 = container.querySelectorAll(`.${styles.cell_inner}`)[0]
  const turn3 = container.querySelectorAll(`.${styles.cell_inner}`)[4]
  const turn4 = container.querySelectorAll(`.${styles.cell_inner}`)[2]
  const turn5 = container.querySelectorAll(`.${styles.cell_inner}`)[5]
  const turn6 = container.querySelectorAll(`.${styles.cell_inner}`)[8]

  fireEvent.click(turn1)
  fireEvent.click(turn2)
  fireEvent.click(turn3)
  fireEvent.click(turn4)
  fireEvent.click(turn5)
  fireEvent.click(turn6)

  const linkElement = screen.getByText(/Winner/i)
  expect(linkElement).toBeInTheDocument()
})

test("Tie", () => {
  const { container } = render(<App />)

  const turn1 = container.querySelectorAll(`.${styles.cell_inner}`)[1]
  const turn2 = container.querySelectorAll(`.${styles.cell_inner}`)[0]
  const turn3 = container.querySelectorAll(`.${styles.cell_inner}`)[3]
  const turn4 = container.querySelectorAll(`.${styles.cell_inner}`)[2]
  const turn5 = container.querySelectorAll(`.${styles.cell_inner}`)[4]
  const turn6 = container.querySelectorAll(`.${styles.cell_inner}`)[5]
  const turn7 = container.querySelectorAll(`.${styles.cell_inner}`)[8]
  const turn8 = container.querySelectorAll(`.${styles.cell_inner}`)[7]
  const turn9 = container.querySelectorAll(`.${styles.cell_inner}`)[6]

  fireEvent.click(turn1)
  fireEvent.click(turn2)
  fireEvent.click(turn3)
  fireEvent.click(turn4)
  fireEvent.click(turn5)
  fireEvent.click(turn6)
  fireEvent.click(turn7)
  fireEvent.click(turn8)
  fireEvent.click(turn9)

  const linkElement = screen.getByText(/Tie/i)
  expect(linkElement).toBeInTheDocument()
})
