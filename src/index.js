import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AppWithoutStore from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import API from './api';
import Socket from './api/socket';

API.init();
Socket.init();

class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <AppWithoutStore/>
      </Provider>  
    );
  }
}

// $FlowFixMe
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
