interface TicTacToeData extends Array<string | null> {
  [index: number]: string | null
}

interface MarkIndicatorData extends Array<number | null> {
  [index: number]: number | null
}

export type { TicTacToeData, MarkIndicatorData }
