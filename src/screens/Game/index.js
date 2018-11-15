import React, {Component} from 'react';
import { Container } from './styled-components';
import Canvas from './components/canvas';
import Chat from './components/chat';
import { connect } from 'react-redux';
import API from '../../api/index';
import { bindActionCreators } from 'redux';
import { setMessages } from '../../actions/table';

type Props = {
  actions: {
    setMessages: typeof setMessages,
  },
  tableId: ?number,
  username: ?string,
  word: ?string,
  isGameActive: boolean
}

class Game extends Component<Props> {
  async componentDidMount() {
    if (this.props.tableId == null) return;
    
    const { data } = await API.getTableMessages(this.props.tableId);
    if (data.success) {
      this.props.actions.setMessages(data.payload.messages);
    }
  }

  render() {
    return (
      <Container>
        <Canvas />
        <Chat />
      </Container>
    )
  }
}

const mapStateToProps = (state: ReducerState) => ({
  tableId: state.table.id,
  word: state.table.word,
  username: state.user.username,
  isGameActive: state.game.isActive
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    setMessages
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);