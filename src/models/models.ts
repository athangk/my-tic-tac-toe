type Nullable<T> = T | null

interface TicTacToeData extends Array<Nullable<string>> {
  [index: number]: Nullable<string>
}

interface MarkIndicatorData extends Array<Nullable<number>> {
  [index: number]: Nullable<number>
}

export type { TicTacToeData, MarkIndicatorData, Nullable }
