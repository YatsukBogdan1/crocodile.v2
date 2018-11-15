import { SET_USER_DATA } from "../actions/user";

const initialState: UserState = {
  id: null,
  userId: null,
  isPainter: false,
  username: null
}

export default (state: UserState = initialState, action: Object): UserState => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData
      }
    default:
      return state;
  }
}