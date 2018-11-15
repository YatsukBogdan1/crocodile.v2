import { START_GAME } from "../actions/game";

const initialState: GameState = {
  isActive: false
}

export default (state: GameState = initialState, action: Object): GameState => {
  switch(action.type) {
    case START_GAME:
      return {
        ...state,
        isActive: true
      }
    default:
      return state;
  }
}