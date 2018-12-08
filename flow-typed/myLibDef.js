declare type Message = {
  userId: number,
  username: string,
  text: string,
  timestamp: number
}

declare type BrushColor = {
  color: string,
  id: number
}

declare type BrushSize = {
  size: number,
  id: number
}

declare type AppState = {
  socketId: ?string
}

declare type UserState = {
  id: ?number,
  username: ?string,
  isPainter: boolean
}

declare type TableState = {
  id: ?number,
  word: ?string,
  messages: Array<Message>
}

declare type GameState = {
  isActive: boolean
}

declare type ReducerState = {
  app: AppState,
  game: GameState,
  user: UserState,
  table: TableState
}

declare type UserMessageToSocket = {
  text: string,
  userId: number,
  tableId: number
}

declare type DrawType = 'start' | 'draw' | 'end';

declare type DrawImageData = {
  tableId: number,
  userId: number,
  x: number,
  y: number,
  type: DrawType,
  size: number,
  color: string
}