export const SET_TABLE_DATA = 'SET_TABLE_DATA';
export const SET_MESSAGES = 'SET_MESSAGES';
export const APPEND_MESSAGE = 'APPEND_MESSAGE';

export const setTableData = (data: Object) => ({
  type: SET_TABLE_DATA,
  data
})

export const appendMessage = (message: Message) => ({
  type: APPEND_MESSAGE,
  message
})

export const setMessages = (messages: Array<Message>) => ({
  type: SET_MESSAGES,
  messages
})