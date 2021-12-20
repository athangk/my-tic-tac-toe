import styles from "./App.module.scss"
import TicTacToe from "./feature/ticTacToe/TicTacToe"

function App() {
  return (
    <main className={styles.app}>
      <section className={styles.appSection}>
        <TicTacToe />
      </section>
    </main>
  )
}

export default App
