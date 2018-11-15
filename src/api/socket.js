import openSocket from 'socket.io-client';
import { setSocketId } from '../actions/app';
import { setUserData } from '../actions/user';
import { setTableData, appendMessage } from '../actions/table';
import { startGame } from '../actions/game';
import { store } from '../store';

export default class Socket {
  static init() {
    const socket = openSocket('http://localhost:3001');
    socket.on('gameStarted', data => {
      store.dispatch(setTableData({word: data.word}));
      store.dispatch(setUserData({isPainter: data.isPainter}));
      store.dispatch(startGame());
    })
    socket.on('message', data => {
      console.log(data);
      store.dispatch(appendMessage(data))
    });
    socket.on('connect', () => store.dispatch(setSocketId(socket.id)));
    this.socket = socket;
  }

  static sendMessage(message: UserMessageToSocket) {
    this.socket.emit('message', message);
  }
}