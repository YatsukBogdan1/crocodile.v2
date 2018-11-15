// @flow

import React, {Component} from 'react';
import { Container } from './styled-components';
import Socket from '../../../../api/socket';
import {connect} from 'react-redux';
import Button from '../../../../styled-components/button';

type Props = {
  messages: Array<Message>,
  username: ?string,
  tableId: ?number,
  userId: ?number,
  isGameActive: boolean,
  isPainter: boolean
}

type State = {
  input: string
}

class Chat extends Component<Props, State> {
  state = {
    input: ''
  }

  onInputChange = event => this.setState({input: event.target.value})

  onInputSubmit = () => {
    const { userId, tableId, isPainter } = this.props;
    const { input } = this.state;

    if (input.length < 1 || userId == null || tableId == null || isPainter) return;
    Socket.sendMessage({
      userId,
      tableId,
      text: this.state.input
    });
    this.setState({input: ''});
  }

  render() {
    const { messages } = this.props;

    return (
      <Container>
        { messages.map(message => <p>{message.username}: {message.text}</p>) }
        <input
          value={this.state.input}
          onChange={this.onInputChange}
          onSubmit={this.onInputSubmit}
        />
        <Button
          onClick={this.onInputSubmit}
          label="Send"
        />
      </Container>
    )
  }
}

const mapStateToProps = (state: ReducerState): Props => ({
  isPainter: state.user.isPainter,
  messages: state.table.messages,
  username: state.user.username,
  tableId: state.table.id,
  userId: state.user.id,
  isGameActive: state.game.isActive
})

export default connect(mapStateToProps)(Chat);