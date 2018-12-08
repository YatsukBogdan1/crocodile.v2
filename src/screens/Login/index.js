// @flow

import React, {Component} from 'react';
import Button from "../../styled-components/button";
import { Container, InnerContainer, Input, TextError } from './styled-components';
import API from '../../api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUserData } from '../../actions/user';
import { setTableData } from '../../actions/table';

type Props = {
  actions: {
    setUserData: typeof setUserData,
    setTableData: typeof setTableData
  },
  socketId: ?string,
  onLoginSuccess: Function
}

type State = {
  username: string,
  error: ?Object
}

class Login extends Component<Props, State> {
  state = {
    username: '',
    error: null
  }

  onUsernameChange = (event) => {
    if (this.state.error) {
      this.setState({error: null});
    }
    this.setState({username: event.target.value})
  }

  onSubmitLogin = async () => {
    if (this.state.username.length < 2) {
      this.setState({ error: { message: 'Username must be longer then 2 symbols' }});
      return;
    }
    if (!this.props.socketId) return;

    const { data } = await API.login(this.state.username, this.props.socketId);
    if (data.success) {
      this.props.actions.setUserData({
        username: this.state.username,
        id: data.user.id
      });
      this.props.actions.setTableData({ id: data.user.tableId });
      this.props.onLoginSuccess();
    } else {
      this.setState({ error: { message: data.message }});
    }
  }

  render() {
    return (
      <Container>
        <InnerContainer>
          <Input
            value={this.state.username}
            onChange={this.onUsernameChange}
          />
          <Button onClick={this.onSubmitLogin} label="Login"/>
          {this.state.error && <TextError>{this.state.error.message}</TextError>}
        </InnerContainer>
      </Container>
    )
  }
}

const mapStateToProps = (state: ReducerState) => ({ socketId: state.app.socketId })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setUserData,
    setTableData
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);