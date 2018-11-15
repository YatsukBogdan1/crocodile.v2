export const LOGOUT = 'LOGOUT';
export const SET_SOCKET_ID = 'SET_SOCKET_ID';

export const logout = () => ({
  type: LOGOUT
})

export const setSocketId = (socketId: string) => ({
  type: SET_SOCKET_ID,
  socketId
})