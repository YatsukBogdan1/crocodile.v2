// @flow

import { SET_TABLE_DATA, APPEND_MESSAGE, SET_MESSAGES } from "../actions/table";

const initialState: TableState = {
  id: null,
  word: null,
  messages: []
}

export default (state: TableState = initialState, action: Object): TableState => {
  switch(action.type) {
    case SET_TABLE_DATA:
      return {
        ...state,
        ...action.data
      }
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.messages
      }
    case APPEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message]
      }
    default:
      return state;
  }
}