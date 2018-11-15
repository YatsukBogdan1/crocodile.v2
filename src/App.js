import React, { Component } from 'react';
import AppWrapper from './styled-components/appWrapper';
import Login from './screens/Login';
import Game from './screens/Game';

type State = {
  currentScreen: 0 | 1
}

class App extends Component<{}, State> {
  state = {
    currentScreen: 0
    // currentScreen: 1
  }

  onLoginSuccess = () => {
    this.setState({ currentScreen: 1 })
  }

  renderCurrentScreen = () => {
    switch(this.state.currentScreen) {
      case 0: return <Login onLoginSuccess={this.onLoginSuccess}/>
      case 1: return <Game />
      default: return null;
    }
  }

  render() {
    return (
      <AppWrapper>
        {this.renderCurrentScreen()}
      </AppWrapper>
    );
  }
}

export default App;
