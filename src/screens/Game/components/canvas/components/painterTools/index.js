// @flow

import React, {Component} from 'react';
import { Container } from './styled-components';
import BrushColorPanel from './components/brushColorPanel';
import BrushSizePanel from './components/brushSizePanel';

type Props = {
  activeColorId: number,
  colors: Array<Object>,
  onColorButtonClick: Function,

  activeSizeId: number,
  sizes: Array<Object>,
  onSizeButtonClick: Function
}

export default class PainterTools extends Component<Props> {
  render() {
    return (
      <Container>
        <BrushColorPanel
          activeColorId={this.props.activeColorId}
          colors={this.props.colors}
          onButtonClick={this.props.onColorButtonClick}
        />
        <BrushSizePanel
          activeSizeId={this.props.activeSizeId}
          sizes={this.props.sizes}
          onButtonClick={this.props.onSizeButtonClick}
        />
      </Container>
    )
  }
}