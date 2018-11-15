// @flow

import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid black;
  background-color: ${ props => props._color };
  opacity: ${ props => props.active ? 1 : 0.2 };

  &:hover {
    opacity: 1;
  }
`

type Props = {
  style?: Object,
  onClick: Function,
  active: boolean,
  color: string
}

export default class BrushColorButton extends Component<Props> {
  render() {
    return (
      <Button
        style={this.props.style ? this.props.style : {}}
        onClick={this.props.onClick}
        active={this.props.active}
        _color={this.props.color}
      />
    )
  }
}