import React from "react"

import "./App.css"
import { TicTacToe } from "./board/TicTacToe"

function App() {
  return (
    <main className="App">
      <section className="app-section">
        <TicTacToe />
      </section>
    </main>
  )
}

export default App
