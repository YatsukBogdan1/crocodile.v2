// @flow

import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.div`
  height: ${ props => props.size }px;
  width: ${ props => props.size }px;
  border-radius: ${ props => props.size/2 }px;
  border: 1px solid black;
  background-color: white;
  opacity: ${ props => props.active ? 1 : 0.2 };

  &:hover {
    opacity: 1;
  }
`

type Props = {
  style?: Object,
  onClick: Function,
  active: boolean,
  size: number
}

export default class BrushSizeButton extends Component<Props> {
  render() {
    return (
      <Button
        style={this.props.style ? this.props.style : {}}
        onClick={this.props.onClick}
        active={this.props.active}
        size={this.props.size * 3}
      />
    )
  }
}