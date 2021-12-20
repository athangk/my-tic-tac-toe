import React from "react"
import { render, screen } from "@testing-library/react"
import { Player } from "../feature/ticTacToe/player/Player"

test("renders learn react link", () => {
  render(<Player user={"X"} winner={"X"} />)
  const linkElement = screen.getByText(/Winner/i)
  expect(linkElement).toBeInTheDocument()
})
