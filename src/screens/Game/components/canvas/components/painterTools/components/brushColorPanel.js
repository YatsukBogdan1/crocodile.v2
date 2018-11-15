// @flow

import React, {Component} from 'react';
import styled from 'styled-components';
import BrushColorButton from './brushColorButton';

const Container = styled.div`
  display: flex;
`

type Props = {
  colors: Array<BrushColor>,
  onButtonClick: Function,
  activeColorId: number 
}

export default class BrushColorPanel extends Component<Props> {
  render() {
    const {colors, onButtonClick, activeColorId} = this.props;

    return (
      <Container>
        {colors.map((colorObject, i) => 
          <BrushColorButton
            key={String(colorObject.id)}
            style={i === colors.length - 1 ? {} : {marginRight: 20}}
            color={colorObject.color}
            onClick={() => onButtonClick(colorObject.id)}
            active={activeColorId === colorObject.id}
          />
        )}
      </Container>
    )
  }
}