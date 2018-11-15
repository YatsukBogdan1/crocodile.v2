import { SET_SOCKET_ID } from "../actions/app";

const initialState: AppState = {
  socketId: null
}

export default (state: AppState = initialState, action: Object): AppState => {
  switch(action.type) {
    case SET_SOCKET_ID:
      return {
        ...state,
        socketId: action.socketId
      }
    default:
      return state;
  }
}