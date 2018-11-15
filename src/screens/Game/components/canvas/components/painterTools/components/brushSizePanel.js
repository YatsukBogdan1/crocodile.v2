// @flow

import React, {Component} from 'react';
import styled from 'styled-components';
import BrushSizeButton from './brushSizeButton';

const Container = styled.div`
  align-items: center;
  display: flex;
`

type Props = {
  sizes: Array<BrushSize>,
  onButtonClick: Function,
  activeSizeId: number 
}

export default class BrushSizePanel extends Component<Props> {
  render() {
    const { sizes, onButtonClick, activeSizeId } = this.props;

    return (
      <Container>
        {sizes.map((sizeObject, i) => 
          <BrushSizeButton
            key={String(sizeObject.id)}
            style={ i === sizes.length - 1 ? {} : { marginRight: 20 } }
            size={ sizeObject.size }
            onClick={ () => onButtonClick(sizeObject.id) }
            active={ activeSizeId === sizeObject.id }
          />
        )}
      </Container>
    )
  }
}