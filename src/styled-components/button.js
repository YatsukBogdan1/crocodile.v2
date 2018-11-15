// @flow

import React, {Component} from 'react';
import styled from 'styled-components';

const Span = styled.span`
  user-select: none;
`

export const StyledButton = styled.div`
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover Span{
    color: #777;
  }

  &:hover {
    cursor: pointer;
  }
`

type Props = {
  onClick: Function,
  label: string
}

export default class Button extends Component<Props> {
  render() {
    return (
      <StyledButton onClick={this.props.onClick}>
        <Span>
          {this.props.label}
        </Span>
      </StyledButton>
    )
  }
}